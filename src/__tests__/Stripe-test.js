jest.unmock('../Stripe');


describe('Stripe', () => {

  it('return defaultHeader', () => {
    const Stripe = require('../Stripe').default;
    const api = new Stripe('testKey');

    expect(api.defaultHeader()).toEqual({
      Accept: 'application/json',
      Authorization: 'Bearer testKey'
    });
  });

  it('failed on createToken with void', async () => {
    const Stripe = require('../Stripe').default;
    const api = new Stripe('testKey');

    try {
      await api.createToken();
    } catch (error) {
      expect(error.message).toEqual('info is required');
    }
  });

  // it('failed on createCustomer with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.createCustomer();
  //   } catch (error) {
  //     expect(error.message).toEqual('token is required');
  //   }
  // });

  // it('failed on updateCustomer with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.updateCustomer();
  //   } catch (error) {
  //     expect(error.message).toEqual('customerId is required');
  //   }
  // });

  // it('failed on createCharge with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.createCharge();
  //   } catch (error) {
  //     expect(error.message).toEqual('amount is required');
  //   }
  // });

  // it('failed on refundCharge with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.refundCharge();
  //   } catch (error) {
  //     expect(error.message).toEqual('chargeId is required');
  //   }
  // });

  // it('failed on getCustomer with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.getCustomer();
  //   } catch (error) {
  //     expect(error.message).toEqual('customerId is required');
  //   }
  // });

  // it('failed on addCardToCustomer with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.addCardToCustomer();
  //   } catch (error) {
  //     expect(error.message).toEqual('token is required');
  //   }
  // });

  // it('failed on destroyCardOfCustomer with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.destroyCardOfCustomer();
  //   } catch (error) {
  //     expect(error.message).toEqual('cardId is required');
  //   }
  // });

  // it('failed on createSubscription with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.createSubscription();
  //   } catch (error) {
  //     expect(error.message).toEqual('customerId is required');
  //   }
  // });

  // it('failed on retrieveSubscription with void', async () => {
  //   const Stripe = require('../Stripe').default;
  //   const api = new Stripe('testKey');

  //   try {
  //     await api.retrieveSubscription();
  //   } catch (error) {
  //     expect(error.message).toEqual('subscriptionId is required');
  //   }
  // });

});
