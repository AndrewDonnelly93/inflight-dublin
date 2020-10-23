import React from 'react';
import Flight from './flight.component';
import {FlightStyled} from './flights.styles';

const Flights = ({
                   flightsModels
                 }) => {

  return (
    <div>
      <FlightStyled>
        <thead>
        <th>Departure</th>
        <th>Airport</th>
        <th>Status</th>
        <th>Terminal</th>
        <th>More Details</th>
        </thead>
        <tbody>
          {
            flightsModels.map(({
                                 destinationPortCode,
                                 destinationPortName,
                                 flightCode,
                                 flightProvider,
                                 id,
                                 scheduledArrival,
                                 scheduledDeparture,
                                 sourcePortCode,
                                 sourcePortName,
                                 status
                               }) =>
              <Flight
                id={id}
                destinationPortCode={destinationPortCode}
                destinationPortName={destinationPortName}
                flightCode={flightCode}
                flightProvider={flightProvider}
                scheduledArrival={scheduledArrival}
                scheduledDeparture={scheduledDeparture}
                sourcePortCode={sourcePortCode}
                sourcePortName={sourcePortName}
                status={status}
              />
            )
          }
        </tbody>
      </FlightStyled>
    </div>
  );
};

export default Flights;
