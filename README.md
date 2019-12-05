# prettier-config

This is my personal configuration for the [Prettier](https://prettier.io) code formatter.

## Installation

```sh
yarn add --dev @samuelmeuli/prettier-config
```

## Usage

Add the following keys to your `package.json` file:

```js
{
  // ...
  "scripts": {
    "format": "prettier --write '**/*.{css,html,js,json,jsx,less,md,scss,ts,tsx,vue,yaml,yml}'"
  },
  "prettier": "@samuelmeuli/prettier-config"
}
```

You can now run `yarn format` to format your code.
