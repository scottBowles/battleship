import gameboardFactory from "./gameboardFactory"
import stdGameboardFactory from "./stdGameboardFactory"

const config = {
    gameboard: "standard"
}

const configRouter = {
    newGameboard: config.gameboard === "empty" 
        ? gameboardFactory
        : config.gameboard === "standard"
        ? stdGameboardFactory
        : stdGameboardFactory
}

export default configRouter