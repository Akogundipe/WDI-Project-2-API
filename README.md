# WDI-Project-2-API

draw a component hierarchy would be a great way to indicate which components need state and which components need props.

# Wireframe
Image on Desktop

#Airport information
My React app will be informational travel app in regards to airports using aviation-edge.com API data. I plan to make transportation infographic regarding accessibility of airports. Information such as whether they are close to bus depots or train stations.

#User Story
People who love to travel or travel often through business will be using this app.
As a person I would search an airport to get flight info.
As a person I would like to see if there is an easy way to get to the airport.
As  a person, I would like to see what times planes are leaving.

User will type airport or airport code into a form. User will then "submit" and get info on that airport back.
User can then request where the nearest bus station or rail station is.


#A link to the API you plan to use.
https://aviation-edge.com/developers/

#An explanation of the major problems you plan to face while implementing this app.
Lot of things listed when I make a general call. Have to find a way to limit data. After user submits airport and gets the airport info back via axios, have to find way to add options for searching for nearby alternate transports (taxis, buses, trains).

#An explanation of how you foresee yourself solving the aforementioned problems.
I can find a way to sort airfields by certain values by passing down props and assessing the particular value and rendering it in browser. To build upon the previous functions, the app will then make another call to get another URL to get new information.

#A section clearly defining MVP and POST MVP.
MVP: MVP make a styled app that fetches airfield data according to my parameters
PostMVP: MVP make a well styled app that fetches airfield data according to my parameters
