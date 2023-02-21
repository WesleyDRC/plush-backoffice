import { api } from "../services/api";

class AxiosRepository {

	#axiosClient;

	constructor() {
		this.#axiosClient = api;
	}

	async findAllUsers() {
		return this.#axiosClient.get("/user")
	}

	async findAllProducts() {
		return this.#axiosClient.get("/products")
	}

	async deleteProduct(id) {
		return this.#axiosClient.delete(`/products/${id}`)
	}
}

export default new AxiosRepository()
