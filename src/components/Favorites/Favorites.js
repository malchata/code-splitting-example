import { h, render, Component } from "preact";
import Heading from "../Heading/Heading";
import BackLink from "../BackLink/BackLink";
import PedalList from "../PedalList/PedalList";
import Pedal from "../Pedal/Pedal";
import toggleFavorite from "../../utils/toggleFavorite";

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.setState({
      pedals: []
    });
  }

  componentDidMount() {
    let favoritePedals = localStorage.getItem("favoritePedals");

    if (favoritePedals !== null) {
      let favoritePedalsArr = JSON.parse(favoritePedals);
      let pedals = [];

      favoritePedalsArr.forEach(pedal => pedals.push(<Pedal id={pedal.id} manufacturer={pedal.manufacturer} model={pedal.model} type={pedal.type}/>));

      this.setState({
        pedals: pedals
      });
    }
  }

  render() {
    return (
      <section>
        <Heading>
          <BackLink href="/">←</BackLink>
          <h1>Favorite Pedals</h1>
        </Heading>
        <PedalList>
          {this.state.pedals}
        </PedalList>
        <p style={`display: ${this.state.pedals.length > 0 ? "none" : "block"}`}>Looks like you don't have any favorites. Maybe <a href="/">search for some</a>?</p>
      </section>
    );
  }
}
