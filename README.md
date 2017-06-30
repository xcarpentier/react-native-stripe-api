# react-native-stripe-api (only to create token)

[![NPM version](https://badge.fury.io/js/react-native-stripe-api.svg)](http://badge.fury.io/js/react-native-stripe-api)
[![Downloads](https://img.shields.io/npm/dm/react-native-stripe-api.svg)](https://www.npmjs.com/package/react-native-stripe-api)
[![Circle CI](https://circleci.com/gh/xcarpentier/react-native-stripe-api.svg?style=svg)](https://circleci.com/gh/xcarpentier/react-native-stripe-api)

Little Stripe library for React-Native.

### Installation
```bash
$ npm i react-native-stripe-api --save
```
or
```bash
$ yarn add react-native-stripe-api
```

## Roadmap
- include a payment form component
- include react-native-awesome-card-io
- a new server project to keep secret

## Setup

### Security issue (`fixed since 0.1.0`)

https://github.com/xcarpentier/react-native-stripe-api/issues/8

### Stripe API

This lib need a Stripe API Key
```JavaScript
const apiKey = '<your Stripe API Key>';
const client = new Stripe(apiKey);

// Create a Stripe token with new card infos
const token = await client.createToken('4242424242424242' , '09', '18', '111');

// Create a new customer and link your new card
// const customer = await client.createCustomer(token.id, 'customer@email.com', '<Your user ID>', 'John', 'Doe');

// Create charge, 1 USD
// const charge = await client.createCharge(1 * 100, customer.id, 'Payment example','USD');

```

## Functions

| Name | Return Type | Arguments | Description |
| --- | --- | --- | --- |
| createToken | Promise |<ul><li>cardNumber: string</li> <li>expMonth: string</li><li>expYear: string</li><li>cvc: string</li></ul>| Create a new token (equivalent of a new card) |
| <strike>createCustomer</strike> | Promise |<ul><li>token: string</li><li>email: string</li></ul>| Create a new customer and add card (or  token) |
| <strike>getCustomer</strike> | Promise | customerId: string | Retrieve customer by its id |
| <strike>createCharge</strike> | Promise |<ul><li>amount: number</li><li>customer: string</li><li>description: string</li><li>currency: string = 'eur'</li></ul>| Create a new charge |
| <strike>refundCharge</strike> | Promise | chargeId: string | Refund a previous charge |
| <strike>addCardToCustomer</strike> | Promise | <ul><li>token: string</li><li> customerId: string</li><ul> | Add a new card to a customer |
| <strike>destroyCardOfCustomer</strike> | Promise |<ul><li>cardId: string</li><li>customerId: string</li></ul> | Delete a card from a customer |
| <strike>createSubscription</strike> | Promise |<ul><li>customerId: string</li><li>plan: string</li></ul> | Subscribes a customer to a subscription plan |
| <strike>retrieveSubscription</strike> | Promise |<ul><li>subscriptionId: string</li></ul> | Retrieve the data of a subscription |

## Platform support
* `> Android 4.4` see https://github.com/xcarpentier/react-native-stripe-api/issues/5

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.
- [@franrios](mailto:fcojriosbello@gmail.com)

  PRs are welcome !

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-stripe-api/issues/new)

> made with ♥

