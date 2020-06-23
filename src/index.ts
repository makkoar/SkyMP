const config =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "Debug"
    : "Release";
console.log(`Using scamp_native config ${config}`);
const scampNative = require(`../build/${config}/scamp_native.node`);

import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

console.log(scampNative.hello());

(async () => {
  while (1) {
    await new Promise(setImmediate);
  }
})();

process.on("unhandledRejection", console.error);
