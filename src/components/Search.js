import React, { useState } from 'react'
import '../css/search.css'

export const Search = ({setcategoryInput}) => {

    const [inputValue, setinputValue] = useState('')

    const handlenChange = (e) => {
        setinputValue(e.target.value)
    }

    const handlenSubmit = (e) => {
        e.preventDefault()

        if ( inputValue.trim().length >= 1 ) {
            setcategoryInput( inputValue );
            setinputValue('');
        }
        
        
    }

    return (
        <>
            <div className = 'container-input'>
                <form onSubmit = {handlenSubmit}>

                <input
                className = 'search'
                type = "text"
                onChange = {handlenChange}
                value = {inputValue}
                />

                </form>
                {
                    inputValue.length === ''  && <p>Buscar</p>
                }
            </div>
        </>
    )
}
