import React, { useEffect, useState } from 'react'
import GetGiphyService from '../services/getGiphys'
import { Giphys } from './Giphys'
import '../css/imgRow.css'
import { Loading } from './Loading'


export const GiphyList = ({categoryInput}) => {

    const [imag, setimag] = useState([])
    const [loading, setloading] = useState(false)


    useEffect(() => {

       const getGiphys = async () => {

             GetGiphyService.getgiphy(categoryInput).then(({data}) => {
                 
                 const itemsGiphy = data.map(git => {
                     return {
                         img : git.images?.downsized_medium.url,
                         id : git.id,
                         tilte : git.title     
                        }
                    })
                    
                    setimag(itemsGiphy)
                    setloading(true)
                })
                setloading(false)
        }
        
        getGiphys()
    }, [categoryInput])

    return (
        
        <div className = 'container-img'>
            {

                loading ? imag.map(items => (
                    <Giphys key = {items.id} items = {items}/>
                )) : <Loading/>

            } 
           
        </div>
        
    )
}
