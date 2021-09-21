// Returns a value between 0 and 23.
let timeOfDay = (() => new Date().getHours())();

// These variables store image URLs. Assign them to `imageOne` and `imageTwo`.
const morning1 =
  "https://tf-assets-prod.s3.amazonaws.com/tf-curric/diego-music/morning1.jpg";
const morning2 =
  "https://tf-assets-prod.s3.amazonaws.com/tf-curric/diego-music/morning2.jpg";
const day1 =
  "https://tf-assets-prod.s3.amazonaws.com/tf-curric/diego-music/day1.jpg";
const day2 =
  "https://tf-assets-prod.s3.amazonaws.com/tf-curric/diego-music/day2.jpg";
const night1 =
  "https://tf-assets-prod.s3.amazonaws.com/tf-curric/diego-music/night1.jpg";
const night2 =
  "https://tf-assets-prod.s3.amazonaws.com/tf-curric/diego-music/night2.jpg";
let imageOne = "";
let imageTwo = "";

// Write your code here!
if (timeOfDay < 12) {
  imageOne = morning1;
  imageTwo = morning2;
} else if (timeOfDay < 18) {
  imageOne = day1;
  imageTwo = day2;
} else {
  imageOne = night1;
  imageTwo = night2;
}

let timeImage1 = document.getElementById("picture-one");
let timeImage2 = document.getElementById("picture-two");
console.log("sadsadasdas", timeImage1);
timeImage1.src = imageOne;
timeImage2.src = imageTwo;
