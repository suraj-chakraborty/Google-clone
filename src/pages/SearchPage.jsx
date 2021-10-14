import React from 'react'
import "./SearchPage.css"
import {useStateValue} from '../StateProvider'
import useGoogle from '../useGoogle'
import Response from '../Response'
import { Link } from "react-router-dom"
import Search from "./Search"
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import RoomIcon from "@material-ui/icons/Room"

// 1.https://developers.google.com/custom-search/v1/using_rest

//2. https://cse.google.com/cse/create/new

function SearchPage() {
    const [{term}, dispatch] = useStateValue()


    // Live Api-Call
    const {data} = useGoogle(term)
//    fake api call
    // const data = Response;



    console.log(data)
    return (
        <div className="searchPage">
            <div className="pageHeader">
                <Link to="/">
                    <img className='pageLogo'
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                </Link>
                <div className='headerBody'>
                    <Search hideButtons />
                    <div className="optionLeft"><div className="options">
                        <SearchIcon />
                        <Link to="/all">All</Link>

                    </div>
                    <div className="options">
                        <DescriptionIcon />
                        <Link to="/news">News</Link>

                    </div>
                    <div className="options">
                        <ImageIcon />
                        <Link to="/image">Image</Link>

                    </div>
                    <div className="options">
                        <RoomIcon />
                        <Link to="/maps">maps</Link>

                    </div>
                    
                    
                    <div className="optionRight"> <div className="options">
                        <Link to="/settings">Settings</Link>

                    </div>
                    <div className="options">
                        <Link to="/tools">Tools</Link>

                    </div>
                    </div>
                    </div>
                   
                </div>
            </div>
            {term && (<div className='pageResults'>

                <p className="countTime">
                   About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} 
                </p>
                {data?.items.map(item => (
                    <div className="pageResult">
                        
                        <a className="resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="snippets">{item.snippet}</p>
                        <a className="pageLink" href={item.link}>
                        {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src &&(
                        <img className="pageImage"
                        src={
                            item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                        }
                        alt=""
                        />
                    )}
                            {item.displayLink}
                        </a>
                    </div>
                ))}
            </div>
            )}
            
            
        </div>
    )
}

export default SearchPage
