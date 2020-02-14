
/*Обрезание строк и многоточие*/
let blocks = document.querySelectorAll('.text__article'),
	clones = [],
	count = 0,
	texts = [];

for (let block of blocks) {
	texts.push(block.innerHTML);
	clones.push(document.createElement('div'));	
}

for (let clone of clones) {
 	clone.style.position = 'absolute';
  	clone.style.visibility = 'hidden';
	clone.style.width = blocks[count].clientWidth + 'px';
	clone.innerHTML = texts[count];
	document.body.appendChild(clone);		
 	count++;
 }

count = 0;
for (; count < texts.length; count++){
	let l = texts[count].length - 1;
	for (; l >= 0 && clones[count].clientHeight > blocks[count].clientHeight; --l) {
		l = l - 50;
   	 	clones[count].innerHTML = texts[count].substring(0, l) + ' ...';
	}	
	blocks[count].innerHTML = clones[count].innerHTML;
}

/*Смена цвета*/
let colors = ['red_bg', 'green_bg', 'yellow_bg'];

function ChangeColor(object) {
	let counter = object.getAttribute('counter');
	switch (parseInt(counter)) {
		case 0:
			object.setAttribute('counter', 1);
			object.classList.remove('red_bg', 'green_bg', 'yellow_bg');
			object.classList.toggle(colors[0]);
			break;
		case 1:
			object.setAttribute('counter', 2);
			object.classList.remove('red_bg', 'green_bg', 'yellow_bg');
			object.classList.toggle(colors[1])
			break;
		case 2:
			object.setAttribute('counter', 3);
			object.classList.remove('red_bg', 'green_bg', 'yellow_bg');
			object.classList.toggle(colors[2])
			break;
		case 3:
			object.setAttribute('counter', 0);
			object.classList.remove('red_bg', 'green_bg', 'yellow_bg');
			break;
	}
}

function SlideMenuAnimation(object) {
	document.querySelector('.container_slide').classList.toggle('container_slide_animation');
	document.querySelector('.slide__menu').classList.toggle('.slide__menu__animation');
	
}




  	