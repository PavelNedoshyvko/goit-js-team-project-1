import { Notify } from "notiflix";

function notifyFillInFieldWarning() {
	Notify.warning(
		"Please fill in the search field.",
		{
		width: '400px',
		fontSize: '26px',
		position: 'center-center',
	});
};

function notifyNoImagesWarning() {
	Notify.warning(
		"Sorry, there are no images matching your search query. Please try again.",
		{
		width: '700px',
		fontSize: '26px',
		position: 'center-center',
	});
};

function notifyNothingFound() {
	Notify.info(
		"Oops... Nothing found",
		{
		width: '750px',
		fontSize: '26px',
		position: 'center-center',
	});
};

export {
	notifyFillInFieldWarning,
	notifyNoImagesWarning,
	notifyNothingFound,
};