// default exported value can be imported with any name
import val, { a, b, c } from './module2.mjs'; // ✅
console.log(a);
console.log(b);
console.log(c);
console.log(val);

// ------------------------------
// import val1 from './module2.mjs';   // ✅
// console.log(val1);

// ------------------------------
// import val1, {a1, b1} from './module2.mjs';     // ❌
// console.log(a1);
// console.log(b1);
// console.log(val1);
