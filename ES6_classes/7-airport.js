export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  toString() {
    return `[object ${this.code}]`
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError('name must be a string')
    }
    this._name = str;
  }

  get code() {
  return this._code;
  }

  set code(str) {
    if (typeof str !== 'string') {
      throw new TypeError('code must be a string')
    }
    this._code = str;
  }
}