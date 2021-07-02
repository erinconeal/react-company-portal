import { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ClientForm from "./ClientForm";
import ClientCard from "./ClientCard";
import ClientSkeleton from "./ClientSkeleton";
import { ClientsAPIResponse } from "./APIResponsesTypes";

let localCache: {
  clients: ClientsAPIResponse[];
};

// type ObjectWithNumberKeys = { [key: number]: boolean };

type State = {
  clients: ClientsAPIResponse[];
  showAddForm: boolean;
  status: string;
  updating: {
    [key: number]: boolean;
  };
};

// type StateKeys = keyof State;

class Clients extends Component<RouteComponentProps> {
  state = {
    clients: [] as ClientsAPIResponse[],
    showAddForm: false,
    status: "unloaded",
    updating: {},
  };

  async componentDidMount() {
    if (localCache.clients.length) {
      this.setState(
        Object.assign({ clients: localCache.clients, status: "loaded" })
      );
      return;
    }

    try {
      this.setState(
        Object.assign({ clients: Array(10).fill(undefined), status: "loading" })
      );
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = (await res.json()) as ClientsAPIResponse;
      this.setState(Object.assign({ clients: json, status: "loaded" }));
      localCache.clients = this.state.clients;
    } catch (error) {
      console.log(error);
    }
  }

  handleAddButtonClick = () => {
    this.setState(Object.assign({ showAddForm: !this.state.showAddForm }));
  };

  addClient = async (form: ClientsAPIResponse) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          ...form,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = (await res.json()) as ClientsAPIResponse;
      this.setState({
        clients: [...this.state.clients, json],
        showAddForm: false,
      });
      localCache.clients = this.state.clients;
    } catch (error) {
      console.log(error);
    }
  };

  cancelAddClient = () => {
    this.setState({ showAddForm: false });
  };

  deleteClient = async (clientId: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${clientId}`, {
        method: "DELETE",
      });
      const remainingClients = this.state.clients.filter(
        (client) => client.id !== clientId
      );
      this.setState({ clients: remainingClients });
      localCache.clients = this.state.clients;
    } catch (error) {
      console.log(error);
    }
  };

  toggleUpdateClient = (index: number) => {
    this.setState((prevState: State) => {
      const updating = { ...prevState.updating };
      updating[index] = !updating[index];
      return { updating };
    });
  };

  updateClient = async (
    form: ClientsAPIResponse,
    clientId: number,
    index: number
  ) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${clientId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            // id: clientId,
            ...form,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = (await res.json()) as ClientsAPIResponse;
      const updatedClientIndex = this.state.clients.findIndex(
        (client) => client.id === clientId
      );
      this.state.clients.splice(updatedClientIndex, 1);
      this.setState({
        clients: [...this.state.clients, json],
        showAddForm: false,
      });
      localCache.clients = this.state.clients;
      this.toggleUpdateClient(index);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div className="flex-col sm:flex sm:flex-row sm:items-baseline sm:justify-between">
          <h1>Clients</h1>
          <button
            type="button"
            className="ml-4 sm:ml-0 btn btn-primary"
            onClick={this.handleAddButtonClick}
          >
            {this.state.showAddForm ? "Close" : "Add"}
          </button>
        </div>
        {this.state.showAddForm ? (
          <ClientForm
            onAddClient={() => this.addClient}
            title="Add new client"
            submitButtonText="Add client"
            submitAction="addClient"
            onCancelAddClient={this.cancelAddClient}
          />
        ) : null}
        {this.state.clients.forEach(
          (client: ClientsAPIResponse, index: number) => {
            const isUpdating = this.state.updating[index] as State;
            return {
              loading: <ClientSkeleton key={index} />,
              loaded: isUpdating ? (
                <ClientForm
                  client={client}
                  key={index}
                  onUpdateClient={(
                    formInputs: ClientsAPIResponse,
                    clientId: number
                  ) => this.updateClient(formInputs, clientId, index)}
                  title="Update"
                  submitButtonText="Update"
                  submitAction="updateClient"
                  onCancelUpdateClient={() => this.toggleUpdateClient(index)}
                />
              ) : (
                <ClientCard
                  client={client}
                  key={index}
                  onDeleteClient={() => this.deleteClient}
                  onUpdateClient={() => this.toggleUpdateClient(index)}
                />
              ),
            }[this.state.status];
          }
        )}
      </div>
    );
  }
}

export default withRouter(Clients);
