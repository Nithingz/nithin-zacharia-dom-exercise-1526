let tagline = document.getElementById('tag-line');
console.log(tagline);




let headings = document.querySelectorAll('.bg-main-content h2');
console.log(headings);



let collect = headings.innerText;
console.log(collect);


for(let i = 0; i < headings.length; i++){
	collect = collect + headings[i].innerText + "\n";
	
}

alert(collect);




// let boxes = document.getElementsByClassName('box');

// let collct = document.querySelectorAll('.bg-main-content box[12]');
// console.log(collct);

var boxes = document.querySelector(' .bg-main-content .box');
var boxes = document.querySelectorAll('.box')[13].innerText;

alert(boxes);

