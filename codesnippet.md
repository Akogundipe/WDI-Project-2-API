#Code Snippet

```
{this.props.airports.filter(airport => airport.nameAirport.toUpperCase().includes(this.state.userInput.toUpperCase())).map(airport => (
  <div key={airport.airportId}>
    <h2>{airport.nameAirport} Airport</h2>
    <strong>International Civil Aviation Organization Code:</strong>&emsp;<span>{airport.codeIcaoAirport}</span>

    <Link to={`/flights/${airport.codeIataAirport}`} onClick={() => this.props.newFunction(airport.codeIataAirport)}><p>Flights</p></Link>
  </div>
))}
```
