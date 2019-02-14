# xray-first-react

[![GitHub stars](https://img.shields.io/github/stars/codejamninja/xray-first-react.svg?style=social&label=Stars)](https://github.com/codejamninja/xray-first-react)

> build react applications using the xray first design approach

Please ★ this repo if you found it useful ★ ★ ★


## Features

* Automatically generates colors to differentiate sections
* Option to hide content to help zero in on styling
* Options to show labels of sections


## Demo

View live demo at [codejamninja.github.io/xray-first-react](https://codejamninja.github.io/xray-first-react/)


## Installation

```sh
npm install --save xray-first-react
```


## Dependencies

* [NodeJS](https://nodejs.org)


## Usage

```js
import React, { Component } from 'react';
import { XrayProvider, Xray } from 'xray-first-react';

const { env } = process;

export default class App extends Component {
  render() {
    return (
      <XrayProvider enabled={env.NODE_ENV === 'true'}>
        <Xray label="content">
          <div>
            Hello, world
          </div>
        </Xray>
      </XrayProvider>
    )
  }
}
```


## Support

Submit an [issue](https://github.com/codejamninja/xray-first-react/issues/new)


## Screenshots

[Contribute](https://github.com/codejamninja/xray-first-react/blob/master/CONTRIBUTING.md) a screenshot


## Contributing

Review the [guidelines for contributing](https://github.com/codejamninja/xray-first-react/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/codejamninja/xray-first-react/blob/master/LICENSE)

[Jam Risser](https://codejam.ninja) © 2018


## Changelog

Review the [changelog](https://github.com/codejamninja/xray-first-react/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://codejam.ninja) - Author


## Support on Liberapay

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://liberapay.com/codejamninja/donate) if you'd like to keep me going!

[![Liberapay receiving](https://img.shields.io/liberapay/receives/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
