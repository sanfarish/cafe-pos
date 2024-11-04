import axios from "axios"

async function getMenus() {
    // const urlDev = "http://localhost:3001/api/v1"
    const urlProd = "https://cafepos.farishasan.web.id/api/v1"
    // const res = await axios.get(urlDev + "/menus")
    const res = await axios.get(urlProd + "/menus")
    const data = res.data.map(item => {
        // item.image = urlDev + "/images/" + item.image
        item.image = urlProd + "/images/" + item.image
        return item
    })
    return data
}

export { getMenus }
