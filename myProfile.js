//Creating and declaring variables
let container = document.createElement("div");
container.setAttribute("class", "card-group");
container.setAttribute("class", "row row-cols-1 row-cols-md-2 g-4")
// container.innerHTML="<p>Personal Profile</p>";
let profPic = document.createElement("img");
let hobbiesPara = document.createElement("ul");
let profName = document.createElement("p");
let profCareer = document.createElement("p");

//Function for the image
function imageStyle(){
   profPic.src="images/mypic.png";
   profPic.style.border="1px solid black";
    profPic.style.position="left";
    profPic.style.width="120px";
    profPic.style.height="182px";
    profName.style.marginTop = "20px";
    
}
imageStyle();

//Function for the name paragraph
let myName = "P.S";
function namePara() {
    profName.innerHTML = myName;
    profName.style.textAlign = "right"; 
    profPic.style.borderRadius="10px";
    profName.style.position="right";
    profName.style.paddingLeft="10px";
 profName.style.marginTop = "20px";
}
namePara();

//Function for the career paragraph

let career = "Web Developer";
function careerPara() {
    profCareer.innerHTML = career;
    profCareer.style.textAlign = "right"; 
    profCareer.style.borderRadius="10px";
    profCareer.style.position="right";
    profCareer.style.paddingLeft="10px";
}
careerPara();


//Function for hobbies
const hobby = ["Taking nature walks", "Designing"]
function hobbies() {
    hobbiesPara.style.border = "1px solid black";
    hobbiesPara.style.borderRadius="10px";
    hobbiesPara.innerHTML="<h4>Hobbies list</h4>";
    hobbiesPara.textAlign="center";
    hobbiesPara.style.background="lightblue"
       for(i=0; i<=hobby.length-1; i++){
        let li = document.createElement("li"); // create li element.
        li.innerHTML=hobby[i];// assigning text to li using array value.
        li.setAttribute("style", "display: list-item")  // set the bullets.
        hobbiesPara.appendChild(li);  // append li to ul.
    }
}
hobbies();

//Function for the container
function containerStyle() {
    container.style.display = "grid";
    container.style.border = "2px solid black";
    container.style.overflow = "auto"
    container.style.padding = "10px";
    container.style.borderRadius="5px";
    container.style.maxWidth="300px";
    container.style.width="18rem"
    container.style.margin="auto";
    container.style.textAlign="center";
    container.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2);"
    // container.style.height="50%";
    // container.style.left="0";

}
containerStyle();

//Appending elements
container.appendChild(profName);
container.appendChild( profCareer);
container.appendChild(profPic);
container.appendChild(hobbiesPara);

document.body.appendChild(container);