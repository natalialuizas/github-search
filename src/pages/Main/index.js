import React, { Component } from "react";
import "./style.css";

import MainTitle from "../../components/MainTitle";
import SearchBar from "./SearchBar";
import api from "../../services/api";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      error: "",
    };
  }

  setUser = (e) => {
    this.setState({ user: e.target.value });
  };

  searchUser = async () => {
    const { user } = this.state;

    if (user) {
      try {
        const { data } = await api.get(`/users/${user}`);
        this.props.history.push({
          pathname: "/result",
          state: {
            res: data,
          },
        });
      } catch (err) {
        this.setState({ error: "Usuário não encontrado", user: "" });
      }
    } else {
        this.setState({ error: "Usuário não informado", user: "" });
    }
  
  };

  render() {
    let { error } = this.state;
    return (
      <div className="main__container">
        <MainTitle title="Github Search" />
        <SearchBar onChange={this.setUser} onClick={this.searchUser} />
        <p className="message__error">{error}</p>
      </div>
    );
  }
}

export default Main;
