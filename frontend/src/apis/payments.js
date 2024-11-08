import axios from "axios"

async function getAll() {
    const url = import.meta.env.VITE_BASE_URL
    if (!url) {
        console.error("no link to fetch (.env)")
        return { res: { data: [] } }
    }
    const res = await axios.get(url + "/payments")
    return res
}

const payments = { getAll }

export default payments
