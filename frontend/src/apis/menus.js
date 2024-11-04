import axios from "axios"

function getUrl() {
    if (!import.meta.env.VITE_BASE_URL) {
        console.info("running without environment variables")
        return "http://localhost:3001/api/v1"
    }
    return import.meta.env.VITE_BASE_URL
}

async function getMenus() {
    const url = getUrl()
    const res = await axios.get(url + "/menus")
    const data = res.data.map(item => {
        item.image = url + "/images/" + item.image
        return item
    })
    return data
}

export { getMenus }
