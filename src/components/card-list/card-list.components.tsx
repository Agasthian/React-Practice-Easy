import React from 'react'
import Card from '../card/card.component'
import {Monster} from '../../App'
import './card-list.styles.css'

type cardListProps = {
  monsters : Monster[]
}

const CardList = ({monsters}: cardListProps)=> (
    <div className='card-list'>
      {monsters.map( (monster)=>{
          return <Card monster={monster}/> 
      })}
    </div>
  )

export default CardList