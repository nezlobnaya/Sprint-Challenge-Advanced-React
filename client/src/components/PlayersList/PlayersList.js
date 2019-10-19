import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const PlayersList = props => {
    console.log('Players Props', props)
    return(<>
        {props.playersData.map((i,index) => 
        <PlayerCard key={index} {...i} />)}
         </>
        )
}

export default PlayersList;