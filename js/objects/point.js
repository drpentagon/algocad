const POINT_RADIUS = 10
const COLOR = '#312b2b'

class Point {
  constructor (x_, y_) {
    this.x = x_
    this.y = y_
  }

  render (gh) {
    const { x, y } = this
    gh.fillStyle = COLOR
    gh.strokeStyle = COLOR
    gh.drawCircle(x, y, POINT_RADIUS)
  }
}

export default Point
