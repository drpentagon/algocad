class GraphicsHandler {
  constructor (parent_) {
    this.parent = parent_

    this.scale = window.devicePixelRatio
    this.canvas = document.createElement('canvas')
    this.canvas.className = 'canvas'
    parent_.appendChild(this.canvas)

    this.ctx = this.canvas.getContext('2d')
    this.ctx.lineWidth = 0.5
    this.ctx.font = `20px Miso`
    this.ctx.textBaseline = 'top'

    this.resizeCanvas()
  }

  resizeCanvas () {
    const width = this.parent.offsetWidth
    const height = this.parent.offsetHeight

    this.center = {
      x: width / 2, 
      y: height / 2
    }

    this.canvas.setAttribute('width', width * this.scale)
    this.canvas.setAttribute('height', height * this.scale)
    this.canvas.style.width = width + 'px'
    this.canvas.style.height = height + 'px'
  }

  clearCanvas () {
    const { ctx, canvas } = this
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
  }

  translatePoint ({x_, y_}) {
    return {
      x: (this.center.x + x_) * this.scale,
      y: (this.center.y - y_) * this.scale
    }
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
    const p = this.translatePoint({x_, y_})
    console.log(p)
    ctx.beginPath()
    ctx.arc(p.x, p.y, r_ * this.scale, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
}

export default GraphicsHandler
