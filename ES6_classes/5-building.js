export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft
  }

  set sqft(num) {
    if (typeof num !== 'number')
      throw new TypeError('sqft must be a number')
    this._sqft = num
  }
}