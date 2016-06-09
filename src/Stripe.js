'use strict';
// @flow

const REQM = ' is required';

class Stripe {

  constructor(stripeSecretKey: string) {
    this.stripeSecretKey = settings.stripeSecretKey;
  }

  /*
   * Generic method post to Stripe Rest API
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   * @param properties : object, key by form parm
   */
  stripePostRequest(resource: string, properties: Object) {
    let formBody = [];
    for (var property in properties) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(properties[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    return fetch(`${settings.stripeUrl}${resource}`, // eslint-disable-line
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.stripeSecretKey
        },
        body: formBody
      }).then((res) => res.json());
  }

  /*
   * Generic method to request Stripe
   * @param id : the ID of object needed
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   */
  stripeGetRequest(resource: string, id: string) {
    return fetch(`${settings.stripeUrl}${resource}/${id}`, // eslint-disable-line
      {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.stripeSecretKey
        }
      }).then((res) => res.json());
  }

  /*
   * Generic method to delete resourse
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   */
  stripeDeleteRequest(resource: string) {
    return fetch(`${settings.stripeUrl}${resource}`, // eslint-disable-line
      {
        method: 'delete',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.stripeSecretKey
        }
      }).then((res) => res.json());
  }

  createToken(cardNumber: string, expMonth: string, expYear: string, cvc: string) {
    if (!cardNumber) throw new Error(`cardNumber${REQM}`);
    if (!expMonth) throw new Error(`expMonth${REQM}`);
    if (!expYear) throw new Error(`expYear${REQM}`);
    if (!cvc) throw new Error(`cvc${REQM}`);
    return this.stripePostRequest('tokens', {
      'card[number]': cardNumber,
      'card[exp_month]': expMonth,
      'card[exp_year]': expYear,
      'card[cvc]': cvc
    });
  }

  createCustomer(token: string, email: string) {
    if (!token) throw new Error(`token${REQM}`);
    if (!email) throw new Error(`email${REQM}`);
    return this.stripePostRequest('customers', {
      source: token,
      email: email,
      description: `Customer for email: ${email}`
    });
  }

  createCharge(amount: number, customer: string, description: string, currency: string = 'eur') {
    if (!amount && amount !== 0) throw new Error(`amount${REQM}`);
    if (!customer) throw new Error(`customer${REQM}`);
    if (!description) throw new Error(`description${REQM}`);
    return this.stripePostRequest('charges', {
      amount: amount,
      currency: currency,
      customer: customer,
      description: description
    });
  }

  refund(chargeId: string) {
    if (!chargeId) throw new Error(`chargeId${REQM}`);
    return this.stripePostRequest('refunds', {
      charge: chargeId
    });
  }

  getCustomer(customerId: string) {
    if (!customerId) throw new Error(`customerId${REQM}`);
    return this.stripeGetRequest('customers', customerId);
  }

  addCardToCustomer(token: string, customerId: string) {
    if (!customerId) throw new Error(`customerId${REQM}`);
    if (!token) throw new Error(`token${REQM}`);
    return this.stripePostRequest(`customers/${customerId}/sources`, {
      source: token
    });
  }

  destroyCardOfCustomer(cardId: string, customerId: string) {
    if (!customerId) throw new Error(`customerId${REQM}`);
    if (!cardId) throw new Error(`cardId${REQM}`);
    return this.stripeDeleteRequest(`customers/${customerId}/sources/${cardId}`);
  }
}


module.exports = Stripe;
