import React, {useState, useEffect}from "react"
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/43a45p.png"
    })
    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")  
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    const [allMemeImages, setAllMemeImages] = useState([])
    function getMemeImage(){
        const randInt = Math.floor(Math.random()*allMemeImages.length)
        const url = allMemeImages[randInt].url
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