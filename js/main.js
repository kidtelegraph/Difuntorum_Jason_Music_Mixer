console.log("JS file is connected")

(function(){
	"use strict";	
	console.log("fired");
})();

const b_marley = document.querySelector("#b_marley");
const f_mercury = document.querySelector("#f_mercury");
const j_hendrix = document.querySelector("#j_hendrix");
const j_lennon = document.querySelector("#j_lennon");
const k_cobain = document.querySelector("#k_cobain");
const r_smith = document.querySelector("#r_smith");

function logId() {
    console.log(this.id);
}

b_marley.addEventListener("click", logId);


//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/