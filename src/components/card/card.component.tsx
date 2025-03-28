import React from 'react'
import {Monster} from '../../App'
import './card.styles.css'

type cardProps = {
    monster : Monster
}

const Card= ({monster} :cardProps )=> {
  
    const {id,email,name}= monster
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card