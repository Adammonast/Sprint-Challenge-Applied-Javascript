// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPoint = document.querySelector(".tabs")
console.log(entryPoint);

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log("data: ", response);
    const tabInformation = response.data;

    const tabInfo = tabCreator(tabInformation)
    entryPoint.appendChild(tabInfo)
})
.catch(error => {
    console.log("The data was not returned", error);
  });


function tabCreator(argument) {
    const tab = document.createElement("div")
    tab.classList.add("tab");
    tab.textContent = argument.topics
    return tab
}