
var section = document.querySelector('section');

async function fetchUsers() {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    loopThroughResults(data)
}

fetchUsers();


function loopThroughResults(data) {
    const resultsContainer = document.querySelector("section");
    const results = data.results;
    for (let i = 0; i < data.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myH2.textContent = 'User ID: ' + data[i].id;
    myPara1.textContent = 'ID: ' + data[i].userId;
    myPara2.textContent = 'Title: ' + data[i].title;
    myPara3.textContent = 'Completed: ' + data[i].completed;
        
   

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    section.appendChild(myArticle);
  }
}