import React from 'react'
import '../css/img.css'
import Fade from 'react-reveal/Fade';


export const Giphys = ({items}) => {
    
    return (
        <div>
            <div>
            <Fade top>
                <img className = 'img' src = {items.img} alt = {items.title}/> 
            </Fade> 
            </div>
        </div>
    )
}
