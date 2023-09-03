import React from "react"
import memeData from "../memesData.js"
export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/43a45p.png"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randInt = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randInt].url
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                url: url
            }
        });
    }
    function handleChange(event){
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return(
        <main>
            <div className = "form">
                <input type="text" placeholder = "Top Text" className="formInput" 
                name = "topText" onChange = {handleChange} value = {meme.topText}/>
                <input type="text" placeholder = "Bottom Text" className="formInput" 
                name = "bottomText" onChange = {handleChange} value  = {meme.bottomText}/>
                <button onClick = {getMemeImage} className ="getImageButton">
                Get a new meme image 🖼</button>
            </div>
            <div className = "imageContainer">
                <img className = "memeImage" src = {meme.url}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}