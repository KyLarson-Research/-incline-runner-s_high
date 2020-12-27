//File Name: Habit.js
//Author: Kyle Carlton Larson 12-1-2020
//Purpose: to provide functionality to the qsr project
const headerdiv = document.getElementById('headerDiv');
document.getElementById('headerImg').src = "20170702_080422.JPG";
var j = 0;
number_of_images =3;
function changeImage() {
	if(j%number_of_images==0){
		document.getElementById('headerImg').src = "20160403_075821.JPG";
	}
	else if(j%number_of_images==1){
		document.getElementById('headerImg').src = "20160416_064344.JPG";
	}
	else{
		document.getElementById('headerImg').src = "20170702_080422.JPG";
	}
	j++;
	}
headerdiv.addEventListener("click", changeImage);

