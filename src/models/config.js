import gameboardFactory from "./Gameboard"
import stdGameboardFactory from "./StdGameboard"
import preplacedGameboardFactory from "./PreplacedGameboard"

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