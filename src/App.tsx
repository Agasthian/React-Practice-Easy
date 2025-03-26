import {useState,useEffect,ChangeEvent} from 'react'
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.component'
import {getData} from './utils/data.utils'

import './App.css'

export type Monster ={
  id: string;
  name: string;
  email:string
}

const App = () =>{

  //useState
  const [searchField,setSearchField] = useState ('') //(2) this empty
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  
  //useEffect
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response)=> response.json())
    // .then( (users)=> setMonsters(users))

    const fetchUser = async () =>{
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users) //use state of empty array by default is set as "never" in type script
      // we set type-Monster array to useState of setMonsters (1)
    }

    fetchUser()

  },[] )

  useEffect(()=> {
      const newFilteredMonsters = monsters.filter(
        (monster)=>{ 
          return  monster.name.toLowerCase().includes(searchField)//incldes check for char & returns boolean
        }) //end of filter

    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])


    const onSearchChange = (event : ChangeEvent<HTMLInputElement>):void => { 
      //on change event handler - gets the typed char
      const searchFieldString = event.target.value.toLowerCase() // saved to a seperate const value
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