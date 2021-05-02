import { Component } from "react";
import { withRouter } from "react-router-dom";

class Clients extends Component {
  state = { loading: true };

  // async componentDidMount() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
  //   );
  //   const json = await res.json();
  //   this.setState(Object.assign({ loading: false }, json.pets[0]));
  // }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    return <h1>Clients</h1>;
  }
}

export default withRouter(Clients);
