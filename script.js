const start = document.querySelector('.start');
const ball = document.querySelector('.ball');


start.addEventListener('click', ()=> {
	if (ball.classList.contains('active')) {
		ball.classList.remove('active')
		start.textContent = 'start'
		ball.style.animationPlayState = 'paused';
	} else {
		ball.classList.add('active')
		start.textContent = 'stop'
		ball.style.animationPlayState = 'running';
	}
});
