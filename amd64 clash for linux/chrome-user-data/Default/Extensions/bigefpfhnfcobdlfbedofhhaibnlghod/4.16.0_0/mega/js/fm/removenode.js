function removeUInode(h, parent) {
    'use strict';

    let hasSubFolders = 0;
    const n = M.getNodeByHandle(h);

    parent = parent || M.getNodeParent(n || h);

    // check subfolders
    if (n && n.t) {
        const cns = M.c[parent];
        if (cns) {
            for (var cn in cns) {
                if (M.d[cn] && M.d[cn].t && cn !== h) {
                    hasSubFolders++;
                    break;
                }
            }
        }
    }

    // Update M.v it's used for at least preview slideshow
    for (var k = M.v.length; k--;) {
        var v = M.v[k].ch || M.v[k].h;
        if (v === h) {
            if (slideshowid === v) {
                (function(h) {
                    onIdle(function() {
                        slideshow(h, !h);
                    });
                })(slideshow_steps().backward[0]);
            }
            M.v.splice(k, 1);
            break;
        }
    }

    if (M.currentCustomView.type === 'gallery') {
        mega.gallery.checkEveryGalleryDelete(h);
    }
    else {
        mega.gallery.nodeUpdated = true;
    }

    var hasItems = !!M.v.length;
    const __markEmptied = () => {

        let fmRightFileBlock = document.querySelector('.fm-right-files-block:not(.in-chat)');

        if (fmRightFileBlock) {
            fmRightFileBlock.classList.add('emptied');
        }
    };

    switch (M.currentdirid) {
        case "shares":
            $('#treeli_' + h).remove();// remove folder and subfolders
            if (!hasItems) {

                __markEmptied();
                $('.fm-empty-incoming').removeClass('hidden');
            }
            break;
        case "chat":
            if (!hasItems) {

                __markEmptied();
                $('.fm-empty-chat').removeClass('hidden');
            }
            break;
        case M.RubbishID:
            if (!hasSubFolders) {
                $('#treea_' + parent).removeClass('contains-folders expanded');
            }

            // Remove item
            $('#' + h).remove();

            // Remove folder and subfolders
            $('#treeli_' + h).remove();
            if (!hasItems) {

                __markEmptied();
                $('.fm-empty-trashbin').removeClass('hidden');
                $('.fm-clearbin-button').addClass('hidden');
            }
            break;
        case M.RootID:
            if (!hasSubFolders) {
                $('#treea_' + parent).removeClass('contains-folders expanded');
            }

            // Remove item
            $('#' + h).remove();

            // Remove folder and subfolders
            $('#treeli_' + h).remove();
            if (!hasItems) {

                __markEmptied();
                $('.files-grid-view').addClass('hidden');
                $('.grid-table.fm tbody tr').remove();

                if (folderlink) {
                    $('.fm-empty-folder').removeClass('hidden');
                }
                else {
                    $('.fm-empty-cloud').removeClass('hidden');
                }
            }
            break;
        case 'photos':
        case 'images':
        case 'videos':
        case 'favourites':
        case `discovery/${M.currentCustomView.nodeID}`:
            if (!hasItems) {

                __markEmptied();
                $('.files-grid-view').addClass('hidden');
                $('.grid-table.fm tbody tr').remove();

                $(`.fm-empty-${M.currentdirid.startsWith('discovery/') ? 'discovery' : M.currentdirid}`)
                    .removeClass('hidden');
            }
            break;
        default:
            if (M.chat || M.currentdirid.indexOf('user-management') >= 0) {
                break;
            }
            if (!hasSubFolders) {
                $('#treea_' + parent).removeClass('contains-folders expanded');
            }
            $('#' + h).remove();// remove item
            $('#treeli_' + h).remove();// remove folder and subfolders
            if (!hasItems) {

                __markEmptied();
                if (sharedFolderUI()) {
                    M.emptySharefolderUI();
                }
                else {
                    $('.files-grid-view').addClass('hidden');
                    if (M.currentdirid !== 'public-links') {
                        $('.fm-empty-folder').removeClass('hidden');
                    }
                }
                $('.grid-table.fm tbody tr').remove();
            }
            break;
    }

    if (M.megaRender && M.megaRender.megaList) {
        if (parent) {
            // this was a move node op
            if (parent === M.currentdirid || parent === M.currentCustomView.nodeID) {
                // the node was moved out of the current viewport, so lets remove it from the MegaList
                M.megaRender.megaList.remove(h);
            }
        }
        else {
            M.megaRender.megaList.remove(h);
        }
    }

    M.nodeRemovalUIRefresh(h,  parent);
}

/**
 * Remove nodes
 * @param {Array|String} selectedNodes An array of node handles.
 * @param {Boolean} [skipDelWarning] skip..del..warning..
 * @returns {MegaPromise}
 */
function fmremove(selectedNodes, skipDelWarning) {
    'use strict';

    var promise = new MegaPromise();
    var handles;

    if (selectedNodes) {
        if (!Array.isArray(selectedNodes)) {
            selectedNodes = [selectedNodes];
        }
    }
    else {
        selectedNodes = $.selected || [];
    }
    handles = selectedNodes.concat();

    dbfetch.coll(handles)
        .always(function() {
            var doRemoveShare = handles.some(function(h) {
                return M.d[h] && M.d[h].su;
            });

            if (doRemoveShare) {
                var promises = [];

                for (var i = handles.length; i--;) {
                    promises.push(M.leaveShare(handles[i]));
                }

                promise.linkDoneAndFailTo(MegaPromise.allDone(promises));
            }
            else {
                fmremove.sync(selectedNodes, skipDelWarning);
                promise.resolve();
            }
        });

    return promise;
}

// @todo make eslint happy..
// eslint-disable-next-line complexity,sonarjs/cognitive-complexity
fmremove.sync = function(selectedNodes, skipDelWarning) {
    'use strict';

    var i = 0;
    var filecnt = 0;
    var foldercnt = 0;
    var contactcnt = 0;
    var removesharecnt = 0;
    var title = '';
    var message = '';

    // If on mobile we will bypass the warning dialog prompts
    skipDelWarning = skipDelWarning || is_mobile ? 1 : mega.config.get('skipDelWarning');

    for (i = 0; i < selectedNodes.length; i++) {
        var n = M.d[selectedNodes[i]];

        if (n && n.su) {
            removesharecnt++;
        }
        else if (String(selectedNodes[i]).length === 11) {
            contactcnt++;
        }
        else if (n && n.t) {
            foldercnt++;
        }
        else {
            filecnt++;
        }
    }

    if (removesharecnt) {
        for (i = 0; i < selectedNodes.length; i++) {
            M.leaveShare(selectedNodes[i]);
        }
        M.openFolder('shares', true);
    }

    // Remove contacts from list
    else if (contactcnt) {

        var c = selectedNodes.length;
        var replaceString = '';
        var sharedFoldersAlertMessage = l[7872];

        if (c > 1) {
            replaceString = c + ' ' + l[5569];
            sharedFoldersAlertMessage = l[17974];
        }
        else {
            var contactName = escapeHTML(M.getNameByHandle(selectedNodes[0]) || '');
            replaceString = '<strong>' + contactName + '</strong>';
            sharedFoldersAlertMessage = sharedFoldersAlertMessage.replace('[X]', contactName);
        }

        msgDialog('delete-contact', l[1001], l[1002].replace('[X]', replaceString), sharedFoldersAlertMessage,
            function(e) {
                if (e) {
                    for (i = 0; i < selectedNodes.length; i++) {
                        var selected = selectedNodes[i];

                        if (M.c[selected]) {
                            Object.keys(M.c[selected])
                                .forEach(function(sharenode) {
                                    M.leaveShare(sharenode);
                                });
                        }

                        api_req({a: 'ur2', u: selected, l: '0', i: requesti});
                        M.handleEmptyContactGrid();
                    }
                }
            });
        if (c > 1) {
            $('#msgDialog').addClass('multiple');
            $('#msgDialog .fm-del-contact-avatar')
                .safeHTML(`<i class="multiple sprite-fm-uni icon-users"></i>
                    <span></span>
                    <div class="fm-del-contacts-number"></div>`);
            $('.fm-del-contacts-number').text(selectedNodes.length);
            $('#msgDialog .fm-del-contact-avatar').attr('class', 'fm-del-contact-avatar');
            $('#msgDialog .fm-del-contact-avatar span').empty();
        }
        else {
            var user = M.u[selectedNodes[0]];
            var avatar = useravatar.contact(user, 'avatar-remove-dialog');

            $('#msgDialog .fm-del-contact-avatar').safeHTML(avatar);
        }
    }

    // Remove selected nodes from rubbish bin
    else if (M.getNodeRoot(selectedNodes[0]) === M.RubbishID) {

        var dlgMessage = '';
        var toastMessage = '';

        if (filecnt > 0 && !foldercnt) {
            dlgMessage = mega.icu.format(l[13750], filecnt);
            toastMessage = mega.icu.format(l[13758], filecnt);
        }
        else if (!filecnt && foldercnt > 0) {
            dlgMessage = mega.icu.format(l[13752], foldercnt);
            toastMessage = mega.icu.format(l[13760], foldercnt);
        }
        else if (filecnt && foldercnt) {
            const itemscnt = filecnt + foldercnt;
            dlgMessage = mega.icu.format(l[13754], itemscnt);
            toastMessage = mega.icu.format(l[13762], itemscnt);
        }

        msgDialog('clear-bin:' + l[83], l[1003], dlgMessage, l[1007], function(e) {
            if (e) {
                var tmp = null;
                if (String(M.currentdirid).substr(0, 7) === 'search/') {
                    tmp = M.currentdirid;
                    M.currentdirid = M.getNodeByHandle(selectedNodes[0]).p || M.RubbishID;
                }
                M.clearRubbish(false)
                    .always(function() {
                        if (tmp) {
                            M.currentdirid = tmp;
                        }
                    })
                    .done(function() {
                        showToast('settings', toastMessage);
                    });
            }
        });
    }

    // Remove contacts
    else if (M.getNodeRoot(selectedNodes[0]) === 'contacts') {
        if (skipDelWarning) {
            M.copyNodes(selectedNodes, M.RubbishID, true);
        }
        else {
            title = l[1003];
            if (filecnt > 0 && foldercnt === 0) {
                message = mega.icu.format(l.move_rubbish_files, filecnt);
            }
            else if (filecnt === 0 && foldercnt > 0) {
                message = mega.icu.format(l.move_rubbish_folders, foldercnt);
            }
            else {
                message = mega.icu.format(l.move_rubbish_items, filecnt + foldercnt);
            }

            msgDialog('confirmation', title, message, false, function(e) {
                    if (e) {
                        M.copyNodes(selectedNodes, M.RubbishID, 1);
                    }
            }, 'skipDelWarning');
        }
    }
    else {
        var moveToRubbish = function() {
            loadingDialog.pshow();
            M.moveToRubbish(selectedNodes).always(loadingDialog.phide.bind(loadingDialog)).done(function () {
                // Re-render the search result page after files being removed
                if (M.currentdirid.split("/")[0] === "search") {
                    M.openFolder(M.currentdirid, true);
                }
            });
        };

        if (skipDelWarning) {
            moveToRubbish();
        }
        else {
            title = l[1003];
            if (filecnt > 0 && foldercnt === 0) {
                message = mega.icu.format(l.move_rubbish_files, filecnt);
            }
            else if (filecnt === 0 && foldercnt > 0) {
                message = mega.icu.format(l.move_rubbish_folders, foldercnt);
            }
            else {
                message = mega.icu.format(l.move_rubbish_items, filecnt + foldercnt);
            }

            msgDialog('remove', title, message, l[1952] + ' ' + l[7410], function(yes) {
                if (yes) {
                    moveToRubbish();
                }
            }, 'skipDelWarning');
        }
    }
};

/**
 * Generate file manager contains text message
 *
 * @param {Number} filecnt          The number of files
 * @param {Number} foldercnt        The number of folders
 * @param {Boolean} lineBreak       Indicate needs a line break or not
 * @returns {String} containstext   Contains text message
 */
function fm_contains(filecnt, foldercnt, lineBreak) {

    "use strict";

    var containstxt = l[782];
    var folderText = mega.icu.format(l.folder_count, foldercnt);
    var fileText = mega.icu.format(l.file_count, filecnt);

    if (foldercnt >= 1 && filecnt >= 1 && lineBreak) {
        containstxt = `${folderText}<br>${fileText}`;
    }
    else if (foldercnt >= 1 && filecnt >= 1) {
        containstxt = l.file_and_folder_count.replace('[X1]', folderText).replace('[X2]', fileText);
    }
    else if (foldercnt > 0) {
        containstxt = folderText;
    }
    else if (filecnt > 0) {
        containstxt = fileText;
    }

    return containstxt;
}


function fmremdupes(test) {
    var hs = {}, i, f = [], s = 0;
    var cRootID = M.currentrootid;
    loadingDialog.show();
    for (i in M.d) {
        var n = M.d[i];
        if (n && n.hash && n.h && M.getNodeRoot(n.h) === cRootID) {
            if (!hs[n.hash]) {
                hs[n.hash] = [];
            }
            hs[n.hash].push(n.h);
        }
    }
    for (i in hs) {
        var h = hs[i];
        while (h.length > 1)
            f.push(h.pop());
    }
    for (i in f) {
        console.debug('Duplicate node: ' + f[i] + ' at ~/'
            + M.getPath(f[i]).reverse().map(function(n) {
                return M.d[n].name || ''
            }).filter(String).join("/"));
        s += M.d[f[i]].s | 0;
    }
    loadingDialog.hide();
    console.log('Found ' + f.length + ' duplicated files using a sum of ' + bytesToSize(s));
    if (!test && f.length) {
        fmremove(f);
    }
    return f.length;
}
