let mydata = JSON.parse(books);
console.log(mydata);

for (let val of mydata){
    
    if (val.read == "true"){
        document.getElementById("results").innerHTML += `<div style="background: green"><p>title: ${val.title}</p>
        <p>author: ${val.author}</p>
        <img src="${val.img}" width="120"><hr></div>`;
    }else{
        document.getElementById("results").innerHTML += `<div style="background: red"><p>title: ${val.title}</p>
        <p>author: ${val.author}</p>
        <img src="${val.img}" width="120"><hr></div>`;
    }
}

// localStorage.setItem("books", JSON.stringify(mydata));

// localStorage.getItem(JSON.parse(mydata));


// for (let x of playersAfterParse) {
//     console.log(Object.keys(x)[3])


//     if (x.gym == true) {
//         document.getElementById("result").innerHTML += `<div class="col-4" style="background: green">
//         <p>${x.name}</p>
//         <p>${x.age}</p>
//         <img src="${x.img}" width="300">
//     </div>`;
//     } else {
//         document.getElementById("result").innerHTML += `<div class="col-4" style="background: red">
//         <p>${x.name}</p>
//         <p>${x.age}</p>
//         <img src="${x.img}" width="300">
//     </div>`;

//     }

// }