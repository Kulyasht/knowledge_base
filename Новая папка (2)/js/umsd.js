const button = document.querySelector('#button')
const menu = document.querySelector('#menu')

button.addEventListener('click', () => {
	if (menu.classList.contains('disp') == true) {
		menu.classList.remove('disp')
	} else {
		menu.classList.add('disp')
	}
})

document.querySelectorAll('.content__btn').forEach(button => {
	button.addEventListener('click', () => {
		const accordionContent = button.nextElementSibling

		button.classList.toggle('content__btn--active')

		if (button.classList.contains('content__btn--active')) {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
		} else {
			accordionContent.style.maxHeight = 0
		}
	})
})
