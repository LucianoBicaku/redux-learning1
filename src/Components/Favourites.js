import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addFavourite } from "../actions"


export default function Favourites() {
    const favourites = useSelector(state => state.favourites)
    // const [data, setData] = useState([])
    return (
        <div>
            {favourites.length == 0 ? 'you have no favourites' :
                (favourites.map((elem) =>
                    <div key={elem.id}>
                        <h3>{elem.title}</h3>
                        <img style={{ width: "100px", height: "100px" }} src={elem.image} />
                        <p>{elem.id}</p>
                        <button onClick={() => { console.log(favourites) }}>Remove</button>
                    </div >
                ))
            }
        </div >
    )
}
