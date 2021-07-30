import React from 'react'
import { useState } from 'react'

const Darkness = () => {

    const [useDarkMode, changeDarkMode] = useState(false)

    return (<div className={ useDarkMode ? "dark-mode dark" : "dark-mode light" }>
        <h1>Dark Mode</h1>
        <label>
            <input type="checkbox" onChange={() => { changeDarkMode(!useDarkMode) }}/> 
            <span>Use dark mode?</span>
        </label>
        </div>)
}

export default Darkness