import { h, render } from "preact";
import { PedalList } from "./PedalList.css";

export default (props) => (
  <PedalList>
    {props.children}
  </PedalList>
);
