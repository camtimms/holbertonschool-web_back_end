export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const SpeciesConstructor = this.constructor[Symbol.species];
    return new SpeciesConstructor(this.brand, this.motor, this.color);
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}