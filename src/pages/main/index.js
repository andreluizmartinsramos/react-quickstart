import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
  state = {
    repo: [],
    repoInfo: []
  };

  componentDidMount() {
    this.loadRepo();
  }

  loadRepo = async () => {
    const res = await api.get("/search/repositories?q=jshunt");

    const { items, ...repoInfo } = res.data;

    this.setState({ repo: items, repoInfo });
  };

  prevPage = () => {};

  nextPage = () => {};

  render() {
    const { repo } = this.state;

    return (
      <div className="list-repo">
        {repo.map(repo => (
          <article key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>

            <a className="button" href={`/repo/${repo.id}`}>
              View
            </a>
          </article>
        ))}

        <div className="paginator">
          <button className="button" onClick={this.prevPage}>
            Prev
          </button>
          <button className="button" onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
