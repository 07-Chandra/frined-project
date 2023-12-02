import { apiConnector } from "../apiConnector";
import { baseURL } from "../apis";

export async function getAllUsers() {
    try {
        const response = await apiConnector("GET", baseURL, { page: 1 }, null, {
            page: 1,
        });
        console.log("response", response);
    } catch (error) {
        console.log("get all users Error", error);
    }
}
