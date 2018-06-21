import { h, render } from "preact";
import PedalImage from "../PedalImage/PedalImage";
import { PedalListItem, PedalLink } from "./Pedal.css";

export default (props) => (
  <PedalListItem>
    <PedalLink href={`/pedal/${props.id}`}>
      <PedalImage id={props.id} manufacturer={props.manufacturer} model={props.model}/>
      <h3>{props.manufacturer} {props.model}</h3>
      <h4>{props.type}</h4>
    </PedalLink>
  </PedalListItem>
);
