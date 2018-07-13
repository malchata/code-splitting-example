import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { h, render, Component } from "preact";
import Search from "./components/Search/Search";

render(<Router>
  <Search path="/" default/>
  <AsyncRoute path="/pedal/:id" getComponent={() => import(/* webpackPrefetch: true, webpackChunkName: "PedalDetail" */ "./components/PedalDetail/PedalDetail").then(module => module.default)}/>
  <AsyncRoute path="/favorites" getComponent={() => import(/* webpackPrefetch: true, webpackChunkName: "Favorites" */ "./components/Favorites/Favorites").then(module => module.default)}/>
</Router>, document.getElementById("app"));
