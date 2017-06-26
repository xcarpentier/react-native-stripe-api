// @flow

const REQM = ' is required';
const STRIPE_URL = 'https://api.stripe.com/v1/';


class Stripe {

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
   * Only operation allowed from client/Using only public token
   * @param info : { number, exp_month, exp_year, address_city, address_country, address_line1,
   * ... address_line2, address_state, address_zip, currency, cvc }
   */
  createToken(info): Promise {
    let { number,
      exp_month,
      exp_year,
      cvc,
      address_city,
      address_state,
      address_country,
      address_line1,
      address_line2,
      address_zip,
      currency
    } = info;

    if (!number) throw new Error(`cardNumber${REQM}`);
    if (!exp_month) throw new Error(`expMonth${REQM}`);
    if (!exp_year) throw new Error(`expYear${REQM}`);
    if (!cvc) throw new Error(`cvc${REQM}`);

    return this.stripePostRequest('tokens', {
      card: info
    });
  }
}


export default Stripe;
