import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withService } from "../../hocs";
import ErrorBoundry from "../error-boundry";

const personDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ErrorBoundry>
      <ItemDetails
        itemId={itemId}
        getDataDitails={getPerson}
        getImage={getPersonImage}
        title="Peson"
      >
        <Record label="Name" field="name" />
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemDetails>
    </ErrorBoundry>
  );
};

const palnetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ErrorBoundry>
      <ItemDetails
        itemId={itemId}
        getDataDitails={getPlanet}
        getImage={getPlanetImage}
        title="Planet"
      >
        <Record label="Name" field="name" />
        <Record label="Population" field="population" />
        <Record label="Rotation Period" field="rotationPeriod" />
        <Record label="Diameter" field="diameter" />
      </ItemDetails>
    </ErrorBoundry>
  );
};

const starshipsDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ErrorBoundry>
      <ItemDetails
        itemId={itemId}
        getDataDitails={getStarship}
        getImage={getStarshipImage}
        title="Starships"
      >
        <Record label="Name" field="name" />
        <Record label="Model" field="model" />
        <Record label="Manufacturer" field="manufacturer" />
        <Record label="Cost In Credits" field="costInCredits" />
        <Record label="Length" field="length" />
        <Record label="Crew" field="crew" />
        <Record label="Passengers" field="passengers" />
        <Record label="Cargo Capacity" field="cargoCapacity" />
      </ItemDetails>
    </ErrorBoundry>
  );
};

const PersonDetails = withService(personDetails);
const PalnetDetails = withService(palnetDetails);
const StarshipsDetails = withService(starshipsDetails);

export { PersonDetails, PalnetDetails, StarshipsDetails };
