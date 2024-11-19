import { useEffect, useState } from 'react'
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export default function useAPI({ method, url }) {

    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios[method](url)
                setResponse(res.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [method, url])

  return { response, error, loading }
}
