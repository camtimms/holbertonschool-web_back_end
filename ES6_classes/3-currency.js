export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  get code() {
    return this._code;
  }

  set code(str) {
    if (typeof str !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = str;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = str;
  }
}