const staticServerUri = process.env.REACT_APP_PATH || "";

export const convertUrl = (path) => staticServerUri + path;