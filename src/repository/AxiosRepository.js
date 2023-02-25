import { api } from "../services/api";

class AxiosRepository {

	#axiosClient;

	constructor() {
		this.#axiosClient = api;
	}

	async findAllUsers() {
		return this.#axiosClient.get("/user")
	}

	async createUser({email, name, password}) {
		return this.#axiosClient.post("/auth/signup", {
			email,
			name,
			password
		})
	}

	async updateUser(id, name, email) {
		return this.#axiosClient.patch(`/user/updateUser/${id}`, {
			name,
			email
		})
	}

	async findAllProducts() {
		return this.#axiosClient.get("/products")
	}

	async createProduct({ imageUrl, name, description, color, price, category, inventory, discount }) {
		return this.#axiosClient.post('/products', {
			imageUrl, name, description, color, price, category, inventory, discount
		})
	}

	async updateProduct({ id, imageUrl, name, description, color, price, category, inventory, discount}) {
		return this.#axiosClient.patch(`/products/${id}`, {
			imageUrl, name, description, color, price, category, inventory, discount
		})
	}

	async deleteProduct(id) {
		return this.#axiosClient.delete(`/products/${id}`)
	}


}

export default new AxiosRepository()
