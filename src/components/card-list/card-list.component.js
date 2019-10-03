import React from 'react';

import { Card } from '../card/card.component';
import './card-list.styles.css';

// Just a note the () after the fat arrow => means an implicit return
// If we didnt use them but the normal {} we would have to add a return
export const CardList = (props) => (
  <div className='card-list'>
    {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))
    }
  </div>
);