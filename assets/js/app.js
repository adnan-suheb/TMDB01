

let cl = console.log;


cl(movieArray);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

let result1 = ``;

var postCard = document.getElementById('postCard');


for (let i = 0; i < movieArray.length; i++) {

    result1 += `   <div class="col-md-4">
    <div class="card mb-4">
        <figure class="movieCard mb-0">
            <img src="https://image.tmdb.org/t/p/w342${movieArray[i].poster_path}" alt="">
            <figcaption>
                <div class="ratingSection">
                    <div class="row">
                        <div class="col-10">
                        
                        <h4 class="movieName mb-0">${movieArray[i].title}
                        </h4>
                        
                        </div>

                        <div class="col-2">
                            <div class="rating text-center ">    
                            ${movieArray[i].vote_average >= 8 ? `<p class="bg-success">${movieArray[i].vote_average}</p>` :
                                movieArray[i].vote_average<= 7 && movieArray[i].vote_average>=5 ? `<p class="bg-warning">${movieArray[i].vote_average}</p>` : 
                                movieArray[i].vote_average<5 ? `<p class="bg-danger">${movieArray[i].vote_average}</p>`:`<p class="bg-warning">${movieArray[i].vote_average}</p>`}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overviewSection">
                    <h4>${movieArray[i].original_title}</h4>
                    <em>Overview</em>
                    <p>${movieArray[i].overview}</p>
                </div>
            </figcaption>
        </figure>

    </div>
</div>`


}

postCard.innerHTML = result1;
