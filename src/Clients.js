import { Component } from "react";
import { withRouter } from "react-router-dom";

class Clients extends Component {
  state = { loading: true, clients: [] };

  async componentDidMount() {
    // from https://jsonplaceholder.typicode.com/
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    // console.log("json", json);
    this.setState(Object.assign({ loading: false, clients: json }));
  }

  render() {
    console.log("state", this.state);
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    return (
      <div>
        <h1>Clients</h1>
        {this.state.clients.map((client, index) => {
          return (
            <div key={index}>
              <p>Company: {client.company.name}</p>
              <p>{client.website}</p>
              <div>
                Address:
                <p>{client.address.suite}</p>
                <p>{client.address.street}</p>
                <p>{client.address.city}</p>
                <p>{client.address.zipcode}</p>
              </div>
              <div>
                Contact:
                <p>
                  {client.name} {client.email}
                </p>
                <p>{client.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Clients);
