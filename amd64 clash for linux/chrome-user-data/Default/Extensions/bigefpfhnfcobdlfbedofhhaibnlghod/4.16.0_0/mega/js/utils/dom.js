/* eslint-disable strict */
/** @function window.createHTMLDocumentSandbox */
lazy(self, 'createHTMLDocumentSandbox', () => {
    'use strict';
    return tryCatch(() => {
        const sandbox = document.implementation.createHTMLDocument("");
        const base = sandbox.createElement("base");
        base.href = document.location.href;
        sandbox.head.appendChild(base);
        return sandbox;
    });
});

/**
 * Safely parse an HTML fragment, removing any executable
 * JavaScript, and return a document fragment.
 *
 * @param {string} markup The HTML fragment to parse.
 * @returns {DocumentFragment}
 */
function parseHTML(markup) {
    'use strict';
    if (!markup) {
        console.error('Empty content passed to parseHTML');
        markup = 'no content';
    }

    // console.time('parseHTML');

    const doc = createHTMLDocumentSandbox();
    const fragment = document.createDocumentFragment();

    markup = String(markup).replace(/<!--[\S\s]*?-->/g, '');

    var dumb = {'SCRIPT': 1, 'STYLE': 1, 'SVG': 1, 'XML': 1, 'OBJECT': 1, 'IFRAME': 1, 'EMBED': 1, 'MARQUEE': 1};

    $.parseHTML(markup, doc)
        .forEach((node) => {
            // console.debug(node.nodeName, node.outerHTML, node.data, [node]);

            var content = String(node.outerHTML).replace(/[\s\x00-\x19]+/g, '');
            var invalid = /<[^>]+script:/i.test(content);

            if (!invalid) {
                invalid = domNodeForEach(node, (n) => {
                    // console.warn('domNodeForEach(%s)', n.nodeName, [n]);

                    var nn = n.nodeName.substr(n.nodeName.indexOf(':') + 1);
                    return dumb[nn] || domAttributeForEach(n, ({name}) => {
                        // console.warn('domAttrForEach(%s:%s)', a.name, a.value, [a], [n]);

                        return name[0] === 'o' && name[1] === 'n'
                            || nn !== 'IMG' && name[0] === 's' && name[1] === 'r' && name[2] === 'c';
                    });
                });
            }

            if (invalid) {
                console.warn('Filtered out invalid content passed to parseHTML...', [node]);
            }
            else {
                fragment.appendChild(node);
            }
        });

    // console.timeEnd('parseHTML');

    return fragment;
}

/**
 * Handy printf-style parseHTML to apply escapeHTML
 * @param {string} markup The HTML fragment to parse.
 * @param {...*} args
 */
function parseHTMLfmt(markup, ...args) {
    if (args.length) {
        let idx = 0;
        markup = markup.replace(/@@/g, () => escapeHTML(args[idx++]));
    }
    return parseHTML(markup);
}

/**
 * Handy printf-style parseHTML to apply escapeHTML
 * @param {String} markup The HTML fragment to parse.
 * @param {...*} args
 */
function parseHTMLfmt2(markup, ...args) {
    if (args.length) {
        for (let idx = args.length; idx--;) {
            markup = markup.replace(RegExp(`%${idx}`, 'g'), escapeHTML(args[idx]));
        }
    }
    return parseHTML(markup);
}

/**
 * Safely inject an HTML fragment using parseHTML()
 * @param {string} markup The HTML fragment to parse.
 * @param {...*} var_args
 * @see This should be used instead of jQuery.html()
 * @example $(document.body).safeHTML('<script>alert("XSS");</script>It Works!');
 * @todo Safer versions of append, insert, before, after, etc
 */
(function(jQuery, stubs) {
    'use strict';

    const mock = (name) => {
        const meth = stubs[name];
        Object.defineProperty(jQuery, name, {
            value: function $afeCall(...args) {
                let i = this.length;
                if (i) {
                    const fragment = args[0] === '%n' ? parseHTMLfmt2(...args.slice(1)) : parseHTMLfmt(...args);

                    while (i--) {
                        meth(this[i], fragment, i);
                    }
                }
                return this;
            }
        });
    };

    const meths = Object.keys(stubs);
    for (let i = meths.length; i--;) {
        mock(meths[i]);
    }
    jQuery = stubs = undefined;
})($.fn, {
    safePrepend: (target, fragment, clone) => {
        if (target.nodeType === 1) {
            target.insertBefore(clone ? fragment.cloneNode(true) : fragment, target.firstChild);
        }
    },
    safeAppend: (target, fragment, clone) => {
        if (target.nodeType === 1) {
            target.appendChild(clone ? fragment.cloneNode(true) : fragment);
        }
    },
    safeHTML: (target, fragment, clone) => {
        if (target.nodeType === 1) {
            target.textContent = '';
            target.appendChild(clone ? fragment.cloneNode(true) : fragment);
        }
    }
});

/**
 * Escape HTML markup
 * @param {string} str The HTML fragment to parse.
 * NB: This should be the same than our legacy `htmlentities`
 *     function, except that it's faster and deals with quotes
 */
function escapeHTML(str) {
    return String(str).replace(/["&'<>]/g, (match) => escapeHTML.replacements[match]);
}
escapeHTML.replacements = {"&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;"};

// deprecated
function htmlentities(value) {
    if (!value) {
        return '';
    }
    return $('<div/>').text(value).html();
}

/**
 * Purge html content from an string
 * @param {String} str The html string
 * @param {Boolean} escape Whether we want the result escaped,
 *                         MUST be set if you want to insert the string back in the DOM as html
 */
function removeHTML(str, escape) {
    'use strict';
    str = $('<div/>').safeHTML(str).text();
    return escape ? escapeHTML(str) : str;
}

/**
 * Traverses a DOM Node hierarchy
 * @param {Object} node the parent node
 * @param {Function} callback Function to invoke for each node
 * @param {*} [irn] Ignore root node
 * @returns {Boolean} The callback result
 */
function domNodeForEach(node, callback, irn) {
    'use strict';

    const {childNodes} = node;
    let len = childNodes && childNodes.length;
    while (len--) {
        const n = childNodes[len];

        if (n.nodeType === 1 && callback(n)) {
            return true;
        }

        if (n.hasChildNodes() && domNodeForEach(n, callback, 1)) {
            return true;
        }
    }

    return irn ? false : callback(node, true);
}

/**
 * Traverses a DOM Node's attributes
 * @param {Object} node the parent node
 * @param {Function} callback Function to invoke for each node
 * @returns {Boolean} The callback result
 */
function domAttributeForEach(node, callback) {
    'use strict';

    const {attributes} = node;
    let len = attributes && attributes.length;
    while (len--) {
        if (callback(attributes[len], node)) {
            return true;
        }
    }

    return false;
}
