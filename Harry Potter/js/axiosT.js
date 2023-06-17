import { createCards} from "./cards.js";

const HARRY_URL = "https://hp-api.onrender.com/api/characters";

export const getAxiosData = async (characters = null) => {
  try {
    const { data } = await axios(HARRY_URL);
    createCards(data, characters);
  } catch (err) {
    console.error(err.message);
  }
};


