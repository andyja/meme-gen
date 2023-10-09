import React from "react";
import memesData from "../../public/memesData";

function Meme() {
    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/9ehk.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/9ehk.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // const url = memesArray[randomNumber].url
        // console.log(url)

    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}

export default Meme;