import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a className='btn btn-primary' href={'https://maps.google.com/?q=' + props.location} target="_blank" role='button'>Find Me!</a>
  </div>
);
