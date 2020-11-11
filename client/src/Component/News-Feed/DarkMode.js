import React, { useState, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import storage from 'local-storage-fallback'
import '../Css/DarkMode.css'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#15202B' : 'white'};
  color: ${props => props.theme.mode === 'dark' ? 'white' : '#15202B'};
}`;

const getInitalTheme = () => {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}


function DarkMode() {
    const [theme, settheme] = useState(getInitalTheme)

    const DarkClick = () => {
        settheme(theme.mode == 'dark' ? { mode: 'light' } : { mode: 'dark' })
    }

    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div>
                <center>
                    <label class="switch">
                        <input onClick={DarkClick} type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </center>
            </div>
        </ThemeProvider>
    )
}

export default DarkMode


