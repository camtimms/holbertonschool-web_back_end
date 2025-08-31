export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location
  }

  get size() {
    return this._size;
  }

  set size(num) {
    if (typeof num !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = num;
  }

  get location() {
    return this._location;
  }

  set location(str) {
    if (typeof str !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = str;
  }

}