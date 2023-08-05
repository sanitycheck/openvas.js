<h1 align="center">openvas.js by Sanitycheck</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> openvas.js is library to parse OpenVas output files into javascript. Heavily inspired by turingsecure's <a href="https://github.com/turingsecure/burp.js" target="_blank">burp.js</a> and <a href="https://github.com/turingsecure/nessus.js" target="_blank">nessus.js</a> libraries.

## Installation

Install the `@sanitycheck0x00/openvas.js` package:

```sh
# use yarn or npm
npm install @sanitycheck0x00/openvas.js
```

Import the library to use it in your code:

```js
import { OpenVasParser } from "@sanitycheck0x00/openvas.js";
```

## Usage

To parse an XML file, you just have to execute the imported function.

```js
const xml = "openvas xml";
const scan = OpenVasParser(xml);
console.dir(scan, { depth: null });
```

## Contributing

Contributions, issues and feature requests are welcome.
Feel free to check out the [issues page](https://github.com/sanitycheck/openvas.js/issues) if you want to contribute.

## License

This project is [MIT](LICENSE) licensed.
