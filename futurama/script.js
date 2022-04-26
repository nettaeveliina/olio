fetch('http://futuramaapi.herokuapp.com/api/quotes')
.then(response => response.json())
.then(data => {

    let ul = document.createElement('ul');

    data.forEach(quote => {

        let li = document.createElement('li');

    li.innerHTML = quote.quote;

    ul.appendChild(li);
      
    });
   document.getElementById('print-here').appendChild(ul);
});