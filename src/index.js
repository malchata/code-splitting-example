import regeneratorRuntime from "regenerator-runtime";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { h, render, Component } from "preact";
import Search from "./components/Search/Search";

const mainElement = document.getElementsByTagName("main")[0];

const Main = () => (
  <Router>
    <Search path="/" default/>
    <AsyncRoute path="/pedal/:id" getComponent={() => import(/* webpackChunkName: "PedalDetail" */ "./components/PedalDetail/PedalDetail").then(module => module.default)}/>
    <AsyncRoute path="/favorites" getComponent={() => import(/* webpackChunkName: "Favorites" */ "./components/Favorites/Favorites").then(module => module.default)}/>
  </Router>
);

render(<Main/>, mainElement, mainElement.lastChild);
