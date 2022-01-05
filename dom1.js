// const myEle = document.querySelector('.myEle');


eles = document.querySelectorAll(".myEle");

eles.forEach((ele, e) =>{
    ele.textContent = `Hello World ${e+1}`;

    console.log(ele.textContent);
})