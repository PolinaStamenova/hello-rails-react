// import axios from "axios";

// const ROOT_PATH = "api";
// const GREETINGS_PATH = `${ROOT_PATH}/greetings`;

// export const getRandomMessage = () => {
//   return axios.get(GREETINGS_PATH);
// };

export const getRandomMessage = async () => {
  const response = await fetch(`api/greetings`);
  return response.json();
};
