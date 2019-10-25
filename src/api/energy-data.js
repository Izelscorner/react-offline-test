import axios from 'axios';

// Asynchronous fetch data from the API.
async function fetchEnergyData() {
    try {
        const res = await axios.get(`https://api.carbonintensity.org.uk/generation`);
        return res.data;
        // Testing exception.
        // throw new Exception();
    } catch (thrown) {
        console.log('Request error', thrown.message);
    }
}

export { fetchEnergyData };