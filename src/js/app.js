;(() => {
	const btnMenu = document.querySelector('#btn-menu')
	const body = document.querySelector('body')
	const menu = document.querySelector('ul')

	const icon = {
		true: 'menu',
		false: 'close',
	}

	let state = true
	btnMenu.addEventListener('click', () => {
		state = !state
		btnMenu.firstElementChild.setAttribute('name', icon[state])
		if (!state) {
			menu.style.display = 'inherit'
			menu.style.position = 'absolute'
			menu.style.top = '0'
			menu.style.left = '0'
			menu.style.right = '0'
			body.style.overflow = 'hidden'
		} else {
			menu.style.display = 'none'
			body.style.overflow = 'initial'
		}
	})
})()
