import React from "react";
import { Link } from "react-router-dom";
export default function Navbar()
{
    return(
     <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/aboutme'>Aboutme</Link>
        </li>
        <li>
            <Link to='/academic'>Academic</Link>
        </li>
        <li>
            <Link to='/myproject'>Myproject</Link>
        </li>
     </ul>
    )
}