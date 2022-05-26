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

const draw = (data) => {
    const fetchapi = document.getElementById('fetchapi');
    data.forEach(element => {
        const divNews = document.createElement('div');
        divNews.classList.add('card', 'w-75', 'border-0');
        divNews.innerHTML = `
            <img src="${element.urlToImage}" onclick="imageClick('${element.url}')" class="card-img-top" alt="${element.title}">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.content}</p>
            </div>
        `;
        fetchapi.appendChild(divNews);
    });
    const boxes = [...document.querySelectorAll(".card")];
    for (let i = 0; i < 4; i++) {
        const box = boxes[i];
        box.style.display = "block";
    }
}
$(function () {
    //$(".grd-box").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".card:hidden").slice(0, 4).slideDown();
        if ($(".card:hidden").length == 0) {
            $("#load").fadeOut('slow');
            $('#loadmore').replaceWith("<p class='p'>No More</p>");
        }
    });
});
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


//jquery section

(function($) {
    var $window = $(window),
        $navitemaster = $('#navitem-master'),
        $circlestate  = $('#circlestate');

    function resize() {
        if ($window.width() >= 990) {
            return $navitemaster.addClass('ml-auto'), $circlestate.addClass('ms-auto');
        }

        $navitemaster.removeClass('ml-auto');
        $circlestate.removeClass('ms-auto');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);