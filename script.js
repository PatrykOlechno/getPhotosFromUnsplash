let searchBtn = document.getElementById("searchBtn");
let imageDiv = document.getElementById("image-div");
let form = document.getElementsByClassName("form");
let main = document.getElementById("main");
let bother = document.getElementById("bother");

searchBtn.addEventListener("click", getPhoto);
randomBtn.addEventListener("click", getRandomphoto);
bother.addEventListener("click", dontBotherMe);

function getPhoto(number){
  let search = document.getElementById("search").value;
  fetch('https://api.unsplash.com/search/photos?per_page='
        + number +
        '&content_filter=high&query=' + search +
        '&client_id=2Or3K8BlX46srl3fw9lBP_hE_0DuWzSLuR1B2_Ij7Ks')

        .then(function (response) {
           return response.json();
        })
        .then(function(result){
          appendImg(result);
        })
        .catch(error => console.log(error));

        function appendImg(result)  {
          imageDiv.innerHTML = "";
          console.log(result)
            result.results.forEach(img => {
              let div = document.createElement("div");
              div.innerHTML = `
                      <p class="description">"${img.description}"</p>
                      <img src="${img.urls.regular}" height="auto">
                      <a href="${img.links.html}" target="_blank"><p class="info">${img.user.name} | Unsplash</p></a>
                       `;
              imageDiv.appendChild(div);
            })
          }
      }

function getRandomphoto(){
  fetch('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=2Or3K8BlX46srl3fw9lBP_hE_0DuWzSLuR1B2_Ij7Ks')

  .then(response => response.json())
  .then(result => {
              console.log(result);
    imageDiv.innerHTML = `
                            <p class="description">"${result.description}"</p>
                            <img src="${result.urls.regular}" height="auto">
                            <a href="${result.links.html}" target="_blank"><p class="info">${result.user.name} | Unsplash</p></a>`;
  })
  .catch(error => console.log(error));
}

function dontBotherMe(){
  form.className = "form-transformed";
  if (form.className ==="form-transformed"){
    form.className = "form-def";
  }
}
