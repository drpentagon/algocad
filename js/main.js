import GraphicsHandler from './graphics-handler.js'

const CONTAINER = document.querySelector('.graphics-wrapper')

class Application {
  constructor () {
    this.gh = new GraphicsHandler(CONTAINER)
  }

  start () {
    const { gh } = this
    gh.fillStyle = '#312b2b'
    gh.strokeStyle = '#312b2b'
    gh.drawCircle(300, 300, 20)
  }
}

const algocad = new Application()
algocad.start()
