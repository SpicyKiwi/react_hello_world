import React, { useState } from 'react'

const Darkness = () => {

    const [useDarkMode, changeDarkMode] = useState(false)

    return (<div className={ useDarkMode ? "dark-mode dark" : "dark-mode light" }>
        <h1>Dark Mode</h1>
        <label>
            <input type="checkbox" onChange={() => { changeDarkMode(!useDarkMode) }}/> 
            <span style={{ marginLeft: '8px'}}>Use <b>dark</b> mode?</span>
        </label>
        </div>)
}

export default Darkness