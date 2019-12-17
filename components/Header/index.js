// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const data = [
    {
    date: "SMARCH 28, 2019",
    title: "Lambda Times",
    temperature: "98°"
    }
]

function headerComponent(data) {
    //Define Elements
    const header = document.createElement("div");
    const headerDate = document.createElement("span");
    const headerTitle = document.createElement("h1");
    const headerTemperature = document.createElement("span");

    //Set Class Names
    header.classList.add("header");
    headerDate.classList.add("date");
    headerTemperature.classList.add("temp");

    //Setup Structure of Elements
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemperature);

    //Set Text Content
    headerDate.textContent = data.date;
    headerTitle.textContent = data.title;
    headerTemperature.textContent = data.temperature;

    return header;
}

const headerContent = document.querySelector(".header-container");
console.log(document.querySelector(".header-container"))
data.forEach(event => {
    headerContent.appendChild(headerComponent(event));
})


