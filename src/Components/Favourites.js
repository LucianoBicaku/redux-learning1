import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Favourites() {
    const favourites = useSelector(state => state.favourites)
    // const [data, setData] = useState([])
    return (
        <div>
            <hr />
            <h1>Favourites</h1>
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
