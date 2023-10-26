import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './app'
import WithJson from './app/provider/with-json'

const root = createRoot(document.querySelector('#root'))
root.render(
    <WithJson>
         <App/>
    </WithJson>
)