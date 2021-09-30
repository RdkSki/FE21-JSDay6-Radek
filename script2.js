let mydata = JSON.parse(books);
console.log(mydata);

for (let val of mydata){
    document.getElementById("results").innerHTML += `<p>title: ${val.title}</p>
    <p>author: ${val.author}</p>
    <img src="${val.img}"><hr>`;
}