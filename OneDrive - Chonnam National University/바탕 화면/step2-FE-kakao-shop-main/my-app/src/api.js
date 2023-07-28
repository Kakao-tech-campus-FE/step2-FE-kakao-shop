const intance = axios.create({
    baseURL:
        "http://localhost:3000/",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
    }
})