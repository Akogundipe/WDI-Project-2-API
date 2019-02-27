import React from 'react';

class Airports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  .filter(word => {word.includes(this.state.userInput)})

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
    this.props.onChange(event.target.value)
  }

  render() {
  return (
    <section>
    {props.airports.map(airport => (
      <div key={airport.nameAirport}>
        <h2>{airport.nameAirport} Airport</h2>
        <label htmlFor="airport">Airport </label>
        <input type="text" id="airport"
          value={this.state.userInput}
          onChange={this.handleChange}/>
      </div>
    ))}
    </section>
    )
  }
}

export default Airports;
