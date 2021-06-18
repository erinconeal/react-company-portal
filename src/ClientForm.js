import { Component } from "react";

class ClientForm extends Component {
  state = {
    formInputs: {
      address: {
        suite: "",
        city: "",
        street: "",
        zipcode: "",
      },
      company: { name: "" },
      website: "",
      name: "",
      email: "",
      phone: "",
    },
  };

  componentDidMount() {
    if (this.props.client) {
      this.setState(Object.assign({ formInputs: this.props.client }));
    }
  }

  handleInputChange = (event, optionalObjTitle = "") => {
    const target = event.target;
    const inputValue =
      target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let stateCopy = Object.assign({}, this.state);
    optionalObjTitle
      ? (stateCopy.formInputs[optionalObjTitle][name] = inputValue)
      : (stateCopy.formInputs[name] = inputValue);

    this.setState(stateCopy);
  };

  handleCancelButtonClick = () => {
    switch (this.props.submitAction) {
      case "addClient":
        return this.props.onCancelAddClient();
      case "updateClient":
        return this.props.onCancelUpdateClient();
      default:
        throw new Error();
    }
  };

  handleSubmitClient() {
    switch (this.props.submitAction) {
      case "addClient":
        return this.props.onAddClient(this.state.formInputs);
      case "updateClient":
        return this.props.onUpdateClient(
          this.state.formInputs,
          this.props.client.id
        );
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
      address: { suite, street, city, zipcode },
    } = this.state.formInputs;

    return (
      <div className="client-card">
        <h2>{this.props.title}</h2>
        <form
          id="clientForm"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmitClient();
          }}
        >
          <div className="form-input">
            <label htmlFor="companyName">Company Name (required)</label>
            <input
              type="text"
              id="companyName"
              name="name"
              value={this.state.formInputs.company.name}
              required
              aria-required="true"
              onChange={(e) => this.handleInputChange(e, "company")}
            />
          </div>
          <div className="form-input">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={website}
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
                  value={suite}
                  onChange={(e) => this.handleInputChange(e, "address")}
                />
              </div>
              <div className="form-input">
                <label htmlFor="street">Street (required)</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  required
                  aria-required="true"
                  value={street}
                  onChange={(e) => this.handleInputChange(e, "address")}
                />
              </div>
              <div className="form-input">
                <label htmlFor="city">City (required)</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  aria-required="true"
                  value={city}
                  onChange={(e) => this.handleInputChange(e, "address")}
                />
              </div>
              <div className="form-input">
                <label htmlFor="zipcode">Zip code (required)</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  required
                  aria-required="true"
                  value={zipcode}
                  onChange={(e) => this.handleInputChange(e, "address")}
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
                required
                aria-required="true"
                value={name}
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
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <button className="btn btn-primary">
              {this.props.submitButtonText}
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.handleCancelButtonClick}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ClientForm;
