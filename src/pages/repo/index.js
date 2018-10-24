import React, { Component } from "react";
import api from "../../services/api";

export default class Repo extends Component {
  state = {
    repoInfo: ""
  };

  componentDidMount() {
    this.loadRepo();
  }

  loadRepo = async () => {
    const { id } = this.props.match.params;

    const res = await api.get(`/repositories/${id}`);

    this.setState({ repoInfo: res.data });
  };

  render() {
    const { repoInfo } = this.state;

    return (
      <div className="list-repo">
        <h2>
          {repoInfo.id} - {repoInfo.name} ( {repoInfo.full_name} )
        </h2>
        <span>{repoInfo.homepage}</span>
        <p>{repoInfo.description}</p>
      </div>
    );
  }
}
