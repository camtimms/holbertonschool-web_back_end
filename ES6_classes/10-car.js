export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  cloneCar() {
    return new this.constructor(this.brand, this.motor, this.color);
  }

  get brand() {
    return this._brand;
  }

  set brand(str) {
    if (typeof str !== 'string') {
      throw new TypeError('brand must be a string')
    }
    this._brand = str
  }

  get motor() {
    return this._motor;
  }

  set motor(str) {
    if (typeof str !== 'string') {
      throw new TypeError('motor must be a string')
    }
    this._motor = str
  }

  get color() {
    return this._color;
  }

  set color(str) {
    if (typeof str !== 'string') {
      throw new TypeError('color must be a string')
    }
    this._color = str
  }
}