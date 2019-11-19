const POINT_RADIUS = 10
const COLOR = '#312b2b'

class Point {
  constructor (x_, y_, color_) {
    this.x = x_
    this.y = y_
    this.color = color_ || COLOR
  }

  render (gh) {
    const { x, y } = this
    gh.fillStyle = this.color
    gh.strokeStyle = this.color
    gh.drawCircle(x, y, POINT_RADIUS)
  }
}

export default Point
