import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addFavourite } from '../actions'
export default function Recipies() {

    const [data, setData] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=13232a0116e7402289bc790a7e8c83e3")
            .then((result) => {
                setData(result.data.products)
            })
    }, [])


    return (
        <>
            {data.map((elem) => (
                <div key={elem.id}>
                    <h3>{elem.title}</h3>
                    <img style={{ width: "100px", height: "100px" }} src={elem.image} />
                    <button onClick={() => {
                        dispatch(addFavourite(elem))
                    }}>Add</button>
                </div>
            ))}
        </>
    );
}
