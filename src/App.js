import {useState,useEffect} from 'react'
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

const App = () =>{

  //useState
  const [searchField,setSearchField] = useState ('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] = useState([monsters])

  
  //useEffect
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then( (users)=> setMonsters(users))
  },[] )

  useEffect(()=> {
      const newFilteredMonsters = monsters.filter(
        (monster)=>{ 
          return  monster.name.toLowerCase().includes(searchField)//incldes check for char & returns boolean
        }) //end of filter

    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])


    const onSearchChange = (e)=> { //on change event handler - gets the typed char
      const searchFieldString = e.target.value.toLowerCase() // saved to a seperate const value
      //update state with search string data
      setSearchField(searchFieldString)
     }

    

  return(
    <div className='App'>  
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          placeholder='Search monsters'
          onChangeHandler = {onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
  )
}


export default App;