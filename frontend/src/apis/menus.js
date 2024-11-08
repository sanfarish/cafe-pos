import axios from "axios"

async function getAll() {
    const url = import.meta.env.VITE_BASE_URL
    if (!url) {
        console.error("no link to fetch (.env)")
        return { res: { data: [] } }
    }
    const res = await axios.get(url + "/menus")
    return res
}

const menu = { getAll }

export default menu
