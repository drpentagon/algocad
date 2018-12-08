import GraphicsHandler from './graphics-handler.js'

const CONTAINER = document.querySelector('.graphics-wrapper')

class Application {
  constructor () {
    this.gh = new GraphicsHandler(CONTAINER)
  }

  start () {
    console.log('application start')
  }
}

const algocad = new Application()
algocad.start()
