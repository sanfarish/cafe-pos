import axios from "axios"

async function getAll() {
    const url = import.meta.env.VITE_BASE_URL
    if (!url) {
        console.error("no link to fetch (.env)")
        return { res: { data: [] } }
    }
    const res = await axios.get(url + "/categories")
    return res
}

const categories = { getAll }

export default categories
