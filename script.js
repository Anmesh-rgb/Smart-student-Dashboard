// for input and display section for name and class.

let inpName = document.querySelector("#std_name");
let inpClass = document.querySelector("#std_class");
let save = document.querySelector(".save_btn")
let Name = document.querySelector("#d_name");
let Class = document.querySelector("#d_class");
let display = (nameVal,classVal) =>{
   
    Name.innerHTML = `${nameVal}`;
    Class.innerHTML = `${classVal}`;
}

save.addEventListener("click", () =>{

   let classVal = inpClass.value;
   let nameVal = inpName.value;

    if(classVal == ""){
        inpName.style.border = " 1px solid red";
    }
    if(nameVal == ""){
        inpClass.style.border = " 1px solid red";
    }
    else{
        inpName.style.border = " 1px solid black";
        inpClass.style.border = " 1px solid black";
        display(nameVal,classVal);
        inpName.value = "";
        inpClass.value = "";
    }
});

// starting subject and mark section.
let inpSub = document.querySelector("#sub-name");
let inpMark = document.querySelector("#sub-mark");
let addSub = document.querySelector("#sub-btn");
let displayres = document.querySelector("#result-btn");

let store = (subVal, markVal) =>{

    let sarr = [
        {}
    ]






}


addSub.addEventListener("click", () => {

    let subVal = inpSub.value;
    let markVal = inpMark.value;

    if(subVal == ""){
        inpSub.style.border = " 1px solid red";
    }
    if(markVal == ""){
        inpMark.style.border = " 1px solid red";
    }
    else{
        inpSub.style.border = " 1px solid black";
        inpMark.style.border = " 1px solid black";
        inpSub.value = "";
        inpMark.value = "";
    }





});







