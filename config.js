import gameboardFactory from "./gameboardFactory"
import stdGameboardFactory from "./stdGameboardFactory"
import preplacedGameboardFactory from "./preplacedGameboardFactory"

const config = {
    gameboard: "standard"
}

const configRouter = {
    newGameboard: config.gameboard === "empty" 
        ? gameboardFactory
        : config.gameboard === "standard"
        ? stdGameboardFactory
        : config.gameboard === "preplaced"
        ? preplacedGameboardFactory
        : stdGameboardFactory
}

export default configRouter