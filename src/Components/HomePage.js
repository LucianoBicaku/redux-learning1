import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <div>
            <Link to={'/recipies'}>
                <button>Continue</button>
            </Link>
        </div>
    )
}
