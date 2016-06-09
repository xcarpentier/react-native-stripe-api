# react-native-stripe-api

[![npm version](http://img.shields.io/npm/dm/react-native-stripe-api.svg?style=flat-square)](https://npmjs.org/package/react-native-stripe-api "View this project on npm")

The best Stripe library for React Native.

### Installation
```bash
$ npm i react-native-stripe-api --save
```
### Basic Usage
- Install `react-native` first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit `myproject/index.ios.js`, like this:

```jsx

```

## Setup

### Stripe API

This lib need a webhook url, details here : https://api.slack.com/incoming-webhooks.
```JavaScript
const webhookURL = '<your webhook URL provided by Slack, ie. Incoming WebHooks>'
const Slack = new Slack(webhookURL)
```
### Example

Just provide a file name env.js at root of the example project, see the example/env.example.js file.

## Payload object

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| channel | string | '#general' | The channel where you will post a message |
| username | string | 'bot' | The username you will use to post the message  |
| text | string | 'text is empty' | The most important part, the message you will send |
| 'icon_emoji' | string | ':iphone:' | The icon emoji with your message |

## FAQ
### Is it supported and tested both on android and iOS?
YES

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

  PRs are welcome !

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-stripe-api/issues/new)

> made with ♥
