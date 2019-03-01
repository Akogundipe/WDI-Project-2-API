# WDI-Project-2-API

http://papaya-flight-checker.surge.sh/

#Airport information
My React app is an informational travel app in regards to airports using aviation-edge.com API data. It renders an infographic regarding flights at airports. Information such as whether an airport has departures or arrivals.

#User Story
People who love to travel or travel often through business will be using this app.
As a person I would search an airport to get flight info.
As  a person, I would like to see what times planes are coming or leaving.

User will type airport or airport code into a form. User will then "submit" and get info on that airport back.


#A link to the API you plan to use.
https://aviation-edge.com/developers/

#An explanation of the major problems you plan to face while implementing this app.
Lot of things listed when I make a general call. Have to find a way to limit data. After user submits airport and gets the airport info back via axios, have to find way to search for arrivals and departures.

#An explanation of how you foresee yourself solving the aforementioned problems.
I can find a way to sort airfields by certain values by passing down props and assessing the particular value and rendering it in browser. To build upon the previous functions, the app will then make another call to get another URL to get new information.

#A section clearly defining MVP and POST MVP.
MVP: MVP make a styled app that fetches airfield data according to my parameters
PostMVP: MVP make a well styled app that fetches airfield data according to my parameters

#Code Snippet
```{this.props.airports.filter(airport => airport.nameAirport.toUpperCase().includes(this.state.userInput.toUpperCase())).map(airport => (
  <div key={airport.airportId}>
    <h2>{airport.nameAirport} Airport</h2>
    <strong>International Civil Aviation Organization Code:</strong>&emsp;<span>{airport.codeIcaoAirport}</span>

    <Link to={`/flights/${airport.codeIataAirport}`} onClick={() => this.props.newFunction(airport.codeIataAirport)}><p>Flights</p></Link>
  </div>
))}```
