import GraphicsHandler from './graphics-handler.js'
import Point from './objects/point.js'

const CONTAINER = document.querySelector('.graphics-wrapper')

class Application {
  constructor () {
    this.gh = new GraphicsHandler(CONTAINER)

    window.onresize = (e) => {
      this.gh.resizeCanvas()
    }
  }

  start () {
    this.point = new Point(100, 200)
    this.point.render(this.gh)
  }
}

const algocad = new Application()
algocad.start()
