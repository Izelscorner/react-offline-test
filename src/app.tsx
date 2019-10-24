import React from 'react';
import EnergyDistGrid from './components/energy-dist/energy-dist-grid';
import { fetchEnergyData } from './api/energy-data';

const App: React.FC = () => (
    <div className="container">
        <h2 className="center">UK Energy Distribution</h2>
        <EnergyDistGrid getData={fetchEnergyData} />
    </div>
)

export {App}