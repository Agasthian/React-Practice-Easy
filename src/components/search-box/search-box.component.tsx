import {ChangeEventHandler} from 'react'
import './search-box.styles.css'


type SearchBoxProps = {
  className : string,
  placeholder : string,
  onChangeHandler : ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({className,placeholder,onChangeHandler}: SearchBoxProps)=> (
      <input 
        className={`search-box ${className}`}
        placeholder={placeholder}
        type='search'
        onChange={onChangeHandler}
      />
      
    )


export default SearchBox