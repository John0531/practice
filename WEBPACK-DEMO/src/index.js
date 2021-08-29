let a = 1;
let b = 2;
console.log("hello");
function hello(a,b){
    console.log(a+b)
}
hello(1,2)

import c from "./c.js";
console.log(c)

import css from "./style.scss";

import axios from "axios"
axios.get("https://hexschool.github.io/ajaxHomework/data.json").then(function(response){
  console.log(response);
})