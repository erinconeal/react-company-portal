import { Component } from "react";
import { withRouter } from "react-router-dom";
import ClientForm from "./ClientForm";
import ClientCard from "./ClientCard";
import ClientSkeleton from "./ClientSkeleton";

class Clients extends Component {
  state = {
    clients: [],
    showAddForm: false,
    status: "unloaded",
  };

  async componentDidMount() {
    try {
      this.setState(
        Object.assign({ clients: Array(10).fill(), status: "loading" })
      );
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      this.setState(Object.assign({ clients: json, status: "loaded" }));
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
      console.log("json after post", json);
      this.setState({
        clients: [...this.state.clients, json],
        showAddForm: false,
      });
    } catch (error) {
      console.log(error);
    }
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
            Add
          </button>
        </div>
        {this.state.showAddForm ? (
          <ClientForm
            onAddClient={this.addClient}
            title="Add new client"
            submitButtonText="Add client"
            submitAction="addClient"
          />
        ) : null}
        {this.state.clients.map((client, index) => {
          return {
            loading: <ClientSkeleton key={index} />,
            loaded: <ClientCard client={client} key={index} />,
            updating: <ClientForm />,
          }[this.state.status];
        })}
      </div>
    );
  }
}

export default withRouter(Clients);
