import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`
  }

  get floors() {
    return this._floors;
  }

  set floors(num) {
    if (typeof num !== 'number') {
      throw new TypeError('floors must be a number')
    }
    this._floors = num;
  }
}