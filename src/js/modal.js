document.addEventListener('DOMContentLoaded', function () {
	
	const modalButtons = document.querySelectorAll('.js-open-modal');
	const overlay = document.querySelector('.js-overlay-modal');
	const closeButtons = document.querySelectorAll('.js-modal-close');
	
	modalButtons.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			const modalId = this.getAttribute('data-modal');
			const modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
			modalElem.classList.add('active');
			overlay.classList.add('active');
		});
	});
	
	closeButtons.forEach(function (item) {
		item.addEventListener('click', function (e) {
			const parentModal = this.closest('.modal');
			parentModal.classList.remove('active');
			overlay.classList.remove('active');
		});
	});
	
	document.body.addEventListener('keyup', function (e) {
		if (e.code === "Escape") {
			document.querySelector('.modal.active').classList.remove('active');
			document.querySelector('.overlay').classList.remove('active');
		};
	}, false);
	
	overlay.addEventListener('click', function () {
		document.querySelector('.modal.active').classList.remove('active');
		this.classList.remove('active');
	});
}); 