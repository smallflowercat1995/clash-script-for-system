(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var parseUserAgentString = require('../js/shared-utils/parse-user-agent-string.es6');

var browserInfo = parseUserAgentString();

function getConfigFileName() {
  var _browserInfo$browser;

  var browserName = (browserInfo === null || browserInfo === void 0 ? void 0 : (_browserInfo$browser = browserInfo.browser) === null || _browserInfo$browser === void 0 ? void 0 : _browserInfo$browser.toLowerCase()) || ''; // clamp to known browsers

  if (!['chrome', 'firefox', 'brave', 'edge'].includes(browserName)) {
    browserName = '';
  } else {
    browserName = '-' + browserName;
  }

  return "https://staticcdn.duckduckgo.com/trackerblocking/config/v2/extension".concat(browserName, "-config.json");
}

module.exports = {
  displayCategories: ['Analytics', 'Advertising', 'Social Network'],
  feedbackUrl: 'https://duckduckgo.com/feedback.js?type=extension-feedback',
  tosdrMessages: {
    A: 'Good',
    B: 'Mixed',
    C: 'Poor',
    D: 'Poor',
    E: 'Poor',
    good: 'Good',
    bad: 'Poor',
    unknown: 'Unknown',
    mixed: 'Mixed'
  },
  httpsService: 'https://duckduckgo.com/smarter_encryption.js',
  duckDuckGoSerpHostname: 'duckduckgo.com',
  httpsMessages: {
    secure: 'Encrypted Connection',
    upgraded: 'Forced Encryption',
    none: 'Unencrypted Connection'
  },

  /**
   * Major tracking networks data:
   * percent of the top 1 million sites a tracking network has been seen on.
   * see: https://webtransparency.cs.princeton.edu/webcensus/
   */
  majorTrackingNetworks: {
    google: 84,
    facebook: 36,
    twitter: 16,
    amazon: 14,
    appnexus: 10,
    oracle: 10,
    mediamath: 9,
    oath: 9,
    maxcdn: 7,
    automattic: 7
  },

  /*
   * Mapping entity names to CSS class name for popup icons
   */
  entityIconMapping: {
    'Google LLC': 'google',
    'Facebook, Inc.': 'facebook',
    'Twitter, Inc.': 'twitter',
    'Amazon Technologies, Inc.': 'amazon',
    'AppNexus, Inc.': 'appnexus',
    'MediaMath, Inc.': 'mediamath',
    'StackPath, LLC': 'maxcdn',
    'Automattic, Inc.': 'automattic',
    'Adobe Inc.': 'adobe',
    'Quantcast Corporation': 'quantcast',
    'The Nielsen Company': 'nielsen'
  },
  httpsDBName: 'https',
  httpsLists: [{
    type: 'upgrade bloom filter',
    name: 'httpsUpgradeBloomFilter',
    url: 'https://staticcdn.duckduckgo.com/https/https-bloom.json'
  }, {
    type: "don't upgrade bloom filter",
    name: 'httpsDontUpgradeBloomFilters',
    url: 'https://staticcdn.duckduckgo.com/https/negative-https-bloom.json'
  }, {
    type: 'upgrade safelist',
    name: 'httpsUpgradeList',
    url: 'https://staticcdn.duckduckgo.com/https/negative-https-allowlist.json'
  }, {
    type: "don't upgrade safelist",
    name: 'httpsDontUpgradeList',
    url: 'https://staticcdn.duckduckgo.com/https/https-allowlist.json'
  }],
  tdsLists: [{
    name: 'surrogates',
    url: '/data/surrogates.txt',
    format: 'text',
    source: 'local'
  }, {
    name: 'tds',
    url: 'https://staticcdn.duckduckgo.com/trackerblocking/v2.1/tds.json',
    format: 'json',
    source: 'external',
    channels: {
      live: 'https://staticcdn.duckduckgo.com/trackerblocking/v2.1/tds.json',
      next: 'https://staticcdn.duckduckgo.com/trackerblocking/v2.1/tds-next.json',
      beta: 'https://staticcdn.duckduckgo.com/trackerblocking/beta/tds.json'
    }
  }, {
    name: 'ClickToLoadConfig',
    url: 'https://staticcdn.duckduckgo.com/useragents/social_ctp_configuration.json',
    format: 'json',
    source: 'external'
  }, {
    name: 'config',
    url: getConfigFileName(),
    format: 'json',
    source: 'external'
  }],
  httpsErrorCodes: {
    'net::ERR_CONNECTION_REFUSED': 1,
    'net::ERR_ABORTED': 2,
    'net::ERR_SSL_PROTOCOL_ERROR': 3,
    'net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH': 4,
    'net::ERR_NAME_NOT_RESOLVED': 5,
    NS_ERROR_CONNECTION_REFUSED: 6,
    NS_ERROR_UNKNOWN_HOST: 7,
    'An additional policy constraint failed when validating this certificate.': 8,
    'Unable to communicate securely with peer: requested domain name does not match the server’s certificate.': 9,
    'Cannot communicate securely with peer: no common encryption algorithm(s).': 10,
    'SSL received a record that exceeded the maximum permissible length.': 11,
    'The certificate is not trusted because it is self-signed.': 12,
    downgrade_redirect_loop: 13
  },
  platform: {
    name: 'extension'
  },
  supportedLocales: ['cimode', 'en'] // cimode is for testing

};

},{"../js/shared-utils/parse-user-agent-string.es6":3}],2:[function(require,module,exports){
"use strict";

var constants = require('../../data/constants');

var listPicker = document.getElementById('list-picker');
var listEditor = document.getElementById('list-content');
var saveButton = document.getElementById('save');
var lists = constants.tdsLists;
var selected = lists[0].name;

function getListFormat(name) {
  var _lists$find;

  return (_lists$find = lists.find(function (l) {
    return l.name === name;
  })) === null || _lists$find === void 0 ? void 0 : _lists$find.format;
} // build switcher options


lists.forEach(function (_ref) {
  var name = _ref.name;
  var option = document.createElement('option');
  option.value = name;
  option.innerText = name;
  listPicker.appendChild(option);
});

function listSwitcher() {
  selected = listPicker.selectedOptions[0].value;
  loadList(selected);
  saveButton.removeAttribute('disabled');
}

listPicker.addEventListener('change', listSwitcher);
listSwitcher();

function sendMessage(messageType, options, callback) {
  chrome.runtime.sendMessage({
    messageType: messageType,
    options: options
  }, callback);
}

function loadList(name) {
  sendMessage('getListContents', name, function (_ref2) {
    var etag = _ref2.etag,
        data = _ref2.data;
    var value = getListFormat(name) === 'json' ? JSON.stringify(data, null, '  ') : data;
    document.querySelector('#list-content').value = value;
  });
}

function saveList(name) {
  var value = listEditor.value;
  sendMessage('setListContents', {
    name: name,
    value: getListFormat(name) === 'json' ? JSON.parse(value) : value
  }, function () {
    return loadList(name);
  });
}

function reloadList(name) {
  sendMessage('reloadList', name, function () {
    return loadList(name);
  });
}

saveButton.addEventListener('click', function () {
  saveList(selected);
});
document.getElementById('reload').addEventListener('click', function () {
  reloadList(selected);
});
listEditor.addEventListener('keypress', function () {
  setTimeout(function () {
    console.log('changed', getListFormat(selected));

    if (getListFormat(selected) === 'json') {
      try {
        saveButton.removeAttribute('disabled');
      } catch (e) {
        console.log('parse error');
        saveButton.setAttribute('disabled', true);
      }
    } else {
      saveButton.removeAttribute('disabled');
    }
  }, 0);
});

},{"../../data/constants":1}],3:[function(require,module,exports){
"use strict";

module.exports = function (uaString) {
  if (!globalThis.navigator) return;
  if (!uaString) uaString = globalThis.navigator.userAgent;
  var browser;
  var version;

  try {
    var parsedUaParts = uaString.match(/(Firefox|Chrome|Edg)\/([0-9]+)/);

    if (uaString.match(/(Edge?)\/([0-9]+)/)) {
      // Above regex matches on Chrome first, so check if this is really Edge
      parsedUaParts = uaString.match(/(Edge?)\/([0-9]+)/);
    }

    browser = parsedUaParts[1];
    version = parsedUaParts[2]; // Brave doesn't include any information in the UserAgent
    // @ts-ignore

    if (globalThis.navigator.brave) {
      browser = 'Brave';
    }
  } catch (e) {
    // unlikely, prevent extension from exploding if we don't recognize the UA
    browser = version = '';
  }

  var os = 'o';
  if (globalThis.navigator.userAgent.indexOf('Windows') !== -1) os = 'w';
  if (globalThis.navigator.userAgent.indexOf('Mac') !== -1) os = 'm';
  if (globalThis.navigator.userAgent.indexOf('Linux') !== -1) os = 'l';
  return {
    os: os,
    browser: browser,
    version: version
  };
};

},{}]},{},[2]);
