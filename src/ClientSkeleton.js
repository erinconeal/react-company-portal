import { Component } from "react";
import Skeleton from "react-loading-skeleton";

class ClientSkeleton extends Component {
  render() {
    return (
      <div className="border-card">
        <h2>
          <Skeleton />
        </h2>
        <Skeleton />
        <div className="grid sm:grid-cols-2 gap-4 mt-7 clients">
          <Skeleton count={4} />
          <div>
            <p>Contact:</p>
            <Skeleton count={3} />
          </div>
        </div>
      </div>
    );
  }
}

export default ClientSkeleton;
