let searchBtn = document.getElementById("searchBtn");
let main = document.getElementById('main')
let imageDiv = document.getElementById("image-div");
let description = document.getElementById("description");
let info = document.getElementsByClassName("info");

searchBtn.addEventListener("click", getPhoto);
randomBtn.addEventListener("click", getRandomphoto);

function getPhoto(){
  let search = document.getElementById("search").value;
  fetch('https://api.unsplash.com/search/photos?page=1&query='
        + search +
        '&client_id=2Or3K8BlX46srl3fw9lBP_hE_0DuWzSLuR1B2_Ij7Ks')

        .then(function (response) {
           return response.json();
        })
        .then(function(result){
          appendImg(result);
        })
        .catch(error => console.log(error));

        function appendImg(result)  {
          console.log(result)
            result.results.forEach(img =>{
            let image = document.createElement("img");
            image.src = img.urls.thumb;
            main.appendChild(image)
          })
        console.log("xd")
      }
}

function getRandomphoto(){
  fetch('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=2Or3K8BlX46srl3fw9lBP_hE_0DuWzSLuR1B2_Ij7Ks')

  .then(response => response.json())
  .then(result => {
    let image = result.urls.regular;
    description = result.description;
    imageDiv.innerHTML = `
                            <img src="${image}" height="auto">
                            <a href="${result.links.photos}"><p class="info">"${result.username} | Unsplash"</p></a>
                            <p class="description">"${description}"</p>`;
  })
  .catch(error => console.log(error));
}
