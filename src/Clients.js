import { Component } from "react";
import { withRouter } from "react-router-dom";
import ClientForm from "./ClientForm";
import ClientCard from "./ClientCard";
import ClientSkeleton from "./ClientSkeleton";

const localCache = {
  clients: [],
};

class Clients extends Component {
  state = {
    clients: [],
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
        Object.assign({ clients: Array(10).fill(), status: "loading" })
      );
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      this.setState(Object.assign({ clients: json, status: "loaded" }));
      localCache.clients = json;
    } catch (error) {
      console.log(error);
    }
  }

  handleAddButtonClick = () => {
    this.setState(Object.assign({ showAddForm: !this.state.showAddForm }));
  };

  addClient = async (form) => {
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
      const json = await res.json();
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

  deleteClient = async (clientId) => {
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

  toggleUpdateClient = (index) => {
    this.setState((prevState) => {
      const updating = { ...prevState.updating };
      updating[index] = !updating[index];
      return { updating };
    });
  };

  updateClient = async (form, clientId, index) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${clientId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: clientId,
            ...form,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = await res.json();
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
            onAddClient={this.addClient}
            title="Add new client"
            submitButtonText="Add client"
            submitAction="addClient"
            onCancelAddClient={this.cancelAddClient}
          />
        ) : null}
        {this.state.clients.map((client, index) => {
          const isUpdating = this.state.updating[index];
          return {
            loading: <ClientSkeleton key={index} />,
            loaded: isUpdating ? (
              <ClientForm
                client={client}
                key={index}
                onUpdateClient={(formInputs, clientID) =>
                  this.updateClient(formInputs, clientID, index)
                }
                title="Update"
                submitButtonText="Update"
                submitAction="updateClient"
                onCancelUpdateClient={() => this.toggleUpdateClient(index)}
              />
            ) : (
              <ClientCard
                client={client}
                key={index}
                onDeleteClient={this.deleteClient}
                onUpdateClient={() => this.toggleUpdateClient(index)}
              />
            ),
          }[this.state.status];
        })}
      </div>
    );
  }
}

export default withRouter(Clients);
