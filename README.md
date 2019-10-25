# React Offline Test

## Example usage of Energy Distribution Grid Component 

```
<EnergyDistGrid getData={fetchEnergyData} />
```

## Component Props 

**getData:** Function type  

Example
```
async function fetchEnergyData() {
    try {
        const res = await axios.get(`https://api.carbonintensity.org.uk/generation`);
        return res.data;
    } catch (thrown) {
        console.log('Request error', thrown.message);
    }
}

```

## Available Scripts

In the project directory, you can run:

### `npm install`

to install dependencies.

### `npm start`

to start the applicationn

### `npm test`

to test the application 


## Some Notes

- Changed jsx file type to tsx to use typescript, application is written in typescript.  
- Used hooks for setting state and componentDidMount cycle , this can also be achived with class components.  
- For testing added react-testing-libray accompanied with Jest.  
- For charting used very simple gauge chart library ("react-gauge-chart") derived from d3.   

