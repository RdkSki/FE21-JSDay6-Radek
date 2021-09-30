let mydata = JSON.parse(books);
console.log(mydata);

for (let val of mydata){
    document.getElementById("results").innerHTML += `<p>title: ${val.title}</p>
    <p>author: ${val.author}</p>
    <img src="${val.img}" width="120"><hr>`;
    if (val.read == "true"){
        document.getElementById("results").style.background.green;
    }else{
        document.getElementById("results").style.background.red;
    }
}

localStorage.setItem("books", JSON.stringify(mydata));

localStorage.getItem(JSON.parse(mydata));