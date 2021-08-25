import { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import update from "immutability-helper";
import ClientForm from "./ClientForm";
import ClientCard from "./ClientCard";
import ClientSkeleton from "./ClientSkeleton";
import { ClientsAPIResponse } from "./APIResponsesTypes";

const localCache: {
  clients: ClientsAPIResponse[];
} = { clients: [] };

type State = {
  clients: ClientsAPIResponse[];
  showAddForm: boolean;
  status: string;
  updating: {
    [key: number]: boolean;
  };
};

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
          id: this.state.clients.length + 1,
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
          body: JSON.stringify(form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = (await res.json()) as ClientsAPIResponse;
      const updatedClientIndex = this.state.clients.findIndex(
        (client) => client.id === clientId
      );
      this.setState(
        update(this.state.clients, { $splice: [[updatedClientIndex, 1, json]] })
      );
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
            onAddClient={(form) => this.addClient(form)}
            title="Add new client"
            submitButtonText="Add client"
            submitAction="addClient"
            onCancelAddClient={this.cancelAddClient}
          />
        ) : null}
        <ul className="clients">
          {this.state.clients.map(
            (client: ClientsAPIResponse, index: number) => {
              const isUpdating = this.state.updating[index] as State;
              return {
                loading: (
                  <li key={index} data-testid={`loading${index}`}>
                    <ClientSkeleton />
                  </li>
                ),
                loaded: isUpdating ? (
                  <li key={index} data-testid={`updating${index}`}>
                    <ClientForm
                      client={client}
                      title="Update"
                      submitButtonText="Update"
                      submitAction="updateClient"
                      onUpdateClient={(
                        formInputs: ClientsAPIResponse,
                        clientId: number
                      ) => this.updateClient(formInputs, clientId, index)}
                      onCancelUpdateClient={() =>
                        this.toggleUpdateClient(index)
                      }
                    />
                  </li>
                ) : (
                  <li key={index} data-testid={`loaded${index}`}>
                    <ClientCard
                      client={client}
                      onDeleteClient={(id) => this.deleteClient(id)}
                      onUpdateClient={() => this.toggleUpdateClient(index)}
                    />
                  </li>
                ),
              }[this.state.status];
            }
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(Clients);
