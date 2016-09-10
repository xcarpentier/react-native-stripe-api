# react-native-stripe-api

[![Downloads](https://img.shields.io/npm/dm/react-native-stripe-api.svg)](https://www.npmjs.com/package/react-native-stripe-api)
[![Circle CI](https://circleci.com/gh/xcarpentier/react-native-stripe-api.svg?style=svg)](https://circleci.com/gh/xcarpentier/react-native-stripe-api)

The best Stripe library for React Native.

### Installation
```bash
$ npm i react-native-stripe-api --save
```

## Roadmap
- include a payment form component
- include react-native-awesome-card-io

## Setup

### Stripe API

This lib need a Stripe API Key
```JavaScript
const apiKey = '<your Stripe API Key>';
const Stripe = new Stripe(apiKey);
```

## Functions

| Name | Return Type | Arguments | Description |
| --- | --- | --- | --- |
| createToken | Promise |<ul><li>cardNumber: string</li> <li>expMonth: string</li><li>expYear: string</li><li>cvc: string</li></ul>| Create a new token (equivalent of a new card) |
| createCustomer | Promise |<ul><li>token: string</li><li>email: string</li></ul>| Create a new customer and add card (or  token) |
| getCustomer | Promise | customerId: string | Retrieve customer by its id |
| createCharge | Promise |<ul><li>amount: number</li><li>customer: string</li><li>description: string</li><li>currency: string = 'eur'</li></ul>| Create a new charge |
| refundCharge | Promise | chargeId: string | Refund a previous charge |
| addCardToCustomer | Promise | <ul><li>token: string</li><li> customerId: string</li><ul> | Add a new card to a customer |
| destroyCardOfCustomer | Promise |<ul><li>cardId: string</li><li>customerId: string</li></ul> | Delete a card from a customer |

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

  PRs are welcome !

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-stripe-api/issues/new)

> made with ♥
