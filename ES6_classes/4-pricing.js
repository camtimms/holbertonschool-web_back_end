import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate
  }

  get amount() {
    return this._amount;
  }

  set amount(num) {
    if (typeof num !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = num;
  }

  get currency() {
    return this._currency;
  }

  set currency(obj) {
    if (!(obj instanceof Currency)) {
      throw new TypeError('currency must be a Currency object/instance');
    }
    this._currency = obj;
  }
}