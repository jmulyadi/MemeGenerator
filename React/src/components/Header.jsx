import React from "react"
import doge from "../images/chibi.jpg"
export default function Header(){
    return(
        <div>
            <header className = "header">
                <img src = {doge} className = "headerImage"/>
                <h2 className = "title">Meme Generator</h2>
                <h3 className = "headerH3">By: Josh Mulyadi</h3>
            </header>
        </div>
    )
}