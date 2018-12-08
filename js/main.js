import GraphicsHandler from './graphics-handler.js'
import Point from './objects/point.js'

const CONTAINER = document.querySelector('.graphics-wrapper')

class Application {
  constructor () {
    this.gh = new GraphicsHandler(CONTAINER)
  }

  start () {
    this.point = new Point(200, 300)
    this.point.render(this.gh)
  }
}

const algocad = new Application()
algocad.start()
