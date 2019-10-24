import axios from 'axios';

async function fetchEnergyData() {
    try {
        const res = await axios.get(`https://api.carbonintensity.org.uk/generation`);
        return res.data;
    } catch (thrown) {
        console.log('Request error', thrown.message);
    }
}

export { fetchEnergyData };