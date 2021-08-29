import data from "./export1.js";//?使用預設匯出匯入
console.log(data)

import {c,add} from "./export2.js";//?使用具名匯出匯入
console.log(c);
console.log(add(2,3));
