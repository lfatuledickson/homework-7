const main = document.querySelector("main");


const foo = document.querySelector("#F");
foo.addEventListener("click", function(){
    const h3 = document.createElement("h3");
    h3.textContent = "Foo";
    main.appendChild(h3);
})


const bar = document.querySelector("#B");
bar.addEventListener("click", function() {
    const h3 = document.createElement("h3");
    h3.textContent = "Bar";
    main.appendChild(h3);
})



const fooBar = document.querySelector("#FB");
fooBar.addEventListener("click", function() {
    const h2 = document.createElement("h2");
    h2.textContent = "FooBar";
    main.appendChild(h2);
})





