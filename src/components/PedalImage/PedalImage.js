import { h, render } from "preact";

export default (props) => (
  <picture>
    <source srcset={props.id === null ? "" : `/images/${props.id}-2x.webp 2x, /images/pedals/${props.id}-1x.webp 1x`} type="image/webp"/>
    <source srcset={props.id === null ? "" : `/images/${props.id}-2x.jpg 2x, /images/pedals/${props.id}-1x.jpg 1x`} type="image/jpeg"/>
    <img src={props.id === null ? "" : `/images/${props.id}-1x.jpg`} alt={`${props.manufacturer} ${props.model}`} />
  </picture>
);
