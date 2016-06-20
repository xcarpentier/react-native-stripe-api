# react-native-stripe-api

The best Stripe library for React Native.

### Installation
```bash
$ npm i react-native-stripe-api --save
```

## Setup

### Stripe API

This lib need a Stripe API Key
```JavaScript
const apiKey = '<your Stripe API Key>'
const Stripe = new Stripe(apiKey)
```

## Functions

| Name | Return Type | Arguments | Description |
| --- | --- | --- | --- |
| createToken | Promise | cardNumber: string, expMonth: string, expYear: string, cvc: string  | Create a new token (= new card) |
| createCustomer | Promise | token: string, email: string | Create a new customer and add card (= new token) |
| createCharge | Promise | amount: number, customer: string, description: string, currency: string = 'eur' | Create a new charge |
| refund | Promise | chargeId: string | Refund a previous charge |
| getCustomer | Promise | customerId: string | Retrieve customer by its id |
| addCardToCustomer | Promise | token: string, customerId: string | Add a new card to a customer |
| destroyCardOfCustomer | Promise | cardId: string, customerId: string | Delete a card from a customer |


## FAQ
### Is it supported and tested both on android and iOS?
YES

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

  PRs are welcome !

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-stripe-api/issues/new)

> made with ♥
