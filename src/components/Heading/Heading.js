import { h, render } from "preact";
import { Heading } from "./Heading.css";

export default (props) => (
  <Heading>
    {props.children}
  </Heading>
);
