import React, { useState } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from "../StateProvider"
import { actionTypes } from "../reducer"

function Search({ hideButtons = false }){
    const [{}, dispatch] = useStateValue("")
    const [input, setInput] = useState('')
    const history = useHistory();

    // prevent from hard refresh
    const search = e => {
        e.preventDefault();
        console.log("yeh goutcha", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }
        

    return (
        <form className='search'>
            <div className='S_input'>
                <SearchIcon className="inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (   
                <div className="searchButtons">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ):(
            <div className="searchButtons">
                <Button className="searchButtonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button className="searchButtonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            )}
        </form>
    )
}

export default Search
