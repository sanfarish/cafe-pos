import axios from "axios"

async function getMenus() {
    // const urlDev = "http://localhost:5173/api/v1/menus"
    const urlProd = "https://cafepos.farishasan.web.id/api/v1/menus"
    const res = await axios.get(urlProd)
    return res.data
}

export { getMenus }
