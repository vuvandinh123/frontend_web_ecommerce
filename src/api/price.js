import axios from "axios";

export default function getExchangeRates(base){
  try {
    axios.get(`https://v6.exchangerate-api.com/v6/459b73f1c0b39606f618cd1a/latest/${base}`).then((response) => {
      const data = response.data;
      return data
    })
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
  }
}


