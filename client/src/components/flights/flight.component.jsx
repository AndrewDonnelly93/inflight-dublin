import React from 'react';
import {FlightStyled} from './flight.styles';
import SpringModal from './flight-modal.component';

const Flight = ({
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
}) => {

  return (
    <FlightStyled>
      <td>{`${scheduledDeparture}`}</td>
      <td>{`${destinationPortName} ${destinationPortCode} ${sourcePortCode} ${sourcePortName}`}</td>
      <td>{status}</td>
      <td>
        <SpringModal
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
      </td>
    </FlightStyled>
  )
};

export default Flight;
