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
})({"ClientForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ClientForm extends _react.Component {
  constructor(...args) {
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
        phone: ""
      }
    });

    _defineProperty(this, "handleInputChange", (event, optionalObjTitle = "") => {
      const target = event.target;
      const inputValue = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      let stateCopy = Object.assign({}, this.state);
      optionalObjTitle ? stateCopy.formInputs[optionalObjTitle][name] = inputValue : stateCopy.formInputs[name] = inputValue;
      this.setState(stateCopy);
    });

    _defineProperty(this, "handleCancelButtonClick", () => {
      switch (this.props.submitAction) {
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
    if (this.props.client) {
      this.setState(Object.assign({
        formInputs: this.props.client
      }));
    }
  }

  handleSubmitClient() {
    switch (this.props.submitAction) {
      case "addClient":
        return this.props.onAddClient(this.state.formInputs);

      case "updateClient":
        return this.props.onUpdateClient(this.state.formInputs, this.props.client.id);

      default:
        throw new Error();
    }
  }

  render() {
    const {
      website,
      name,
      email,
      phone,
      address: {
        suite,
        street,
        city,
        zipcode
      }
    } = this.state.formInputs;
    return (
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "border-card",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("h2", {
          children: this.props.title
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("form", {
          id: "clientForm",
          onSubmit: e => {
            e.preventDefault();
            this.handleSubmitClient();
          },
          children: [
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            className: "form-input",
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("label", {
              htmlFor: "companyName",
              children: "Company Name (required)"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("input", {
              type: "text",
              id: "companyName",
              name: "name",
              value: this.state.formInputs.company.name,
              required: true,
              "aria-required": "true",
              onChange: e => this.handleInputChange(e, "company")
            })]
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            className: "form-input",
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("label", {
              htmlFor: "website",
              children: "Website"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("input", {
              type: "text",
              id: "website",
              name: "website",
              value: website,
              onChange: this.handleInputChange
            })]
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("h3", {
              children: "Client Address"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("div", {
              className: "grid sm:grid-cols-2 gap-4",
              children: [
              /*#__PURE__*/
              (0, _jsxRuntime.jsxs)("div", {
                className: "form-input",
                children: [
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("label", {
                  htmlFor: "suite",
                  children: "Suite/Apt"
                }),
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  id: "suite",
                  name: "suite",
                  value: suite,
                  onChange: e => this.handleInputChange(e, "address")
                })]
              }),
              /*#__PURE__*/
              (0, _jsxRuntime.jsxs)("div", {
                className: "form-input",
                children: [
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("label", {
                  htmlFor: "street",
                  children: "Street (required)"
                }),
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  id: "street",
                  name: "street",
                  required: true,
                  "aria-required": "true",
                  value: street,
                  onChange: e => this.handleInputChange(e, "address")
                })]
              }),
              /*#__PURE__*/
              (0, _jsxRuntime.jsxs)("div", {
                className: "form-input",
                children: [
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("label", {
                  htmlFor: "city",
                  children: "City (required)"
                }),
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  id: "city",
                  name: "city",
                  required: true,
                  "aria-required": "true",
                  value: city,
                  onChange: e => this.handleInputChange(e, "address")
                })]
              }),
              /*#__PURE__*/
              (0, _jsxRuntime.jsxs)("div", {
                className: "form-input",
                children: [
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("label", {
                  htmlFor: "zipcode",
                  children: "Zip code (required)"
                }),
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  id: "zipcode",
                  name: "zipcode",
                  required: true,
                  "aria-required": "true",
                  value: zipcode,
                  onChange: e => this.handleInputChange(e, "address")
                })]
              })]
            })]
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("h3", {
              children: "Client Contact"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("div", {
              className: "form-input",
              children: [
              /*#__PURE__*/
              (0, _jsxRuntime.jsx)("label", {
                htmlFor: "fullName",
                children: "Full name (required)"
              }),
              /*#__PURE__*/
              (0, _jsxRuntime.jsx)("input", {
                type: "text",
                id: "fullName",
                name: "name",
                required: true,
                "aria-required": "true",
                value: name,
                onChange: this.handleInputChange
              })]
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("div", {
              className: "grid sm:grid-cols-2 gap-4",
              children: [
              /*#__PURE__*/
              (0, _jsxRuntime.jsxs)("div", {
                className: "form-input",
                children: [
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("label", {
                  htmlFor: "email",
                  children: "Email"
                }),
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: email,
                  onChange: this.handleInputChange
                })]
              }),
              /*#__PURE__*/
              (0, _jsxRuntime.jsxs)("div", {
                className: "form-input",
                children: [
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("label", {
                  htmlFor: "phone",
                  children: "Phone number"
                }),
                /*#__PURE__*/
                (0, _jsxRuntime.jsx)("input", {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: phone,
                  onChange: this.handleInputChange
                })]
              })]
            })]
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            className: "flex space-x-5 mt-5",
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("button", {
              className: "btn btn-primary",
              children: this.props.submitButtonText
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("button", {
              className: "btn btn-secondary",
              type: "button",
              onClick: this.handleCancelButtonClick,
              children: "Cancel"
            })]
          })]
        })]
      })
    );
  }

}

var _default = ClientForm;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"ClientCard.js":[function(require,module,exports) {
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
    const {
      client
    } = this.props;
    return (
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "border-card",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("h2", {
          children: client.company.name
        }), client.website ?
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("a", {
          href: client.website,
          children: client.website
        }) : null,
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("div", {
          className: "grid sm:grid-cols-2 gap-4 mt-7 clients",
          children: [
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: client?.address?.suite
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: client?.address?.street
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: client?.address?.city
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: client?.address?.zipcode
            })]
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: "Contact:"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: client.name
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children:
              /*#__PURE__*/
              (0, _jsxRuntime.jsx)("a", {
                href: client.email,
                children: client.email
              })
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("a", {
              href: client.phone,
              children: client.phone
            })]
          })]
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("div", {
          className: "flex space-x-5 mt-5",
          children: [
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("button", {
            className: "btn btn-secondary",
            onClick: () => this.handleUpdateClient(),
            children: "Update"
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("button", {
            className: "btn btn-danger",
            onClick: () => this.handleDeleteClient(client.id),
            children: "Delete"
          })]
        })]
      })
    );
  }

}

var _default = ClientCard;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"ClientSkeleton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ClientSkeleton extends _react.Component {
  render() {
    return (
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "border-card",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("h2", {
          children:
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {})
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {}),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("div", {
          className: "grid sm:grid-cols-2 gap-4 mt-7 clients",
          children: [
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {
            count: 4
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("p", {
              children: "Contact:"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)(_reactLoadingSkeleton.default, {
              count: 3
            })]
          })]
        })]
      })
    );
  }

}

var _default = ClientSkeleton;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react-loading-skeleton":"../node_modules/react-loading-skeleton/lib/index.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"Clients.js":[function(require,module,exports) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const localCache = {
  clients: []
};

class Clients extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      clients: [],
      showAddForm: false,
      status: "unloaded",
      updating: {}
    });

    _defineProperty(this, "handleAddButtonClick", () => {
      this.setState(Object.assign({
        showAddForm: !this.state.showAddForm
      }));
    });

    _defineProperty(this, "addClient", async form => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify({ ...form
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
        const json = await res.json();
        this.setState({
          clients: [...this.state.clients, json],
          showAddForm: false
        });
        localCache.clients = this.state.clients;
      } catch (error) {
        console.log(error);
      }
    });

    _defineProperty(this, "cancelAddClient", () => {
      this.setState({
        showAddForm: false
      });
    });

    _defineProperty(this, "deleteClient", async clientId => {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${clientId}`, {
          method: "DELETE"
        });
        const remainingClients = this.state.clients.filter(client => client.id !== clientId);
        this.setState({
          clients: remainingClients
        });
        localCache.clients = this.state.clients;
      } catch (error) {
        console.log(error);
      }
    });

    _defineProperty(this, "toggleUpdateClient", index => {
      this.setState(prevState => {
        const updating = { ...prevState.updating
        };
        updating[index] = !updating[index];
        return {
          updating
        };
      });
    });

    _defineProperty(this, "updateClient", async (form, clientId, index) => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${clientId}`, {
          method: "PUT",
          body: JSON.stringify({
            id: clientId,
            ...form
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
        const json = await res.json();
        const updatedClientIndex = this.state.clients.findIndex(client => client.id === clientId);
        this.state.clients.splice(updatedClientIndex, 1);
        this.setState({
          clients: [...this.state.clients, json],
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
        clients: Array(10).fill(),
        status: "loading"
      })); // from https://jsonplaceholder.typicode.com/

      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      this.setState(Object.assign({
        clients: json,
        status: "loaded"
      }));
      localCache.clients = json;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("div", {
          className: "flex-col sm:flex sm:flex-row sm:items-baseline sm:justify-between",
          children: [
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("h1", {
            children: "Clients"
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "ml-4 sm:ml-0 btn btn-primary",
            onClick: this.handleAddButtonClick,
            children: this.state.showAddForm ? "Close" : "Add"
          })]
        }), this.state.showAddForm ?
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_ClientForm.default, {
          onAddClient: this.addClient,
          title: "Add new client",
          submitButtonText: "Add client",
          submitAction: "addClient",
          onCancelAddClient: this.cancelAddClient
        }) : null, this.state.clients.map((client, index) => {
          const isUpdating = this.state.updating[index];
          return {
            loading:
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)(_ClientSkeleton.default, {}, index),
            loaded: isUpdating ?
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)(_ClientForm.default, {
              client: client,
              onUpdateClient: (formInputs, clientID) => this.updateClient(formInputs, clientID, index),
              title: "Update",
              submitButtonText: "Update",
              submitAction: "updateClient",
              onCancelUpdateClient: () => this.toggleUpdateClient(index)
            }, index) :
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)(_ClientCard.default, {
              client: client,
              onDeleteClient: this.deleteClient,
              onUpdateClient: () => this.toggleUpdateClient(index)
            }, index)
          }[this.state.status];
        })]
      })
    );
  }

}

var _default = (0, _reactRouterDom.withRouter)(Clients);

exports.default = _default;
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","./ClientForm":"ClientForm.js","./ClientCard":"ClientCard.js","./ClientSkeleton":"ClientSkeleton.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/Clients.f4c2973b.js.map