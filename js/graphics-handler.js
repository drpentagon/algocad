class GraphicsHandler {
  constructor (parent_) {
    const width = parent_.offsetWidth
    const height = parent_.offsetHeight

    this.canvas = document.createElement('canvas')
    this.canvas.className = 'canvas'
    this.canvas.setAttribute('width', width)
    this.canvas.setAttribute('height', height)
    this.canvas.style.width = width + 'px'
    this.canvas.style.height = height + 'px'

    parent_.appendChild(this.canvas)
    this.ctx = this.canvas.getContext('2d')
    this.ctx.lineWidth = 0.5
    this.ctx.font = `20px Miso`
    this.ctx.textBaseline = 'top'
  }

  clearCanvas () {
    const { ctx, canvas } = this
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
  }

  set strokeStyle (style_) {
    const { ctx } = this
    ctx.strokeStyle = style_
  }

  set fillStyle (style_) {
    const { ctx } = this
    ctx.fillStyle = style_
  }

  set lineWidth (width_) {
    const { ctx } = this
    ctx.lineWidth = width_
  }

  drawCircle (x_, y_, r_) {
    const {ctx} = this
    ctx.beginPath()
    ctx.arc(x_, y_, r_, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
}

export default GraphicsHandler
