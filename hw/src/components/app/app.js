import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../context";
import {
  PersonPage,
  PlanetPage,
  StarshipPage,
  PersonDetails,
  PalnetDetails,
  StarshipsDetails,
} from "../sw-component";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    error: false,
    personId: null,
    planetId: null,
    starshipsId: null,
  };

  onPersonId = (id) => {
    this.setState({
      personId: id,
    });
  };

  onPlanetId = (id) => {
    this.setState({
      planetId: id,
    });
  };

  onStarshipsId = (id) => {
    this.setState({
      starshipsId: id,
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { personId, planetId, starshipsId } = this.state;

    const personPage = <PersonPage onSelectedItem={this.onPersonId} />;
    const personDetails = <PersonDetails itemId={personId} />;

    const planetPage = <PlanetPage onSelectedItem={this.onPlanetId} />;
    const palnetDetails = <PalnetDetails itemId={planetId} />;

    const starshipPage = <StarshipPage onSelectedItem={this.onStarshipsId} />;
    const starshipsDetails = <StarshipsDetails itemId={starshipsId} />;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header getComponent={this.getComponent} />
          {planet}
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
          <Row left={personPage} right={personDetails} />
          <Row left={planetPage} right={palnetDetails} />
          <Row left={starshipPage} right={starshipsDetails} />
        </div>
      </SwapiServiceProvider>
    );
  }
}
