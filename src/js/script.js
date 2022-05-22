//Espera que el documento este listo para realizar la request
window.onload = function () {
    const api_url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            draw(data.articles)
        })
        .catch(error => console.error(error))
}

const imageClick = (url) => {
    window.location = url;
}

const draw = (data) => {
    const fetchapi = document.getElementById('fetchapi');
    data.forEach(element => {
        const divNews = document.createElement('div');
        divNews.classList.add('card', 'w-75', 'border-0');
        divNews.innerHTML = `
            <img src="${element.urlToImage}" onclick="imageClick('${element.url}')" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">Sample text.</p>
            </div>
        `;
        fetchapi.appendChild(divNews);
    });
}


const submitted = () => {
    const Fname = document.getElementById('inputFname').value;
    const Lname = document.getElementById('inputLname').value;
    const Email = document.getElementById('inputEmail').value;
    const Pnumber = document.getElementById('inputPnumber').value;
    const Comment = document.getElementById('inputComments').value;

    !Fname || !Lname || !Email || !Pnumber || !Comment ? alert('Please fill-in all the fields'): alert
    (
        `
        Name: ${Fname} ${Lname}
        Email: ${Email}
        Phone Number: ${Pnumber}
        Comment: ${Comment}
        `
    );
    return false;
}