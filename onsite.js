//http://www.omdbapi.com/?apikey=f33c1400
let url = "http://www.omdbapi.com/?apikey=f33c1400";

let btn = document.getElementById("btn1");
let input = document.querySelector(".search");
btn.addEventListener("click", function () {
  getMovies();
});

function getMovies() {
  document.querySelector(".row").textContent = "";
  fetch(`http://www.omdbapi.com/?apikey=f33c1400&s=${input.value}`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      let movies = data.Search;

      for (i in movies) {
        let div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `  <div class="card" style="width: 18rem;">
            <img src="${movies[i].Poster}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title text-center">${movies[i].Title}</h5>
              <p class="card-text text-center">
               ${movies[i].Year} <br/>${movies[i].Type}
              </p>
              <a href="" type="button" class="btn btn-success watch"> Watch now</a>
            </div>
          </div>`;
        document.querySelector(".row").append(div);
      }
    })

    .catch((err) => console.log(err));
}
