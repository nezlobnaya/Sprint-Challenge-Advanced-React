import React from 'react';
import styled from 'styled-components';
import '../../index.css'


const Card = styled.div`
    background: papayawhip;
    margin: 10px;
    padding: 25px; 
    width: 300px;
    text-align: center;
    border-radius: 0.75rem;
    box-shadow: 10px 10px 5px grey;
`



 const PlayerCard = props => {
    return (
        <Card>
        <div className='List'>
          <a
           href={`http://www.google.com/search?q=${props.name.split(' ').join('+')}`}
           target='_blank' rel='noopener noreferrer'>
           <h3>⚽{props.name} ⚽</h3>
           <p>{props.country}</p>
           <p>Google Searches: {props.searches}</p>
          </a>
        </div>
        </Card>
    )
}

export default PlayerCard