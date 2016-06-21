jest.unmock('../Stripe');

describe('Stripe', () => {
  it('get default header', () => {
    const Stripe = require('../Stripe').default;

    expect(new Stripe('testKey').defaultHeader()).toEqual({
      Accept: 'application/json',
      Authorization: 'Bearer testKey'
    });
  });
});
