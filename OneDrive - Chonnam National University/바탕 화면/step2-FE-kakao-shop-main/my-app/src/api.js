const intance = axios.create({
    baseURL:
        "",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
    }
})