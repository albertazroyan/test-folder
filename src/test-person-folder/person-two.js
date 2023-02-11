import React from 'react';
import UpdateComponent from './HOK';

const PersonTwo = ({money, handleIncrease}) => {
  return (
    <div>
      <h2>Jhon is offering {money}</h2>
      <button onClick={handleIncrease}>Increase Mony</button>
    </div>
  )
}

export default UpdateComponent(PersonTwo);
