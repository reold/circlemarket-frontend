export const serverURL = "https://circlemarket.onrender.com"
export const apiURL = `${serverURL}/api`

export const server = {
    signup: async (username: string, email: string, password: string) => {
        const body = { username, email, password }

        let rawResp = await fetch(`${apiURL}/account/signup`, { method: "POST", body: JSON.stringify(body), headers: { "content-type": "application/json" } })

        return rawResp.json()
    },
    login: async (email: string, password: string) => {
        const body = { email, password }

        let rawResp = await fetch(`${apiURL}/account/login`, { method: "POST", body: JSON.stringify(body), headers: { "content-type": "application/json" } })

        return rawResp.json()
    },
    user: async (username: string) => {

        let rawResp = await fetch(`${apiURL}/account/@${username}`, { method: "GET" })

        return rawResp.json()
    },

}