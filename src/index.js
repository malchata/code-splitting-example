import regeneratorRuntime from "regenerator-runtime";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { h, render, Component } from "preact";
import Search from "./components/Search/Search";

render(<Router>
  <Search path="/" default/>
  <AsyncRoute path="/pedal/:id" getComponent={() => import("./components/PedalDetail/PedalDetail").then(module => module.default)}/>
  <AsyncRoute path="/favorites" getComponent={() => import("./components/Favorites/Favorites").then(module => module.default)}/>
</Router>, document.getElementsByTagName("main")[0]);
