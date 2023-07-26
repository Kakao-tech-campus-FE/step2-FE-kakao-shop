import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  }
});

export const loginApi = async (data) => {
  const {email, password} = data;
  try {
    const response = await instance.post("/login", {
      email,
      password
    })
    return response;
  } catch (error) {
    throw error;
  }
};

export const checkDuplicateEmail = ({email}) => {
  return instance.post("/check", {
    email
  });
};

export const register = async (data) => {
  const {email, password, username} = data;
  try {
    const response = await instance.post("/join", {
      email,
      password,
      username
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const getProducts = async (index) => {
  const response = await instance.get(`/products?page=${index}`);
  return response;
};

export const getIdProduct = async (id) => {
  try {
    const response = await instance.get(`/products/${id}`, {
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const addCart = async (data) => {
  try {
    const userAuthToken = JSON.parse(localStorage.getItem("userInfo")).token;
    const response =  await instance.post('carts/add', data, {
      headers: {
        Authorization: userAuthToken
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCart = () => {
    const userAuthToken = JSON.parse(localStorage.getItem("userInfo"))?.token;
    return instance.get('carts', {
      headers: {
        Authorization: userAuthToken
      }
    });
};

export const modifyCart = async (data) => {
  try {
    const userAuthToken = JSON.parse(localStorage.getItem("userInfo")).token;
    const response = await instance.post('carts/update', data, {
      headers: {
        Authorization: userAuthToken
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//주문하기 
export const orderProducts = () => {
  const userAuthToken = JSON.parse(localStorage.getItem("userInfo")).token;

  return instance.post('orders/save', null ,{
    headers: {
      Authorization: userAuthToken
    }
  });
}

export const getOrderById = (id) => {
  const userAuthToken = JSON.parse(localStorage.getItem("userInfo")).token;
  return instance.get(`orders/${id}`, {
    headers: {
      Authorization: userAuthToken
    }
  });
}