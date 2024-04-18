const button = document.querySelector('#button')
const menu = document.querySelector('#menu')

button.addEventListener('click', () => {
	if (menu.classList.contains('disp') == true) {
		menu.classList.remove('disp')
	} else {
		menu.classList.add('disp')
	}
})
