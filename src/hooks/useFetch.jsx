// import { useState, useEffect } from "react"
// import axios from "axios";

// function useFetch(url) {
//     const [payload, setPayload] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const callUrl = async () => {
//         try {
//             const { data } = await axios.get("/login");
//             setPayload(data);
//         } catch {
//             setError("something is worng!");
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         callUrl();
//     }, []);
//     return { payload, loading, error };
// }

// export default useFetch;