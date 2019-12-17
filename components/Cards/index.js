// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entryPoint2 = document.querySelector(".cards-container")
console.log(entryPoint2);

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log("data: ", response);
    const obj = response.data.articles
    console.log("object data:", obj);

    Object.values(obj).forEach(item => {
        console.log(item)
        // const newCard = cardCreator(item)
        // entryPoint2.appendChild(newCard);
        item.forEach(item => {
        let newCard = cardCreator(item)
        entryPoint2.appendChild(newCard); 
        })
    })
})
.catch(error => {
    console.log("The data was not returned", error);
  });

function cardCreator(argument) {
    //Create Elements
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    const writerName = document.createElement("span");

    //Create Class List
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imageContainer.classList.add("img-container");

    //Append Children
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(writerName);

    //Add Text Content
    headline.textContent = argument.headline
    image.src = argument.authorPhoto
    writerName.textContent = `By: ${argument.authorName}`

    return card;
}