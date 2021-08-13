// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2rAXy":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"fNmB3"}],"fNlah":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "d4d61188f41824d7";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9qPrh":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$09b8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$09b8.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _ClientForm = _interopRequireDefault(require("./ClientForm"));
var _ClientCard = _interopRequireDefault(require("./ClientCard"));
var _ClientSkeleton = _interopRequireDefault(require("./ClientSkeleton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
const localCache = {
    clients: []
};
class Clients extends _react.Component {
    constructor(...args){
        super(...args);
        _defineProperty(this, "state", {
            clients: [],
            showAddForm: false,
            status: "unloaded",
            updating: {
            }
        });
        _defineProperty(this, "handleAddButtonClick", ()=>{
            this.setState(Object.assign({
                showAddForm: !this.state.showAddForm
            }));
        });
        _defineProperty(this, "addClient", async (form)=>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    body: JSON.stringify({
                        ...form
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                const json = await res.json();
                this.setState({
                    clients: [
                        ...this.state.clients,
                        json
                    ],
                    showAddForm: false
                });
                localCache.clients = this.state.clients;
            } catch (error) {
                console.log(error);
            }
        });
        _defineProperty(this, "cancelAddClient", ()=>{
            this.setState({
                showAddForm: false
            });
        });
        _defineProperty(this, "deleteClient", async (clientId)=>{
            try {
                await fetch(`https://jsonplaceholder.typicode.com/users/${clientId}`, {
                    method: "DELETE"
                });
                const remainingClients = this.state.clients.filter((client)=>client.id !== clientId
                );
                this.setState({
                    clients: remainingClients
                });
                localCache.clients = this.state.clients;
            } catch (error) {
                console.log(error);
            }
        });
        _defineProperty(this, "toggleUpdateClient", (index)=>{
            this.setState((prevState)=>{
                const updating = {
                    ...prevState.updating
                };
                updating[index] = !updating[index];
                return {
                    updating
                };
            });
        });
        _defineProperty(this, "updateClient", async (form, clientId, index)=>{
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${clientId}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        ...form
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                const json = await res.json();
                const updatedClientIndex = this.state.clients.findIndex((client)=>client.id === clientId
                );
                this.state.clients.splice(updatedClientIndex, 1);
                this.setState({
                    clients: [
                        ...this.state.clients,
                        json
                    ],
                    showAddForm: false
                });
                localCache.clients = this.state.clients;
                this.toggleUpdateClient(index);
            } catch (error) {
                console.log(error);
            }
        });
    }
    async componentDidMount() {
        if (localCache.clients.length) {
            this.setState(Object.assign({
                clients: localCache.clients,
                status: "loaded"
            }));
            return;
        }
        try {
            this.setState(Object.assign({
                clients: Array(10).fill(undefined),
                status: "loading"
            })); // from https://jsonplaceholder.typicode.com/
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await res.json();
            this.setState(Object.assign({
                clients: json,
                status: "loaded"
            }));
            localCache.clients = this.state.clients;
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
            children: [
                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                    className: "flex-col sm:flex sm:flex-row sm:items-baseline sm:justify-between",
                    children: [
                        /*#__PURE__*/ _jsxRuntime.jsx("h1", {
                            children: "Clients"
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsx("button", {
                            type: "button",
                            className: "ml-4 sm:ml-0 btn btn-primary",
                            onClick: this.handleAddButtonClick,
                            children: this.state.showAddForm ? "Close" : "Add"
                        })
                    ]
                }),
                this.state.showAddForm ? /*#__PURE__*/ _jsxRuntime.jsx(_ClientForm.default, {
                    onAddClient: ()=>this.addClient
                    ,
                    title: "Add new client",
                    submitButtonText: "Add client",
                    submitAction: "addClient",
                    onCancelAddClient: this.cancelAddClient
                }) : null,
                /*#__PURE__*/ _jsxRuntime.jsx("ul", {
                    className: "clients",
                    children: this.state.clients.map((client, index)=>{
                        const isUpdating = this.state.updating[index];
                        return ({
                            loading: /*#__PURE__*/ _jsxRuntime.jsx("li", {
                                children: /*#__PURE__*/ _jsxRuntime.jsx(_ClientSkeleton.default, {
                                })
                            }, index),
                            loaded: isUpdating ? /*#__PURE__*/ _jsxRuntime.jsx("li", {
                                children: /*#__PURE__*/ _jsxRuntime.jsx(_ClientForm.default, {
                                    client: client,
                                    onUpdateClient: (formInputs, clientId)=>this.updateClient(formInputs, clientId, index)
                                    ,
                                    title: "Update",
                                    submitButtonText: "Update",
                                    submitAction: "updateClient",
                                    onCancelUpdateClient: ()=>this.toggleUpdateClient(index)
                                })
                            }, index) : /*#__PURE__*/ _jsxRuntime.jsx("li", {
                                children: /*#__PURE__*/ _jsxRuntime.jsx(_ClientCard.default, {
                                    client: client,
                                    onDeleteClient: ()=>this.deleteClient
                                    ,
                                    onUpdateClient: ()=>this.toggleUpdateClient(index)
                                })
                            }, index)
                        })[this.state.status];
                    })
                })
            ]
        }));
    }
}
var _default = _reactRouterDom.withRouter(Clients);
exports.default = _default;

  $parcel$ReactRefreshHelpers$09b8.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"6TuXu","react-router-dom":"cpyQW","./ClientForm":"8zgTB","./ClientCard":"98VtH","./ClientSkeleton":"aKMBB","react/jsx-runtime":"8xIwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"5V79J"}],"8zgTB":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$567a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$567a.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class ClientForm extends _react.Component {
    constructor(...args){
        super(...args);
        _defineProperty(this, "state", {
            formInputs: {
                address: {
                    suite: "",
                    city: "",
                    street: "",
                    zipcode: ""
                },
                company: {
                    name: ""
                },
                website: "",
                name: "",
                email: "",
                phone: "",
                id: 0
            }
        });
        _defineProperty(this, "handleInputChange", (event, optionalObjTitle)=>{
            const target = event.target;
            const inputValue = target.type === "checkbox" ? target.checked : target.value;
            const name = target.name;
            const stateCopy = Object.assign({
            }, this.state);
            optionalObjTitle ? stateCopy.formInputs[optionalObjTitle][name] = inputValue : stateCopy.formInputs[name] = inputValue;
            this.setState(stateCopy);
        });
        _defineProperty(this, "handleCancelButtonClick", ()=>{
            switch(this.props.submitAction){
                case "addClient":
                    return this.props.onCancelAddClient();
                case "updateClient":
                    return this.props.onCancelUpdateClient();
                default:
                    throw new Error();
            }
        });
    }
    componentDidMount() {
        if (this.props.client) this.setState(Object.assign({
            formInputs: this.props.client
        }));
    }
    handleSubmitClient() {
        switch(this.props.submitAction){
            case "addClient":
                return this.props.onAddClient(this.state.formInputs);
            case "updateClient":
                return this.props.onUpdateClient(this.state.formInputs, this.props.client.id);
            default:
                throw new Error();
        }
    }
    render() {
        const { website , name , email , phone , address: { suite , street , city , zipcode  }  } = this.state.formInputs;
        return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
            className: "border-card",
            children: [
                /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                    children: this.props.title
                }),
                /*#__PURE__*/ _jsxRuntime.jsxs("form", {
                    id: "clientForm",
                    onSubmit: (e)=>{
                        e.preventDefault();
                        this.handleSubmitClient();
                    },
                    children: [
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            className: "form-input",
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                    htmlFor: "companyName",
                                    children: "Company Name (required)"
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                    type: "text",
                                    id: "companyName",
                                    name: "name",
                                    value: this.state.formInputs.company.name,
                                    required: true,
                                    "aria-required": "true",
                                    onChange: (e)=>this.handleInputChange(e, "company")
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            className: "form-input",
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                    htmlFor: "website",
                                    children: "Website"
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                    type: "text",
                                    id: "website",
                                    name: "website",
                                    value: website,
                                    onChange: ()=>this.handleInputChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("h3", {
                                    children: "Client Address"
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                            className: "form-input",
                                            children: [
                                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                    htmlFor: "suite",
                                                    children: "Suite/Apt"
                                                }),
                                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                    type: "text",
                                                    id: "suite",
                                                    name: "suite",
                                                    value: suite,
                                                    onChange: (e)=>this.handleInputChange(e, "address")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                            className: "form-input",
                                            children: [
                                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                    htmlFor: "street",
                                                    children: "Street (required)"
                                                }),
                                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                    type: "text",
                                                    id: "street",
                                                    name: "street",
                                                    required: true,
                                                    "aria-required": "true",
                                                    value: street,
                                                    onChange: (e)=>this.handleInputChange(e, "address")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                            className: "form-input",
                                            children: [
                                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                    htmlFor: "city",
                                                    children: "City (required)"
                                                }),
                                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                    type: "text",
                                                    id: "city",
                                                    name: "city",
                                                    required: true,
                                                    "aria-required": "true",
                                                    value: city,
                                                    onChange: (e)=>this.handleInputChange(e, "address")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                            className: "form-input",
                                            children: [
                                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                    htmlFor: "zipcode",
                                                    children: "Zip code (required)"
                                                }),
                                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                    type: "text",
                                                    id: "zipcode",
                                                    name: "zipcode",
                                                    required: true,
                                                    "aria-required": "true",
                                                    value: zipcode,
                                                    onChange: (e)=>this.handleInputChange(e, "address")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("h3", {
                                    children: "Client Contact"
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "form-input",
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                            htmlFor: "fullName",
                                            children: "Full name (required)"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                            type: "text",
                                            id: "fullName",
                                            name: "name",
                                            required: true,
                                            "aria-required": "true",
                                            value: name,
                                            onChange: ()=>this.handleInputChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                            className: "form-input",
                                            children: [
                                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                    htmlFor: "email",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    value: email,
                                                    onChange: ()=>this.handleInputChange
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                            className: "form-input",
                                            children: [
                                                /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                    htmlFor: "phone",
                                                    children: "Phone number"
                                                }),
                                                /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                    type: "tel",
                                                    id: "phone",
                                                    name: "phone",
                                                    value: phone,
                                                    onChange: ()=>this.handleInputChange
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            className: "flex space-x-5 mt-5",
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("button", {
                                    className: "btn btn-primary",
                                    children: this.props.submitButtonText
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("button", {
                                    className: "btn btn-secondary",
                                    type: "button",
                                    onClick: this.handleCancelButtonClick,
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
}
var _default = ClientForm;
exports.default = _default;

  $parcel$ReactRefreshHelpers$567a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"6TuXu","react/jsx-runtime":"8xIwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"5V79J"}],"98VtH":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b02c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b02c.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
class ClientCard extends _react.Component {
    handleDeleteClient(clientId) {
        return this.props.onDeleteClient(clientId);
    }
    handleUpdateClient() {
        return this.props.onUpdateClient();
    }
    render() {
        var _client$address, _client$address2, _client$address3, _client$address4;
        const { client  } = this.props;
        return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
            className: "border-card",
            children: [
                /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                    children: client.company.name
                }),
                client.website ? /*#__PURE__*/ _jsxRuntime.jsx("a", {
                    href: client.website,
                    children: client.website
                }) : null,
                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                    className: "grid sm:grid-cols-2 gap-4 mt-7 clients",
                    children: [
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: client === null || client === void 0 ? void 0 : (_client$address = client.address) === null || _client$address === void 0 ? void 0 : _client$address.suite
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: client === null || client === void 0 ? void 0 : (_client$address2 = client.address) === null || _client$address2 === void 0 ? void 0 : _client$address2.street
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: client === null || client === void 0 ? void 0 : (_client$address3 = client.address) === null || _client$address3 === void 0 ? void 0 : _client$address3.city
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: client === null || client === void 0 ? void 0 : (_client$address4 = client.address) === null || _client$address4 === void 0 ? void 0 : _client$address4.zipcode
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: "Contact:"
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: client.name
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: /*#__PURE__*/ _jsxRuntime.jsx("a", {
                                        href: client.email,
                                        children: client.email
                                    })
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("a", {
                                    href: client.phone,
                                    children: client.phone
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                    className: "flex space-x-5 mt-5",
                    children: [
                        /*#__PURE__*/ _jsxRuntime.jsx("button", {
                            className: "btn btn-secondary",
                            onClick: ()=>this.handleUpdateClient()
                            ,
                            children: "Update"
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsx("button", {
                            className: "btn btn-danger",
                            onClick: ()=>this.handleDeleteClient(client.id)
                            ,
                            children: "Delete"
                        })
                    ]
                })
            ]
        }));
    }
}
var _default = ClientCard;
exports.default = _default;

  $parcel$ReactRefreshHelpers$b02c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"6TuXu","react/jsx-runtime":"8xIwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"5V79J"}],"aKMBB":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3c37 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3c37.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = require("react");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ClientSkeleton extends _react.Component {
    render() {
        return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
            className: "border-card",
            children: [
                /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                    children: /*#__PURE__*/ _jsxRuntime.jsx(_reactLoadingSkeleton.default, {
                    })
                }),
                /*#__PURE__*/ _jsxRuntime.jsx(_reactLoadingSkeleton.default, {
                }),
                /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                    className: "grid sm:grid-cols-2 gap-4 mt-7 clients",
                    children: [
                        /*#__PURE__*/ _jsxRuntime.jsx(_reactLoadingSkeleton.default, {
                            count: 4
                        }),
                        /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                    children: "Contact:"
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx(_reactLoadingSkeleton.default, {
                                    count: 3
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
}
var _default = ClientSkeleton;
exports.default = _default;

  $parcel$ReactRefreshHelpers$3c37.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"6TuXu","react-loading-skeleton":"ikS7l","react/jsx-runtime":"8xIwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"5V79J"}],"ikS7l":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return _skeleton.default;
    }
});
Object.defineProperty(exports, "SkeletonTheme", {
    enumerable: true,
    get: function get() {
        return _skeletonTheme.default;
    }
});
var _skeleton = _interopRequireDefault(require("./skeleton"));
var _skeletonTheme = _interopRequireDefault(require("./skeleton-theme"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

},{"./skeleton":"h1MN2","./skeleton-theme":"clyMF"}],"h1MN2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Skeleton;
exports.skeletonStyles = exports.skeletonKeyframes = exports.defaultHighlightColor = exports.defaultBaseColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@emotion/core");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  0% {\n    background-position: -200px 0;\n  }\n  ",
        "\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"
    ]);
    _templateObject = function _templateObject1() {
        return data;
    };
    return data;
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var defaultBaseColor = "#eee";
exports.defaultBaseColor = defaultBaseColor;
var defaultHighlightColor = "#f5f5f5";
exports.defaultHighlightColor = defaultHighlightColor;
var skeletonKeyframes = function skeletonKeyframes1(duration, delay) {
    return _core.keyframes(_templateObject(), delay > 0 ? "".concat(Math.floor(1 / (duration + delay) * duration * 100), "% {\n    background-position: calc(200px + 100%) 0;\n  }") : undefined);
};
exports.skeletonKeyframes = skeletonKeyframes;
var skeletonStyles = /*#__PURE__*/ _core.css("background-color:", defaultBaseColor, ";background-image:linear-gradient( 90deg,", defaultBaseColor, ",", defaultHighlightColor, ",", defaultBaseColor, " );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmlDIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSAoZHVyYXRpb24sIGRlbGF5KSA9PiBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAke1xuICAgIGRlbGF5ID4gMFxuICAgICAgPyBgJHtNYXRoLmZsb29yKCgxIC8gKGR1cmF0aW9uICsgZGVsYXkpKSAqIGR1cmF0aW9uICogMTAwKX0lIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDIwMHB4ICsgMTAwJSkgMDtcbiAgfWBcbiAgICAgIDogdW5kZWZpbmVkXG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygyMDBweCArIDEwMCUpIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblN0eWxlcyA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkZWZhdWx0QmFzZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn0sXG4gICAgJHtkZWZhdWx0SGlnaGxpZ2h0Q29sb3J9LFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn1cbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b24oe1xuICBjb3VudCxcbiAgZHVyYXRpb24sXG4gIHdpZHRoLFxuICB3cmFwcGVyOiBXcmFwcGVyLFxuICBoZWlnaHQsXG4gIGNpcmNsZSxcbiAgZGVsYXksXG4gIHN0eWxlOiBjdXN0b21TdHlsZSxcbiAgY2xhc3NOYW1lOiBjdXN0b21DbGFzc05hbWVcbn0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCAmJiBjaXJjbGUpIHtcbiAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGN1c3RvbUNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXtpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgJHtza2VsZXRvblN0eWxlc31cbiAgICAgICAgICBhbmltYXRpb246ICR7c2tlbGV0b25LZXlmcmFtZXMoZHVyYXRpb24sIGRlbGF5KX0gJHtkdXJhdGlvbiArXG4gICAgICAgICAgZGVsYXl9cyBlYXNlLWluLW91dCBpbmZpbml0ZVxuICAgICAgICBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmN1c3RvbVN0eWxlLFxuICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICZ6d25qO1xuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1dyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAmenduajtcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICA6IGVsZW1lbnRzfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgZHVyYXRpb246IDEuMixcbiAgd2lkdGg6IG51bGwsXG4gIHdyYXBwZXI6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgY2lyY2xlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn07XG4iXX0= */");
exports.skeletonStyles = skeletonStyles;
function Skeleton(_ref) {
    var count = _ref.count, duration = _ref.duration, width = _ref.width, Wrapper = _ref.wrapper, height = _ref.height, circle = _ref.circle, delay = _ref.delay, customStyle = _ref.style, customClassName = _ref.className;
    var elements = [];
    for(var i = 0; i < count; i++){
        var style = {
        };
        if (width !== null) style.width = width;
        if (height !== null) style.height = height;
        if (width !== null && height !== null && circle) style.borderRadius = "50%";
        var className = "react-loading-skeleton";
        if (customClassName) className += " " + customClassName;
        elements.push(_core.jsx("span", {
            key: i,
            className: className,
            css: /*#__PURE__*/ _core.css(skeletonStyles, " animation:", skeletonKeyframes(duration, delay), " ", duration + delay, "s ease-in-out infinite;label:Skeleton;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWdCIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSAoZHVyYXRpb24sIGRlbGF5KSA9PiBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAke1xuICAgIGRlbGF5ID4gMFxuICAgICAgPyBgJHtNYXRoLmZsb29yKCgxIC8gKGR1cmF0aW9uICsgZGVsYXkpKSAqIGR1cmF0aW9uICogMTAwKX0lIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDIwMHB4ICsgMTAwJSkgMDtcbiAgfWBcbiAgICAgIDogdW5kZWZpbmVkXG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygyMDBweCArIDEwMCUpIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblN0eWxlcyA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkZWZhdWx0QmFzZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn0sXG4gICAgJHtkZWZhdWx0SGlnaGxpZ2h0Q29sb3J9LFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn1cbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b24oe1xuICBjb3VudCxcbiAgZHVyYXRpb24sXG4gIHdpZHRoLFxuICB3cmFwcGVyOiBXcmFwcGVyLFxuICBoZWlnaHQsXG4gIGNpcmNsZSxcbiAgZGVsYXksXG4gIHN0eWxlOiBjdXN0b21TdHlsZSxcbiAgY2xhc3NOYW1lOiBjdXN0b21DbGFzc05hbWVcbn0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCAmJiBjaXJjbGUpIHtcbiAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGN1c3RvbUNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXtpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgJHtza2VsZXRvblN0eWxlc31cbiAgICAgICAgICBhbmltYXRpb246ICR7c2tlbGV0b25LZXlmcmFtZXMoZHVyYXRpb24sIGRlbGF5KX0gJHtkdXJhdGlvbiArXG4gICAgICAgICAgZGVsYXl9cyBlYXNlLWluLW91dCBpbmZpbml0ZVxuICAgICAgICBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmN1c3RvbVN0eWxlLFxuICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICZ6d25qO1xuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1dyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAmenduajtcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICA6IGVsZW1lbnRzfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgZHVyYXRpb246IDEuMixcbiAgd2lkdGg6IG51bGwsXG4gIHdyYXBwZXI6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgY2lyY2xlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn07XG4iXX0= */"),
            style: _objectSpread({
            }, customStyle, {
            }, style)
        }, "\u200C"));
    }
    return _core.jsx("span", null, Wrapper ? elements.map(function(element, i1) {
        return _core.jsx(Wrapper, {
            key: i1
        }, element, "\u200C");
    }) : elements);
}
Skeleton.defaultProps = {
    count: 1,
    duration: 1.2,
    width: null,
    wrapper: null,
    height: null,
    circle: false,
    delay: 0
};

},{"react":"6TuXu","@emotion/core":"jN46q"}],"jN46q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CacheProvider", ()=>_emotionElement57A3A7A3BrowserEsmJs.C
);
parcelHelpers.export(exports, "ThemeContext", ()=>_emotionElement57A3A7A3BrowserEsmJs.T
);
parcelHelpers.export(exports, "withEmotionCache", ()=>_emotionElement57A3A7A3BrowserEsmJs.w
);
parcelHelpers.export(exports, "css", ()=>_cssDefault.default
);
parcelHelpers.export(exports, "ClassNames", ()=>ClassNames
);
parcelHelpers.export(exports, "Global", ()=>Global
);
parcelHelpers.export(exports, "createElement", ()=>jsx
);
parcelHelpers.export(exports, "jsx", ()=>jsx
);
parcelHelpers.export(exports, "keyframes", ()=>keyframes
);
var _inheritsLoose = require("@babel/runtime/helpers/esm/inheritsLoose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _react = require("react");
var _cache = require("@emotion/cache");
var _emotionElement57A3A7A3BrowserEsmJs = require("./emotion-element-57a3a7a3.browser.esm.js");
var _utils = require("@emotion/utils");
var _serialize = require("@emotion/serialize");
var _sheet = require("@emotion/sheet");
var _css = require("@emotion/css");
var _cssDefault = parcelHelpers.interopDefault(_css);
var jsx = function jsx1(type, props) {
    var args = arguments;
    if (props == null || !_emotionElement57A3A7A3BrowserEsmJs.h.call(props, 'css')) // $FlowFixMe
    return _react.createElement.apply(undefined, args);
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = _emotionElement57A3A7A3BrowserEsmJs.E;
    createElementArgArray[1] = _emotionElement57A3A7A3BrowserEsmJs.c(type, props);
    for(var i = 2; i < argsLength; i++)createElementArgArray[i] = args[i];
     // $FlowFixMe
    return _react.createElement.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */ _emotionElement57A3A7A3BrowserEsmJs.w(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && // probably using the custom createElement which
    // means it will be turned into a className prop
    // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
    (props.className || props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    if (typeof styles === 'function') return(/*#__PURE__*/ _react.createElement(_emotionElement57A3A7A3BrowserEsmJs.T.Consumer, null, function(theme) {
        var serialized = _serialize.serializeStyles([
            styles(theme)
        ]);
        return(/*#__PURE__*/ _react.createElement(InnerGlobal1, {
            serialized: serialized,
            cache: cache
        }));
    }));
    var serialized = _serialize.serializeStyles([
        styles
    ]);
    return(/*#__PURE__*/ _react.createElement(InnerGlobal1, {
        serialized: serialized,
        cache: cache
    }));
});
// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal1 = /*#__PURE__*/ function(_React$Component) {
    _inheritsLooseDefault.default(InnerGlobal2, _React$Component);
    function InnerGlobal2(props, context, updater) {
        return _React$Component.call(this, props, context, updater) || this;
    }
    var _proto = InnerGlobal2.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.sheet = new _sheet.StyleSheet({
            key: this.props.cache.key + "-global",
            nonce: this.props.cache.sheet.nonce,
            container: this.props.cache.sheet.container
        }); // $FlowFixMe
        var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");
        if (node !== null) this.sheet.tags.push(node);
        if (this.props.cache.sheet.tags.length) this.sheet.before = this.props.cache.sheet.tags[0];
        this.insertStyles();
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.serialized.name !== this.props.serialized.name) this.insertStyles();
    };
    _proto.insertStyles = function insertStyles$1() {
        if (this.props.serialized.next !== undefined) // insert keyframes
        _utils.insertStyles(this.props.cache, this.props.serialized.next, true);
        if (this.sheet.tags.length) {
            // if this doesn't exist then it will be null so the style element will be appended
            var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
            this.sheet.before = element;
            this.sheet.flush();
        }
        this.props.cache.insert("", this.props.serialized, this.sheet, false);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.sheet.flush();
    };
    _proto.render = function render() {
        return null;
    };
    return InnerGlobal2;
}(_react.Component);
var keyframes = function keyframes1() {
    var insertable = _cssDefault.default.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
};
var classnames = function classnames1(args) {
    var len = args.length;
    var i = 0;
    var cls = '';
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case 'boolean':
                break;
            case 'object':
                if (Array.isArray(arg)) toAdd = classnames1(arg);
                else {
                    toAdd = '';
                    for(var k in arg)if (arg[k] && k) {
                        toAdd && (toAdd += ' ');
                        toAdd += k;
                    }
                }
                break;
            default:
                toAdd = arg;
        }
        if (toAdd) {
            cls && (cls += ' ');
            cls += toAdd;
        }
    }
    return cls;
};
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = _utils.getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) return className;
    return rawClassName + css(registeredStyles);
}
var ClassNames = _emotionElement57A3A7A3BrowserEsmJs.w(function(props, context) {
    return(/*#__PURE__*/ _react.createElement(_emotionElement57A3A7A3BrowserEsmJs.T.Consumer, null, function(theme) {
        var hasRendered = false;
        var css = function css1() {
            if (hasRendered && true) throw new Error('css can only be used during render');
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            var serialized = _serialize.serializeStyles(args, context.registered);
            _utils.insertStyles(context, serialized, false);
            return context.key + "-" + serialized.name;
        };
        var cx = function cx1() {
            if (hasRendered && true) throw new Error('cx can only be used during render');
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            return merge(context.registered, css, classnames(args));
        };
        var content = {
            css: css,
            cx: cx,
            theme: theme
        };
        var ele = props.children(content);
        hasRendered = true;
        return ele;
    }));
});

},{"@babel/runtime/helpers/esm/inheritsLoose":"4lrKB","react":"6TuXu","@emotion/cache":"R2Bev","./emotion-element-57a3a7a3.browser.esm.js":"5g0OZ","@emotion/utils":"6UGDV","@emotion/serialize":"8Hwky","@emotion/sheet":"hdGSh","@emotion/css":"gcfoH","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4lrKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOfJsDefault.default(subClass, superClass);
}
exports.default = _inheritsLoose;

},{"./setPrototypeOf.js":"1CLdm","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1CLdm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"R2Bev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sheet = require("@emotion/sheet");
var _stylis = require("@emotion/stylis");
var _stylisDefault = parcelHelpers.interopDefault(_stylis);
var _weakMemoize = require("@emotion/weak-memoize");
// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';
function toSheet(block) {
    if (block) Sheet.current.insert(block + '}');
}
var Sheet = {
    current: null
};
var ruleSheet = function ruleSheet1(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch(context){
        // property
        case 1:
            switch(content.charCodeAt(0)){
                case 64:
                    // @import
                    Sheet.current.insert(content + ';');
                    return '';
                // charcode for l
                case 108:
                    // charcode for b
                    // this ignores label
                    if (content.charCodeAt(2) === 98) return '';
            }
            break;
        // selector
        case 2:
            if (ns === 0) return content + delimiter;
            break;
        // at-rule
        case 3:
            switch(ns){
                // @font-face, @page
                case 102:
                case 112:
                    Sheet.current.insert(selectors[0] + content);
                    return '';
                default:
                    return content + (at === 0 ? delimiter : '');
            }
        case -2:
            content.split(needle).forEach(toSheet);
    }
};
var createCache = function createCache1(options) {
    if (options === undefined) options = {
    };
    var key = options.key || 'css';
    var stylisOptions;
    if (options.prefix !== undefined) stylisOptions = {
        prefix: options.prefix
    };
    var stylis = new _stylisDefault.default(stylisOptions);
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    var inserted = {
    }; // $FlowFixMe
    var container;
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function(node) {
        var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe
        attrib.split(' ').forEach(function(id) {
            inserted[id] = true;
        });
        if (node.parentNode !== container) container.appendChild(node);
    });
    var _insert;
    stylis.use(options.stylisPlugins)(ruleSheet);
    _insert = function insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        Sheet.current = sheet;
        if (serialized.map !== undefined) {
            var map = serialized.map;
            Sheet.current = {
                insert: function insert1(rule) {
                    sheet.insert(rule + map);
                }
            };
        }
        stylis(selector, serialized.styles);
        if (shouldCache) cache.inserted[name] = true;
    };
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function(context, content) {
        switch(context){
            case -1:
                while(commentStart.test(content)){
                    commentEnd.lastIndex = commentStart.lastIndex;
                    if (commentEnd.test(content)) {
                        commentStart.lastIndex = commentEnd.lastIndex;
                        continue;
                    }
                    throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
                }
                commentStart.lastIndex = 0;
                break;
        }
    });
    stylis.use(function(context, content, selectors) {
        switch(context){
            case -1:
                var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
                var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);
                if (unsafePseudoClasses && cache.compat !== true) unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                    var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                    var ignore = ignoreRegExp.test(content);
                    if (unsafePseudoClass && !ignore) console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                });
                break;
        }
    });
    var cache = {
        key: key,
        sheet: new _sheet.StyleSheet({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {
        },
        insert: _insert
    };
    return cache;
};
exports.default = createCache;

},{"@emotion/sheet":"hdGSh","@emotion/stylis":"6rquW","@emotion/weak-memoize":"hyJa4","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hdGSh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StyleSheet", ()=>StyleSheet1
);
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ // $FlowFixMe
function sheetForTag(tag) {
    if (tag.sheet) // $FlowFixMe
    return tag.sheet;
     // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) // $FlowFixMe
        return document.styleSheets[i];
    }
}
function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) tag.setAttribute('nonce', options.nonce);
    tag.appendChild(document.createTextNode(''));
    return tag;
}
var StyleSheet1 = /*#__PURE__*/ function() {
    function StyleSheet2(options) {
        this.isSpeedy = options.speedy === undefined ? false : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
            var _tag = createStyleElement(this);
            var before;
            if (this.tags.length === 0) before = this.before;
            else before = this.tags[this.tags.length - 1].nextSibling;
            this.container.insertBefore(_tag, before);
            this.tags.push(_tag);
        }
        var tag = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is a really hot path
                // we check the second character first because having "i"
                // as the second character will happen less often than
                // having "@" as the first character
                var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, // otherwise there will be an error
                // technically this means that the @import rules will
                // _usually_(not always since there could be multiple style tags)
                // be the first ones in prod and generally later in dev
                // this shouldn't really matter in the real world though
                // @import is generally only used for font faces from google fonts and etc.
                // so while this could be technically correct then it would be slower and larger
                // for a tiny bit of correctness that won't matter in the real world
                isImportRule ? 0 : sheet.cssRules.length);
            } catch (e) {
                console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
            }
        } else tag.appendChild(document.createTextNode(rule));
        this.ctr++;
    };
    _proto.flush = function flush() {
        // $FlowFixMe
        this.tags.forEach(function(tag) {
            return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
    };
    return StyleSheet2;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6rquW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stylis_min(W) {
    function M(d, c, e, h, a) {
        for(var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;){
            g = e.charCodeAt(l);
            l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
            if (0 === b + n + v + m) {
                if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
                    switch(g){
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            f += e.charAt(l);
                    }
                    g = 59;
                }
                switch(g){
                    case 123:
                        f = f.trim();
                        q = f.charCodeAt(0);
                        k = 1;
                        for(t = ++l; l < B;){
                            switch(g = e.charCodeAt(l)){
                                case 123:
                                    k++;
                                    break;
                                case 125:
                                    k--;
                                    break;
                                case 47:
                                    switch(g = e.charCodeAt(l + 1)){
                                        case 42:
                                        case 47:
                                            a: {
                                                for(u = l + 1; u < J; ++u)switch(e.charCodeAt(u)){
                                                    case 47:
                                                        if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                                            l = u + 1;
                                                            break a;
                                                        }
                                                        break;
                                                    case 10:
                                                        if (47 === g) {
                                                            l = u + 1;
                                                            break a;
                                                        }
                                                }
                                                l = u;
                                            }
                                    }
                                    break;
                                case 91:
                                    g++;
                                case 40:
                                    g++;
                                case 34:
                                case 39:
                                    for(; (l++) < J && e.charCodeAt(l) !== g;);
                            }
                            if (0 === k) break;
                            l++;
                        }
                        k = e.substring(t, l);
                        0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
                        switch(q){
                            case 64:
                                0 < r && (f = f.replace(N, ''));
                                g = f.charCodeAt(1);
                                switch(g){
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        r = c;
                                        break;
                                    default:
                                        r = O;
                                }
                                k = M(c, r, k, g, a + 1);
                                t = k.length;
                                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), (void 0) !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                                if (0 < t) switch(g){
                                    case 115:
                                        f = f.replace(da, ea);
                                    case 100:
                                    case 109:
                                    case 45:
                                        k = f + '{' + k + '}';
                                        break;
                                    case 107:
                                        f = f.replace(fa, '$1 $2');
                                        k = f + '{' + k + '}';
                                        k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                                        break;
                                    default:
                                        k = f + k, 112 === h && (k = (p += k, ''));
                                }
                                else k = '';
                                break;
                            default:
                                k = M(c, X(c, f, I), k, h, a + 1);
                        }
                        F += k;
                        k = I = r = u = q = 0;
                        f = '';
                        g = e.charCodeAt(++l);
                        break;
                    case 125:
                    case 59:
                        f = (0 < r ? f.replace(N, '') : f).trim();
                        if (1 < (t = f.length)) switch(0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && (void 0) !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q){
                            case 0:
                                break;
                            case 64:
                                if (105 === g || 99 === g) {
                                    G += f + e.charAt(l);
                                    break;
                                }
                            default:
                                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                        }
                        I = r = u = q = 0;
                        f = '';
                        g = e.charCodeAt(++l);
                }
            }
            switch(g){
                case 13:
                case 10:
                    47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
                    0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
                    z = 1;
                    D++;
                    break;
                case 59:
                case 125:
                    if (0 === b + n + v + m) {
                        z++;
                        break;
                    }
                default:
                    z++;
                    y = e.charAt(l);
                    switch(g){
                        case 9:
                        case 32:
                            if (0 === n + m + b) switch(x){
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    y = '';
                                    break;
                                default:
                                    32 !== g && (y = ' ');
                            }
                            break;
                        case 0:
                            y = '\\0';
                            break;
                        case 12:
                            y = '\\f';
                            break;
                        case 11:
                            y = '\\v';
                            break;
                        case 38:
                            0 === n + b + m && (r = I = 1, y = '\f' + y);
                            break;
                        case 108:
                            if (0 === n + b + m + E && 0 < u) switch(l - u){
                                case 2:
                                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                                case 8:
                                    111 === K && (E = K);
                            }
                            break;
                        case 58:
                            0 === n + b + m && (u = l);
                            break;
                        case 44:
                            0 === b + v + n + m && (r = 1, y += '\r');
                            break;
                        case 34:
                        case 39:
                            0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                            break;
                        case 91:
                            0 === n + b + v && m++;
                            break;
                        case 93:
                            0 === n + b + v && m--;
                            break;
                        case 41:
                            0 === n + b + m && v--;
                            break;
                        case 40:
                            if (0 === n + b + m) {
                                if (0 === q) switch(2 * x + 3 * K){
                                    case 533:
                                        break;
                                    default:
                                        q = 1;
                                }
                                v++;
                            }
                            break;
                        case 64:
                            0 === b + v + n + m + u + k && (k = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < n + m + v)) switch(b){
                                case 0:
                                    switch(2 * g + 3 * e.charCodeAt(l + 1)){
                                        case 235:
                                            b = 47;
                                            break;
                                        case 220:
                                            t = l, b = 42;
                                    }
                                    break;
                                case 42:
                                    47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                            }
                    }
                    0 === b && (f += y);
            }
            K = x;
            x = g;
            l++;
        }
        t = p.length;
        if (0 < t) {
            r = c;
            if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), (void 0) !== C && 0 === (p = C).length)) return G + p + F;
            p = r.join(',') + '{' + p + '}';
            if (0 !== w * E) {
                2 !== w || L(p, 2) || (E = 0);
                switch(E){
                    case 111:
                        p = p.replace(ha, ':-moz-$1') + p;
                        break;
                    case 112:
                        p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
                }
                E = 0;
            }
        }
        return G + p + F;
    }
    function X(d, c, e) {
        var h = c.trim().split(ia);
        c = h;
        var a = h.length, m = d.length;
        switch(m){
            case 0:
            case 1:
                var b = 0;
                for(d = 0 === m ? '' : d[0] + ' '; b < a; ++b)c[b] = Z(d, c[b], e).trim();
                break;
            default:
                var v = b = 0;
                for(c = []; b < a; ++b)for(var n = 0; n < m; ++n)c[v++] = Z(d[n] + ' ', h[b], e).trim();
        }
        return c;
    }
    function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));
        switch(h){
            case 38:
                return c.replace(F, '$1' + d.trim());
            case 58:
                return d.trim() + c.replace(F, '$1' + d.trim());
            default:
                if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
        }
        return d + c;
    }
    function P(d, c, e, h) {
        var a = d + ';', m = 2 * c + 3 * e + 4 * h;
        if (944 === m) {
            d = a.indexOf(':', 9) + 1;
            var b = a.substring(d, a.length - 1).trim();
            b = a.substring(0, d).trim() + b + ';';
            return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
        }
        if (0 === w || 2 === w && !L(a, 1)) return a;
        switch(m){
            case 1015:
                return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
            case 951:
                return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
            case 963:
                return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
            case 1009:
                if (100 !== a.charCodeAt(4)) break;
            case 969:
            case 942:
                return '-webkit-' + a + a;
            case 978:
                return '-webkit-' + a + '-moz-' + a + a;
            case 1019:
            case 983:
                return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
            case 883:
                if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
                if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
                break;
            case 932:
                if (45 === a.charCodeAt(4)) switch(a.charCodeAt(5)){
                    case 103:
                        return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
                    case 115:
                        return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
                    case 98:
                        return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
                }
                return '-webkit-' + a + '-ms-' + a + a;
            case 964:
                return '-webkit-' + a + '-ms-flex-' + a + a;
            case 1023:
                if (99 !== a.charCodeAt(8)) break;
                b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
                return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
            case 1005:
                return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
            case 1000:
                b = a.substring(13).trim();
                c = b.indexOf('-') + 1;
                switch(b.charCodeAt(0) + b.charCodeAt(c)){
                    case 226:
                        b = a.replace(G, 'tb');
                        break;
                    case 232:
                        b = a.replace(G, 'tb-rl');
                        break;
                    case 220:
                        b = a.replace(G, 'lr');
                        break;
                    default:
                        return a;
                }
                return '-webkit-' + a + '-ms-' + b + a;
            case 1017:
                if (-1 === a.indexOf('sticky', 9)) break;
            case 975:
                c = (a = d).length - 10;
                b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
                switch(m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)){
                    case 203:
                        if (111 > b.charCodeAt(8)) break;
                    case 115:
                        a = a.replace(b, '-webkit-' + b) + ';' + a;
                        break;
                    case 207:
                    case 102:
                        a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
                }
                return a + ';';
            case 938:
                if (45 === a.charCodeAt(5)) switch(a.charCodeAt(6)){
                    case 105:
                        return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
                    case 115:
                        return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
                    default:
                        return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
                }
                break;
            case 973:
            case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
            case 931:
            case 953:
                if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
                break;
            case 962:
                if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
        }
        return a;
    }
    function L(d, c) {
        var e = d.indexOf(1 === c ? ':' : '{'), h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, '$1'), e, c);
    }
    function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
    }
    function H(d, c, e, h, a, m, b, v, n, q) {
        for(var g = 0, x = c, w; g < A; ++g)switch(w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)){
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                x = w;
        }
        if (x !== c) return x;
    }
    function T(d) {
        switch(d){
            case void 0:
            case null:
                A = S.length = 0;
                break;
            default:
                if ('function' === typeof d) S[A++] = d;
                else if ('object' === typeof d) for(var c = 0, e = d.length; c < e; ++c)T(d[c]);
                else Y = !!d | 0;
        }
        return T;
    }
    function U(d) {
        d = d.prefix;
        (void 0) !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
        return U;
    }
    function B(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [
            V
        ];
        if (0 < A) {
            var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
            (void 0) !== h && 'string' === typeof h && (c = h);
        }
        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), (void 0) !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
    }
    var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0, V = '';
    B.use = T;
    B.set = U;
    (void 0) !== W && U(W);
    return B;
}
exports.default = stylis_min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hyJa4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var weakMemoize = function weakMemoize1(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) // $FlowFixMe
        return cache.get(arg);
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
exports.default = weakMemoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5g0OZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "C", ()=>CacheProvider
);
parcelHelpers.export(exports, "E", ()=>Emotion
);
parcelHelpers.export(exports, "T", ()=>ThemeContext
);
parcelHelpers.export(exports, "c", ()=>createEmotionProps
);
parcelHelpers.export(exports, "h", ()=>hasOwnProperty
);
parcelHelpers.export(exports, "w", ()=>withEmotionCache
);
var _inheritsLoose = require("@babel/runtime/helpers/inheritsLoose");
var _react = require("react");
var _cache = require("@emotion/cache");
var _cacheDefault = parcelHelpers.interopDefault(_cache);
var _utils = require("@emotion/utils");
var _serialize = require("@emotion/serialize");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var EmotionCacheContext = /*#__PURE__*/ _react.createContext(// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? _cacheDefault.default() : null);
var ThemeContext = /*#__PURE__*/ _react.createContext({
});
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache1(func) {
    var render = function render1(props, ref) {
        return(/*#__PURE__*/ _react.createElement(EmotionCacheContext.Consumer, null, function(cache) {
            return func(props, cache, ref);
        }));
    }; // $FlowFixMe
    return(/*#__PURE__*/ _react.forwardRef(render));
};
// thus we only need to replace what is a valid character for JS, but not for CSS
var sanitizeIdentifier = function sanitizeIdentifier1(identifier) {
    return identifier.replace(/\$/g, '-');
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps1(type, props) {
    if (typeof props.css === 'string' && props.css.indexOf(':') !== -1) throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
    var newProps = {
    };
    for(var key in props)if (hasOwnProperty.call(props, key)) newProps[key] = props[key];
    newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions
    var error = new Error();
    if (error.stack) {
        // chrome
        var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);
        if (!match) // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
        if (match) newProps[labelPropName] = sanitizeIdentifier(match[1]);
    }
    return newProps;
};
var render = function render1(cache, props, theme, ref) {
    var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) cssProp = cache.registered[cssProp];
    var type = props[typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = '';
    if (typeof props.className === 'string') className = _utils.getRegisteredStyles(cache.registered, registeredStyles, props.className);
    else if (props.className != null) className = props.className + " ";
    var serialized = _serialize.serializeStyles(registeredStyles);
    if (serialized.name.indexOf('-') === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) serialized = _serialize.serializeStyles([
            serialized,
            'label:' + labelFromStack + ';'
        ]);
    }
    var rules = _utils.insertStyles(cache, serialized, typeof type === 'string');
    className += cache.key + "-" + serialized.name;
    var newProps = {
    };
    for(var key in props)if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && key !== labelPropName) newProps[key] = props[key];
    newProps.ref = ref;
    newProps.className = className;
    var ele = /*#__PURE__*/ _react.createElement(type, newProps);
    return ele;
}; // eslint-disable-next-line no-undef
var Emotion = /* #__PURE__ */ withEmotionCache(function(props, cache, ref) {
    if (typeof props.css === 'function') return(/*#__PURE__*/ _react.createElement(ThemeContext.Consumer, null, function(theme) {
        return render(cache, props, theme, ref);
    }));
    return render(cache, props, null, ref);
});
Emotion.displayName = 'EmotionCssPropInternal';

},{"@babel/runtime/helpers/inheritsLoose":"rzE8S","react":"6TuXu","@emotion/cache":"R2Bev","@emotion/utils":"6UGDV","@emotion/serialize":"8Hwky","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"rzE8S":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
}
module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./setPrototypeOf.js":"2t5QS"}],"2t5QS":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"6UGDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRegisteredStyles", ()=>getRegisteredStyles
);
parcelHelpers.export(exports, "insertStyles", ()=>insertStyles
);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function(className) {
        if (registered[className] !== undefined) registeredStyles.push(registered[className]);
        else rawClassName += className + " ";
    });
    return rawClassName;
}
var insertStyles = function insertStyles1(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) cache.registered[className] = serialized.styles;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined)
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8Hwky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeStyles", ()=>serializeStyles
);
var _hash = require("@emotion/hash");
var _hashDefault = parcelHelpers.interopDefault(_hash);
var _unitless = require("@emotion/unitless");
var _unitlessDefault = parcelHelpers.interopDefault(_unitless);
var _memoize = require("@emotion/memoize");
var _memoizeDefault = parcelHelpers.interopDefault(_memoize);
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty1(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue1(value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = _memoizeDefault.default(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue1(key, value) {
    switch(key){
        case 'animation':
        case 'animationName':
            if (typeof value === 'string') return value.replace(animationRegex, function(match, p1, p2) {
                cursor = {
                    name: p1,
                    styles: p2,
                    next: cursor
                };
                return p1;
            });
    }
    if (_unitlessDefault.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) return value + 'px';
    return value;
};
var contentValuePattern = /(attr|calc|counters?|url)\(/;
var contentValues = [
    'normal',
    'none',
    'counter',
    'open-quote',
    'close-quote',
    'no-open-quote',
    'no-close-quote',
    'initial',
    'inherit',
    'unset'
];
var oldProcessStyleValue = processStyleValue;
var msPattern = /^-ms-/;
var hyphenPattern = /-(.)/g;
var hyphenatedCache = {
};
processStyleValue = function processStyleValue2(key, value) {
    if (key === 'content') {
        if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function(str, _char) {
            return _char.toUpperCase();
        }) + "?");
    }
    return processed;
};
var shouldWarnAboutInterpolatingClassNameFromCss = true;
function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) return '';
    if (interpolation.__emotion_styles !== undefined) {
        if (interpolation.toString() === 'NO_COMPONENT_SELECTOR') throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        return interpolation;
    }
    switch(typeof interpolation){
        case 'boolean':
            return '';
        case 'object':
            if (interpolation.anim === 1) {
                cursor = {
                    name: interpolation.name,
                    styles: interpolation.styles,
                    next: cursor
                };
                return interpolation.name;
            }
            if (interpolation.styles !== undefined) {
                var next = interpolation.next;
                if (next !== undefined) // not the most efficient thing ever but this is a pretty rare case
                // and there will be very few iterations of this generally
                while(next !== undefined){
                    cursor = {
                        name: next.name,
                        styles: next.styles,
                        next: cursor
                    };
                    next = next.next;
                }
                var styles = interpolation.styles + ";";
                if (interpolation.map !== undefined) styles += interpolation.map;
                return styles;
            }
            return createStringFromObject(mergedProps, registered, interpolation);
        case 'function':
            if (mergedProps !== undefined) {
                var previousCursor = cursor;
                var result = interpolation(mergedProps);
                cursor = previousCursor;
                return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
            } else console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
            break;
        case 'string':
            var matched = [];
            var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
                var fakeVarName = "animation" + matched.length;
                matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
                return "${" + fakeVarName + "}";
            });
            if (matched.length) console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                "`" + replaced + "`"
            ]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) return interpolation;
    var cached = registered[interpolation];
    if (couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
        console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion");
        shouldWarnAboutInterpolatingClassNameFromCss = false;
    }
    return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) for(var i = 0; i < obj.length; i++)string += handleInterpolation(mergedProps, registered, obj[i], false);
    else for(var _key in obj){
        var value = obj[_key];
        if (typeof value !== 'object') {
            if (registered != null && registered[value] !== undefined) string += _key + "{" + registered[value] + "}";
            else if (isProcessableValue(value)) string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        } else {
            if (_key === 'NO_COMPONENT_SELECTOR' && true) throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
            if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                for(var _i = 0; _i < value.length; _i++)if (isProcessableValue(value[_i])) string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            } else {
                var interpolated = handleInterpolation(mergedProps, registered, value, false);
                switch(_key){
                    case 'animation':
                    case 'animationName':
                        string += processStyleName(_key) + ":" + interpolated + ";";
                        break;
                    default:
                        if (_key === 'undefined') console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                        string += _key + "{" + interpolated + "}";
                }
            }
        }
    }
    return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;
sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;
var serializeStyles = function serializeStyles1(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) return args[0];
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings, false);
    } else {
        if (strings[0] === undefined) console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        styles += strings[0];
    } // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);
        if (stringMode) {
            if (strings[i] === undefined) console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            styles += strings[i];
        }
    }
    var sourceMap;
    styles = styles.replace(sourceMapPattern, function(match) {
        sourceMap = match;
        return '';
    });
    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match = labelPattern.exec(styles)) !== null)identifierName += '-' + match[1];
    var name = _hashDefault.default(styles) + identifierName;
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
        name: name,
        styles: styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
    };
};

},{"@emotion/hash":"5mt1j","@emotion/unitless":"kXMxY","@emotion/memoize":"kGuNb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5mt1j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k = /* Math.imul(k, m): */ (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 255;
            h = /* Math.imul(h, m): */ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
exports.default = murmur2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kXMxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
exports.default = unitlessKeys;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kGuNb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function memoize(fn) {
    var cache = {
    };
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
exports.default = memoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gcfoH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _serialize = require("@emotion/serialize");
function css() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return _serialize.serializeStyles(args);
}
exports.default = css;

},{"@emotion/serialize":"8Hwky","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"clyMF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@emotion/core");
var _skeleton = require("./skeleton");
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache1() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SkeletonTheme1 = /*#__PURE__*/ function(_Component) {
    _inherits(SkeletonTheme2, _Component);
    function SkeletonTheme2() {
        _classCallCheck(this, SkeletonTheme2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SkeletonTheme2).apply(this, arguments));
    }
    _createClass(SkeletonTheme2, [
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, color = _this$props.color, highlightColor = _this$props.highlightColor, children = _this$props.children;
                var themeStyles = /*#__PURE__*/ _core.css(".react-loading-skeleton{background-color:", color, ";background-image:linear-gradient( 90deg,", color, ",", highlightColor, ",", color, " );};label:SkeletonTheme;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi10aGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZMkIiLCJmaWxlIjoiLi4vc3JjL3NrZWxldG9uLXRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHRCYXNlQ29sb3IsIGRlZmF1bHRIaWdobGlnaHRDb2xvciB9IGZyb20gXCIuL3NrZWxldG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNrZWxldG9uVGhlbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiBkZWZhdWx0QmFzZUNvbG9yLFxuICAgIGhpZ2hsaWdodENvbG9yOiBkZWZhdWx0SGlnaGxpZ2h0Q29sb3JcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciwgaGlnaGxpZ2h0Q29sb3IsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRoZW1lU3R5bGVzID0gY3NzYFxuICAgICAgLnJlYWN0LWxvYWRpbmctc2tlbGV0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgICR7Y29sb3J9LFxuICAgICAgICAgICR7aGlnaGxpZ2h0Q29sb3J9LFxuICAgICAgICAgICR7Y29sb3J9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgYDtcbiAgICByZXR1cm4gPGRpdiBjc3M9e3RoZW1lU3R5bGVzfT57Y2hpbGRyZW59PC9kaXY+O1xuICB9XG59XG4iXX0= */");
                return _core.jsx("div", {
                    css: themeStyles
                }, children);
            }
        }
    ]);
    return SkeletonTheme2;
}(_react.Component);
exports.default = SkeletonTheme1;
_defineProperty(SkeletonTheme1, "defaultProps", {
    color: _skeleton.defaultBaseColor,
    highlightColor: _skeleton.defaultHighlightColor
});

},{"react":"6TuXu","@emotion/core":"jN46q","./skeleton":"h1MN2"}]},["2rAXy","fNlah"], null, "parcelRequireec75")

//# sourceMappingURL=Clients.f41824d7.js.map
