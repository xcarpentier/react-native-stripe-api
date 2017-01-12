// @flow

const REQM = ' is required';
const STRIPE_URL = 'https://api.stripe.com/v1/';


class Stripe {
  stripeSecretKey: string;

  constructor(apiKey: string) {
    this.stripeSecretKey = apiKey;
  }

  /**
   * Return the default header entries : Accept and Authorization
   * @returns {Object} Default header Accept and Authorization
   */
  defaultHeader() {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${this.stripeSecretKey}`,
    };
  }

  /**
   * Generic method post to Stripe Rest API
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   * @param properties : object, key by form parm
   */
  async stripePostRequest(resource: string, properties: Object): Promise {
    const body = Object.entries(properties)
      .map(([key, value]) => `${key}=${value}`)
      .reduce((previous, current) => `${previous}&${current}`, '');

    const result = await fetch(`${STRIPE_URL}${resource}`, {
      method: 'POST',
      headers: {
        ...this.defaultHeader(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    return result.json();
  }

  /**
   * Generic method to request Stripe
   * @param id : the ID of object needed
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   */
  async stripeGetRequest(resource: string, id: string): Promise {
    const result = await fetch(`${STRIPE_URL}${resource}/${id}`, {
      method: 'GET',
      headers: this.defaultHeader(),
    });

    return result.json();
  }

  /**
   * Generic method to delete resourse
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   */
  async stripeDeleteRequest(resource: string): Promise {
    const result = await fetch(`${STRIPE_URL}${resource}`, {
      method: 'DELETE',
      headers: this.defaultHeader(),
    });

    return result.json();
  }

  createToken(cardNumber: string, expMonth: string, expYear: string, cvc: string): Promise {
    if (!cardNumber) throw new Error(`cardNumber${REQM}`);
    if (!expMonth) throw new Error(`expMonth${REQM}`);
    if (!expYear) throw new Error(`expYear${REQM}`);
    if (!cvc) throw new Error(`cvc${REQM}`);

    return this.stripePostRequest('tokens', {
      'card[number]': cardNumber,
      'card[exp_month]': expMonth,
      'card[exp_year]': expYear,
      'card[cvc]': cvc,
    });
  }

  createCustomer(token: string, email: string): Promise {
    if (!token) throw new Error(`token${REQM}`);
    if (!email) throw new Error(`email${REQM}`);

    return this.stripePostRequest('customers', {
      source: token,
      email,
      description: `Customer for email: ${email}`,
    });
  }

  createCharge(amount: number, customer: string, description: string,
    currency: string = 'eur'): Promise {
    if (!amount && amount !== 0) throw new Error(`amount${REQM}`);
    if (!customer) throw new Error(`customer${REQM}`);
    if (!description) throw new Error(`description${REQM}`);

    return this.stripePostRequest('charges', {
      amount,
      currency,
      customer,
      description,
    });
  }

  refundCharge(chargeId: string): Promise {
    if (!chargeId) throw new Error(`chargeId${REQM}`);

    return this.stripePostRequest('refunds', {
      charge: chargeId,
    });
  }

  getCustomer(customerId: string): Promise {
    if (!customerId) throw new Error(`customerId${REQM}`);

    return this.stripeGetRequest('customers', customerId);
  }

  addCardToCustomer(token: string, customerId: string): Promise {
    if (!token) throw new Error(`token${REQM}`);
    if (!customerId) throw new Error(`customerId${REQM}`);

    return this.stripePostRequest(`customers/${customerId}/sources`, {
      source: token,
    });
  }

  destroyCardOfCustomer(cardId: string, customerId: string): Promise {
    if (!cardId) throw new Error(`cardId${REQM}`);
    if (!customerId) throw new Error(`customerId${REQM}`);

    return this.stripeDeleteRequest(`customers/${customerId}/sources/${cardId}`);
  }


   createSubscription(customer: string, plan: string): Promise {
     if (!customer) throw new Error(`customer${REQM}`);
     if (!plan) throw new Error(`plan${REQM}`);

     return this.stripePostRequest('subscriptions', {
       customer,
       plan,
     });
   }

   retrieveSubscription(id: string): Promise {
     if (!id) throw new Error(`id${REQM}`);

     return this.stripePostRequest(`subscriptions/${id}`, {});
   }
}


export default Stripe;
