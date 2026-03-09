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
let card7 = document.querySelector("#card7");
let displayres = document.querySelector("#result-btn");
let list = document.querySelector("#list");

 let arr = [];
let storedata = (subVal, markVal) =>{
    let data = {
        subject : subVal,
        mark : markVal
    };
    arr.push(data);
    displaySub(subVal,markVal);
    
};
let displaySub = (subVal,markVal) =>{
    if(arr.length){
        card7.style.display = "grid";
    };

        let li = document.createElement("li");
        li.textContent = subVal + "  :  " + markVal;
        list.appendChild(li);

};

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
        storedata(subVal,markVal);
        inpSub.value = "";
        inpMark.value = "";
    }


});

// displaying result section
let grade = document.querySelector("#grade");
let calGrade = (avg) =>{

    if(avg >=  90)
        grade.innerHTML = "Grade : A"
    else if (avg > 80 && avg <= 90)
        grade.innerHTML = "Grade : B+"
    else if (avg > 70 && avg <= 80)
        grade.innerHTML = "Grade : B"
    else if (avg > 60 && avg <= 70)
        grade.innerHTML = "Grade : C+"
    else if (avg > 50 && avg <= 60)
        grade.innerHTML = "Grade : C"
    else if (avg > 40 && avg <= 50)
        grade.innerHTML = "Grade : D+"
    else if (avg < 40)
        grade.innerHTML = "Grade : Fail";


};
let progress = document.querySelector("#progress-h4");
let prog = document.querySelector(".progress")

let prog_fn = (avg) =>{

    progress.innerHTML = `${avg}%`;
    prog.style.width = `${avg}%`
}


    let total = document.querySelector("#tmark");
    let average = document.querySelector("#amark")

displayres.addEventListener("click", () =>{
    let sum = 0;

    for(let i=0; i<arr.length ; i++){
        sum += Number(arr[i].mark);
    };
    total.innerHTML = `Total Mark : ${sum}`;

    avg = sum / arr.length;
    average.innerHTML = `Average : ${avg}`;
    calGrade(avg);
    prog_fn(avg);

});

// reset section
let reset = document.querySelector("#reset");

reset.addEventListener("click", () =>{

    
    Name.innerHTML = "";
    Class.innerHTML = "";

    arr.length = 0;
    average.innerHTML = `Average : 00`;
    total.innerHTML = `Total Mark : 00`;
    grade.innerHTML = "Grade : _";

    sum = 0;
    avg =0;

    progress.innerHTML = ``;
    prog.style.width = `0%`
    subVal = "";
    markVal = "";
    arr = [];
    list.innerHTML = "";

    Name.innerHTML = "";
    Class.innerHTML = "";
    card7.style.display = "none";

});

// starting Mode (dark and light mode section)
let mode = document.querySelectorAll(".mode");

mode.addEventListener("click", () =>{

    




});

