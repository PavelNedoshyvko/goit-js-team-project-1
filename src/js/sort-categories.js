export { getSortedCategories };

function getSortedCategories(arr){
	return arr.map(({ category }) => category)
		.filter((category, idx, arr) => arr.indexOf(category) === idx)
		.sort((a, b) => a.localeCompare(b))
};