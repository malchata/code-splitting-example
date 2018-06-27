import regeneratorRuntime from "regenerator-runtime";
import Router from "preact-router";
import { h, render, Component } from "preact";
import Search from "./components/Search/Search";
import PedalDetail from "./components/PedalDetail/PedalDetail";
import Favorites from "./components/Favorites/Favorites";

const mainElement = document.getElementsByTagName("main")[0];

const Main = () => (
  <Router>
    <Search path="/" default/>
    <PedalDetail path="/pedal/:id"/>
    <Favorites path="/favorites"/>
  </Router>
);

render(<Main/>, mainElement, mainElement.lastChild);
