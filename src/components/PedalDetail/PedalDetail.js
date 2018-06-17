import { PedalHeading, BackLink, PedalName, PedalImageContainer, PedalImage, ToggleFavorite, PedalInfo, PedalCopy, PedalInfoHeading, PedalVideo } from "./PedalDetail.css";
import { h, render, Component } from "preact";

export default class PedalDetail extends Component {
  constructor(props) {
    super(props);

    fetch(`/api/pedal/${this.props.id}`).then(response => {
      return response.json();
    }).then(pedal => {
      this.setState({
        id: pedal.id,
        manufacturer: pedal.manufacturer,
        model: pedal.model,
        type: pedal.type,
        youtube: pedal.youtube,
        copy: pedal.copy
      });
    });
  }

  render() {
    return (
      <section>
        <PedalHeading>
          <BackLink href="/">←</BackLink>
          <PedalName>{this.state.manufacturer} {this.state.model}</PedalName>
        </PedalHeading>
        <PedalInfo>
          <PedalImageContainer>
            <ToggleFavorite>+</ToggleFavorite>
            <picture>
              <source srcset={`/images/${this.state.id}-2x.webp 2x, /images/pedals/${this.state.id}-1x.webp 1x`} type="image/webp"/>
              <source srcset={`/images/${this.state.id}-2x.jpg 2x, /images/pedals/${this.state.id}-1x.jpg 1x`} type="image/jpeg"/>
              <PedalImage src={`/images/${this.state.id}-1x.jpg`} alt={`${this.state.manufacturer} ${this.state.model}`} />
            </picture>
          </PedalImageContainer>
          <PedalInfoHeading>Type</PedalInfoHeading>
          <PedalCopy>{this.state.type}</PedalCopy>
          <PedalInfoHeading>Description</PedalInfoHeading>
          <PedalCopy>{this.state.copy}</PedalCopy>
          <PedalInfoHeading>Demo Video</PedalInfoHeading>
          <PedalVideo
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${this.state.youtube}`}
            frameborder="0">
          </PedalVideo>
        </PedalInfo>
      </section>
    );
  }
}
