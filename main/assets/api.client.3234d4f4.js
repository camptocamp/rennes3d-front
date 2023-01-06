import { l as linesIcon } from "./lines.f3fb9c7c.js";
import { p as photo1, a as photo2, b as photo3 } from "./photo3.1c8fee27.js";
const linesFixtures = () => [
  {
    id: 1,
    name: "Ligne T1",
    start: "Stade Rennais",
    end: "Br\xE9c\xE9",
    frequency: 7
  },
  {
    id: 2,
    name: "Ligne T2",
    start: "Stade Rennais",
    end: "Br\xE9c\xE9",
    frequency: 5
  },
  {
    id: 3,
    name: "Ligne T3",
    start: "Stade Rennais",
    end: "Br\xE9c\xE9",
    frequency: 7
  },
  {
    id: 4,
    name: "Ligne T4",
    start: "Stade Rennais",
    end: "Br\xE9c\xE9",
    frequency: 7
  }
];
const bikeIcon = "/rennes3d-front/main/assets/bike.71284de4.svg";
const stationIcon = "/rennes3d-front/main/assets/station.1e5eef8e.svg";
const networkFiguresFixtures = () => [
  {
    id: "lines",
    figure: 7,
    description: "Nouvelles lignes",
    icon: linesIcon
  },
  {
    id: "stations",
    figure: 129,
    description: "Nouvelles stations",
    icon: stationIcon
  },
  {
    id: "bike",
    figure: 128,
    description: "Am\xE9nagement cyclables",
    unit: "km",
    icon: bikeIcon
  }
];
const lineFiguresFixtures = () => [
  {
    id: "station",
    figure: 23,
    description: "Stations"
  },
  {
    id: "parking",
    figure: 2,
    description: "Parking relais"
  },
  {
    id: "frequency",
    figure: 8,
    description: "Fr\xE9quence",
    unit: "min",
    moreInformation: "Fr\xE9quence th\xE9orique en Heure de Pointe du matin"
  }
];
const photoFixtures = () => [
  {
    url: photo1
  },
  {
    url: photo2
  },
  {
    url: photo3
  }
];
const travelTimeFixtures = () => [
  {
    line: 1,
    new: 15,
    old: 40,
    start: "JF Kennedy",
    end: "Br\xE9c\xE9"
  },
  {
    line: 1,
    new: 8,
    old: 32,
    start: "JF Kennedy",
    end: "Br\xE9c\xE9"
  },
  {
    line: 2,
    new: 5,
    old: 15,
    start: "JF Kennedy",
    end: "Br\xE9c\xE9"
  }
];
class ApiClientService {
  async fetchNetworkFigure() {
    return new Promise((resolve) => {
      resolve(networkFiguresFixtures());
    });
  }
  async fetchLineFigure() {
    return new Promise((resolve) => {
      resolve(lineFiguresFixtures());
    });
  }
  async fetchTravelTime() {
    return new Promise((resolve) => {
      resolve(travelTimeFixtures());
    });
  }
  async fetchLineDescription() {
    return new Promise((resolve) => {
      resolve(linesFixtures());
    });
  }
  async fetchPhotos() {
    return new Promise((resolve) => {
      resolve(photoFixtures());
    });
  }
}
const apiClientService = new ApiClientService();
export {
  apiClientService as a
};
