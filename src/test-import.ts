// This should work (named import from barrel)
import { throttle } from 'es-toolkit/compat';
console.log('Named import from barrel:', throttle);

// This should fail in ESM (default import from individual file)
import throttleDefault from 'es-toolkit/compat/throttle';
console.log('Default import from individual:', throttleDefault);

// Try to use them
const fn = throttle(() => console.log('test'), 100);
const fn2 = throttleDefault(() => console.log('test2'), 100);
