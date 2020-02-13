import axios from 'axios';
import { BASE_URL } from './../constants'


function getToken() {
    return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append('grant_type', 'client_credentials');
        data.append('scope', 'basic');
        axios.request({
            method: "POST",
            baseURL: 'https://oauth.fatsecret.com',
            url: 'connect/token',
            headers: {
                "Content-Type": "multipart/form-data"
            },
            auth: {
                username: '9d39fce5a5ba47a2beccfe76aa118adb',
                password: 'b60771f402da4d4e91265d2b7ee4ade3'
            },
            data: data
        }).then(res => {
            console.log("res", res.data.access_token)
            resolve({ token: `Bearer ${res.data.access_token}` })
        }).catch(err => reject(err))
    })

}
function getFoodData(searchText, pageNo, token) {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            baseURL: BASE_URL,
            url: 'rest/server.api',
            params: {
                method: "foods.search",
                format: "json",
                search_expression: searchText,
                page_number: pageNo,
                max_results: 40

            },
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        }).then(res => {
            resolve(res.data.foods.food)
        }).catch(err => reject(err))
    })
}

export { getToken, getFoodData }