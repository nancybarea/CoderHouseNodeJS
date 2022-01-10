//expresion regular para validar email.
const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
let mail = "nancybarea@gmail.com.ar";
console.log( expresionRegular.test(mail) );