//File Name: Habit.js
//Author: Kyle Carlton Larson 12-1-2020
//Purpose: to provide functionality to the qsr project
const headerdiv = document.getElementById('headerDiv');
document.getElementById('headerImg').src = "IMG-0344.JPG";
var j = 0;
number_of_images =3;
function changeImage() {
	if(j%number_of_images==0){
		document.getElementById('headerImg').src = "IMG-0140.JPG";
	}
	else if(j%number_of_images==1){
		document.getElementById('headerImg').src = "IMG-0344.JPG";
	}
	else{
		document.getElementById('headerImg').src = "IMG-0437.JPG";
	}
	j++;
	}
headerdiv.addEventListener("click", changeImage);

