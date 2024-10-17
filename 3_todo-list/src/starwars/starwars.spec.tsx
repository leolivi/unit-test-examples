import { render, screen, waitFor } from "@testing-library/react";
import Starwars from "./starwars";
import mockAxios from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";

const characters = [
  { name: "Luke Skywalker" },
  { name: "Darth Vader" },
  { name: "Leia Organa" },
];

const mock = new mockAxios(axios);

describe("Starwars component", () => {
  beforeEach(() => {
    mock.reset();
    const urlPattern = new RegExp("https://swapi.dev/api/people/*");
    mock.onGet(urlPattern).reply(200, characters);
  });

  test("renders StarWars characters after fetching", async () => {
    render(<Starwars />);

    expect(screen.getByText("StarWars Charaktere")).toBeInTheDocument();

    await screen.findByText("Luke Skywalker");
    await screen.findByText("Darth Vader");
    await screen.findByText("Leia Organa");
  });

  test("makes a fetch call to the correct URL", async () => {
    render(<Starwars />);

    await waitFor(() => {
      expect(mock.history.get.length).toBe(3);
      expect(mock.history.get[0].url).toBe("https://swapi.dev/api/people/1");
      expect(mock.history.get[1].url).toBe("https://swapi.dev/api/people/2");
      expect(mock.history.get[2].url).toBe("https://swapi.dev/api/people/3");
    });
  });
});
