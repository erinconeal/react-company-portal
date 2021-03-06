import { ChangeEvent, Component, ReactNode } from "react";
import { ClientsAPIResponse } from "./APIResponsesTypes";

type FormProps = {
  title: string;
  submitButtonText: string;
};

type ConditionalProps =
  | {
      submitAction: "updateClient";
      onCancelUpdateClient: () => void;
      onUpdateClient: (
        formInputs: ClientsAPIResponse,
        clientId: number
      ) => void;
      client: ClientsAPIResponse;
    }
  | {
      submitAction: "addClient";
      onCancelAddClient: () => void;
      onAddClient: (formInputs: ClientsAPIResponse) => void;
      client?: undefined;
    };

type Props = FormProps & ConditionalProps;

class ClientForm extends Component<Props> {
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
      id: 0,
    },
  };

  componentDidMount(): void {
    if (this.props.client) {
      this.setState(Object.assign({ formInputs: this.props.client }));
    }
  }

  handleInputChange = (
    event: ChangeEvent,
    optionalObjTitle?: "company" | "address"
  ): void => {
    const target = event.target as HTMLInputElement;
    const inputValue =
      target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const stateCopy = Object.assign({}, this.state);
    optionalObjTitle
      ? (stateCopy.formInputs[optionalObjTitle][name] = inputValue)
      : (stateCopy.formInputs[name] = inputValue);

    this.setState(stateCopy);
  };

  handleCancelButtonClick = (): void => {
    switch (this.props.submitAction) {
      case "addClient":
        return this.props.onCancelAddClient();
      case "updateClient":
        return this.props.onCancelUpdateClient();
      default:
        throw new Error();
    }
  };

  handleSubmitClient(): void {
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

  render(): ReactNode {
    const {
      website,
      name,
      email,
      phone,
      address: { suite, street, city, zipcode },
      id,
    } = this.state.formInputs;

    return (
      <div className="border-card">
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
              onChange={(e) => this.handleInputChange(e)}
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
                onChange={(e) => this.handleInputChange(e)}
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
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
              <div className="form-input">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <button
              className="btn btn-primary"
              data-testid={`${this.props.submitAction}Btn${id}`}
            >
              {this.props.submitButtonText}
            </button>
            <button
              className="btn btn-secondary"
              data-testid={`${this.props.submitAction}CancelBtn${id}`}
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
