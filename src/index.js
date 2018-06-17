import Router from "preact-router";
import { h, render } from "preact";
import FilterablePedalList from "./components/FilterablePedalList/FilterablePedalList";
import PedalDetail from "./components/PedalDetail/PedalDetail";

const appElement = document.getElementsByTagName("main")[0];

const Main = () => (
  <Router>
    <FilterablePedalList path="/" default/>
    <PedalDetail path="/pedal/:id"/>
  </Router>
);

render(<Main/>, appElement, appElement.lastChild);

if (module.hot) {
  module.hot.accept();
}
