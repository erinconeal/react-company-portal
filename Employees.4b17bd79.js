// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"EmployeeListItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmployeeListItem = ({
  item
}) => {
  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsx)("li", {
      children:
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "flex my-5",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("div", {
          className: "hidden sm:block sm:mr-4",
          children: item ?
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("img", {
            src: item.picture.medium,
            alt: `${item.name.first} ${item.name.last}`,
            className: "rounded-3xl employee-img"
          }) :
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {
            height: 100,
            width: 100
          })
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("div", {
          className: "flex-shrink self-center w-full",
          children: [item ?
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            className: "text-lg",
            children: [item.name.title, " ", item.name.first, " ", item.name.last]
          }) :
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {}), item ?
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("div", {
            className: "text-gray-600",
            children: item.email
          }) :
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {}), item ?
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("a", {
            href: `tel:${item.phone}`,
            className: "text-gray-600",
            children: item.phone
          }) :
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {})]
        })]
      })
    })
  );
};

var _default = EmployeeListItem;
exports.default = _default;
},{"react-loading-skeleton":"../node_modules/react-loading-skeleton/lib/index.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"CardList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

const CardList = ({
  headingTitle,
  unorderedListClass = "",
  array,
  Component
}) => {
  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsxs)("div", {
      className: "py-10 bg-white shadow-lg rounded-3xl sm:p-20 my-5",
      children: [
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)("h2", {
        children: headingTitle
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)("ul", {
        className: unorderedListClass,
        children: array.map((item, index) => {
          return (
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)(Component, {
              item: item
            }, index)
          );
        })
      })]
    })
  );
};

var _default = CardList;
exports.default = _default;
},{"react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"Employees.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _EmployeeListItem = _interopRequireDefault(require("./EmployeeListItem"));

var _CardList = _interopRequireDefault(require("./CardList"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localCache = {
  employees: []
};

const Employees = () => {
  const [, setEmployees] = (0, _react.useState)([]);
  const [accounting, setAccounting] = (0, _react.useState)([]);
  const [informationTech, setInformationTech] = (0, _react.useState)([]);
  const [marketing, setMarketing] = (0, _react.useState)([]);
  const [leadershipTeam, setLeadershipTeam] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (!localCache.employees.length) {
      setAccounting(Array(5).fill());
      setInformationTech(Array(5).fill());
      setMarketing(Array(5).fill());
      setLeadershipTeam(Array(2).fill());
      requestEmployees();
    } else {
      setAccounting(localCache.employees[0]);
      setInformationTech(localCache.employees[1]);
      setMarketing(localCache.employees[2]);
      setLeadershipTeam(localCache.employees[3]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestEmployees() {
    try {
      // from https://randomuser.me/documentation
      const res = await fetch("https://randomuser.me/api/?results=17");
      const json = await res.json();
      const chunked = chunk(json.results, 5);
      setEmployees(chunked);
      localCache.employees = chunked;
      setAccounting(chunked[0]);
      setInformationTech(chunked[1]);
      setMarketing(chunked[2]);
      setLeadershipTeam(chunked[3]);
    } catch (error) {
      console.log("error", error);
    }
  }

  function chunk(arr, len) {
    const chunks = [];
    let i = 0;

    while (i < arr.length) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  }

  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsxs)("div", {
      children: [
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)("h1", {
        children: "Employees"
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_CardList.default, {
        headingTitle: "Leadership Team",
        unorderedListClass: "employees",
        array: leadershipTeam,
        Component: _EmployeeListItem.default
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_CardList.default, {
        headingTitle: "Accounting",
        unorderedListClass: "employees",
        array: accounting,
        Component: _EmployeeListItem.default
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_CardList.default, {
        headingTitle: "IT",
        unorderedListClass: "employees",
        array: informationTech,
        Component: _EmployeeListItem.default
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_CardList.default, {
        headingTitle: "Marketing",
        unorderedListClass: "employees",
        array: marketing,
        Component: _EmployeeListItem.default
      })]
    })
  );
};

var _default = Employees;
exports.default = _default;
},{"react":"../node_modules/react/index.js","./EmployeeListItem":"EmployeeListItem.js","./CardList":"CardList.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53316" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Employees.4b17bd79.js.map