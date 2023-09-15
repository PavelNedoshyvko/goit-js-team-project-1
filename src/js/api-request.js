import axios from "axios";
export { serviceAllRecipes };
axios.defaults.baseURL = "https://tasty-treats-backend.p.goit.global/api/recipes";


async function serviceAllRecipes(page = 1, limit = 288) {
	const params = new URLSearchParams({
		title: '',
		category: '',
		area: '',
		ingredient: '',
		time: '',
		page,
		limit,
	});
	const { data } = await axios(`?${params}`);
	return data;
}