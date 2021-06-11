import { Component } from "react";
import { withRouter } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

class Clients extends Component {
  state = {
    clients: [],
    showAddForm: false,
    formInputs: {
      address: {},
      company: {},
    },
  };

  async componentDidMount() {
    this.setState(Object.assign({ clients: Array(10).fill() }));
    // from https://jsonplaceholder.typicode.com/
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    this.setState(Object.assign({ clients: json }));
  }

  handleAddButtonClick = () => {
    this.setState(Object.assign({ showAddForm: !this.state.showAddForm }));
  };

  handleInputChange = (event) => {
    const target = event.target;
    const inputValue =
      target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let stateCopy = Object.assign({}, this.state);
    stateCopy.formInputs[name] = inputValue;

    this.setState(stateCopy);
  };

  handleCompanyInputChange = (event) => {
    const target = event.target;
    const inputValue =
      target.type === "checkbox" ? target.checked : target.value;
    let stateCopy = Object.assign({}, this.state);
    stateCopy.formInputs.company.name = inputValue;

    this.setState(stateCopy);
  };

  handleAddressInputChange = (event) => {
    const target = event.target;
    const inputValue =
      target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let stateCopy = Object.assign({}, this.state);
    stateCopy.formInputs.address[name] = inputValue;

    this.setState(stateCopy);
  };

  async addClient() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        ...this.state.formInputs,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json();
    console.log("json after post", json);
    this.setState({ clients: [...this.state.clients, json] });
  }

  render() {
    return (
      <div>
        <div className="flex-col sm:flex sm:flex-row sm:items-baseline sm:justify-between">
          <h1>Clients</h1>
          <button
            type="button"
            className="ml-4 sm:ml-0"
            onClick={this.handleAddButtonClick}
          >
            Add
          </button>
        </div>
        {this.state.showAddForm ? (
          <div className="client-card">
            <h2>Add new client</h2>
            <form
              id="newClientForm"
              name="newClientForm"
              onSubmit={(e) => {
                e.preventDefault();
                this.addClient();
              }}
            >
              <div className="form-input">
                <label htmlFor="companyName">Company Name (required)</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={this.handleCompanyInputChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <h3>Client Address</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-input">
                    <label htmlFor="suite">Suite/Apt</label>
                    <input
                      type="text"
                      id="suite"
                      name="suite"
                      onChange={this.handleAddressInputChange}
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="street">Street (required)</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      onChange={this.handleAddressInputChange}
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="city">City (required)</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      onChange={this.handleAddressInputChange}
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="zipcode">Zip code (required)</label>
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      onChange={this.handleAddressInputChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3>Client Contact</h3>
                <div className="form-input">
                  <label htmlFor="fullName">Full name (required)</label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <button>Add client</button>
            </form>
          </div>
        ) : null}
        {this.state.clients.map((client, index) => {
          return (
            <div key={index} className="client-card">
              <h2>{client?.company?.name || <Skeleton />}</h2>
              {client ? (
                <a href={client.website}>http://www.{client.website}</a>
              ) : (
                <Skeleton />
              )}
              <div className="grid sm:grid-cols-2 gap-4 mt-7 clients">
                {/* {client ? (
                  <div>
                    <p>{client.address.suite}</p>
                    <p>{client.address.street}</p>
                    <p>{client.address.city}</p>
                    <p>{client.address.zipcode}</p>
                  </div>
                ) : (
                  <Skeleton count={4} />
                )} */}
                <div>
                  <p>Contact:</p>
                  {client ? (
                    <div>
                      <p>{client.name}</p>
                      <p>
                        <a href={client.email}>{client.email}</a>
                      </p>
                      <a href={client.phone}>{client.phone}</a>
                    </div>
                  ) : (
                    <Skeleton count={3} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Clients);
