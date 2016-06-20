jest.unmock('../Stripe');

describe('Stripe', () => {
  it('defaultHeader', () => {
    const Stripe = require('../Stripe');

    expect(new Stripe('testKey').defaultHeader()).toEqual({
      Accept: 'application/json',
      Authorization: 'Baerer testKey'
    });
  });
});
