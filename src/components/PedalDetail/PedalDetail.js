import regeneratorRuntime from "regenerator-runtime";
import Heading from "../Heading/Heading";
import BackLink from "../BackLink/BackLink";
import PedalImage from "../PedalImage/PedalImage";
import { PedalImageContainer, ToggleFavorite, PedalInfo } from "./PedalDetail.css";
import { h, render, Component } from "preact";
import isFavorite from "../../utils/isFavorite";

export default class PedalDetail extends Component {
  constructor(props) {
    super(props);

    this.setState({
      id: null,
      manufacturer: "",
      model: "",
      type: "",
      youtube: "",
      copy: "",
      isFavorite: false
    });

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  async componentDidMount() {
    let response = await fetch(`/api/pedal/${this.props.id}`);
    let pedal = await response.json();

    this.setState({
      id: pedal.id,
      manufacturer: pedal.manufacturer,
      model: pedal.model,
      type: pedal.type,
      youtube: `https://www.youtube.com/embed/${pedal.youtube}`,
      copy: pedal.copy,
      isFavorite: isFavorite(pedal.id)
    });
  }

  async handleToggleFavorite() {
    let module = await import(/* webpackPrefetch: true, webpackChunkName: "toggleFavorite" */ "../../utils/toggleFavorite");
    let toggleFavorite = module.default;
    toggleFavorite(this.state.id, this.state.manufacturer, this.state.model, this.state.type);

    this.setState({
      isFavorite: isFavorite(this.state.id)
    });
  }

  render() {
    return (
      <section>
        <Heading>
          <BackLink href="/">←</BackLink>
          <h1>{this.state.manufacturer} {this.state.model}</h1>
        </Heading>
        <PedalInfo>
          <PedalImageContainer>
            <ToggleFavorite onClick={this.handleToggleFavorite}>{this.state.isFavorite === true ? "-" : "+"}</ToggleFavorite>
            <PedalImage id={this.state.id} manufacturer={this.state.manufacturer} model={this.state.model}/>
          </PedalImageContainer>
          <h2>Type</h2>
          <p>{this.state.type}</p>
          <h2>Description</h2>
          <p>{this.state.copy}</p>
          <h2>Demo Video</h2>
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={this.state.youtube}
            frameborder="0">
          </iframe>
        </PedalInfo>
      </section>
    );
  }
}
