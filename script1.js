let mydata = JSON.parse(employees);
console.table(mydata);

document.getElementById("results").innerHTML = `<table class="table table-stripped table-hover">
<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Salary</th>
    </tr>

    </thead>
    </table>`;


    // creating a table out of json array:

    // function build(target, data, columns) {
    //     var head = '', rows = '';
    //     for (int j = 0; j < columns.length; j++) {
    
    //         var cols = '';
    //         for (int i = 0; i < data.length; i++) {
    //             cols += '<td>'+data[i][columns[j]]+'</td>';
    //         }
    
    //         head += '<th>'+columns[j]+'</th>';
    //         rows += '<tr>'+cols+'</tr>';
    //     }
    
    //     $(target).html(
    //         '<table>'+
    //             '<thead>'+head+'</thead>'+
    //             '<tbody>'+rows+'</tbody>'+
    //         '</table>'
    //     );
    // }

    // var data = [
    //     {
    //       "TITLE":"Empire Burlesque",
    //       "ARTIST":"Bob Dylan",
    //       "COUNTRY":"USA",
    //       "COMPANY":"Columbia",
    //       "PRICE":"10.90",
    //       "YEAR":"1985"
    //    },{
    //       "TITLE":"Picture book",
    //       "ARTIST":"Simply Red",
    //       "COUNTRY":"EU",
    //       "COMPANY":"Elektra",
    //       "PRICE":"7.20",
    //       "YEAR":"1985"
    //    }
    //  ]
    
    //  build('#mycontainer', data, ['TITLE', 'ARTIST', 'YEAR']);
    
//     RESULT:
//     <div id="mycontainer">
//     <table>
//         <thead>
//             <th>TITLE</th>
//             <th>ARTIST</th>
//             <th>YEAR</th>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Empire Burlesque</td>
//                 <td>Bob Dylan</td>
//                 <td>1985</td>
//             </tr>
//             <tr>
//                 <td>Picture book</td>
//                 <td>Simply Red</td>
//                 <td>1985</td>
//             </tr>
//         </tbody>
//     </table>
// </div>