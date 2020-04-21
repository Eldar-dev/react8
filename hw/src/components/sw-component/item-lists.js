import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData, withChildFunction } from "../../hocs";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();
const renderName = (item) => `${item.name}`;

const PersonPage = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const PlanetPage = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const StarshipPage = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);

export { PersonPage, PlanetPage, StarshipPage };
