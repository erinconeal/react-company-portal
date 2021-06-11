import { Component } from "react";
import { withRouter } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

class Clients extends Component {
  state = { clients: [] };

  async componentDidMount() {
    this.setState(Object.assign({ loading: false, clients: Array(10).fill() }));
    // from https://jsonplaceholder.typicode.com/
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    this.setState(Object.assign({ clients: json }));
  }

  render() {
    return (
      <div>
        <h1>Clients</h1>
        {this.state.clients.map((client, index) => {
          return (
            <div
              key={index}
              className="py-10 bg-white shadow-lg rounded-3xl sm:p-20 my-5"
            >
              <h2>{client?.company?.name || <Skeleton />}</h2>
              {client ? (
                <a href={client.website}>{client.website}</a>
              ) : (
                <Skeleton />
              )}
              <div className="grid sm:grid-cols-2 gap-4 mt-7 clients">
                {client ? (
                  <div>
                    <p>{client.address.suite}</p>
                    <p>{client.address.street}</p>
                    <p>{client.address.city}</p>
                    <p>{client.address.zipcode}</p>
                  </div>
                ) : (
                  <Skeleton count={4} />
                )}
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
