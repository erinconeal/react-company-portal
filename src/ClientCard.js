import { Component } from "react";

class ClientCard extends Component {
  handleDeleteClient() {}

  render() {
    const { client } = this.props;
    return (
      <div className="client-card">
        <h2>{client.company.name}</h2>
        {client.website ? (
          <a href={client.website}>http://www.{client.website}</a>
        ) : null}
        <div className="grid sm:grid-cols-2 gap-4 mt-7 clients">
          <div>
            <p>{client?.address?.suite}</p>
            <p>{client?.address?.street}</p>
            <p>{client?.address?.city}</p>
            <p>{client?.address?.zipcode}</p>
          </div>
          <div>
            <p>Contact:</p>
            <p>{client.name}</p>
            <p>
              <a href={client.email}>{client.email}</a>
            </p>
            <a href={client.phone}>{client.phone}</a>
          </div>
        </div>
        <div className="flex space-x-5 mt-5">
          <button className="btn btn-secondary">Update</button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDeleteClient(client.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ClientCard;
