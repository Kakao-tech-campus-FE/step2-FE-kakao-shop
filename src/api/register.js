import instance from "./instance";

const postCheck = (props) => {
  instance
    .post(`/check`, {
      email: props.email,
    })
    .then((response) => {
      console.log(response);
    });
};

export default postCheck;
