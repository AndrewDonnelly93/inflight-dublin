import React from 'react';
import FlightsContainer from '../flights/flights.container';
import {CollectionsOverviewStyled} from './collections-overview.styles';

const CollectionsOverview = () => {
    return (
        <CollectionsOverviewStyled>
            <FlightsContainer/>
        </CollectionsOverviewStyled>
    )
};

export default CollectionsOverview;
