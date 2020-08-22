import React from 'react'
import ReactDOM from 'react-dom'
import "@babel/polyfill";

import App from './src/ui/App'

import Player from "./src/models/Player"
import CPU from "./src/models/CPU"

const player = Player("Player")
const cpu = CPU()

ReactDOM.render(
    <App player={ player } opponent={ cpu } />,
    document.getElementById("root")
)

