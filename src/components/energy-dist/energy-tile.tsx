import React from 'react';
import './energy-tile.css';
import GaugeChart from 'react-gauge-chart'

// Define types.
interface Props {
    fuel: string;
    percentage: number;
    uid: string;
}

// Component
const EnergyTile: React.FC<Props> = (props: Props) => (
    <div className="tile-card center">
        <div className="tile-body">
            <label className="tile-label">{props.fuel}</label>
            <GaugeChart id={props.uid}
                nrOfLevels={3}
                arcPadding={0}
                cornerRadius={3}
                textColor={'#000'}
                needleColor="#000"
                colors={["#FF5F6D", "#FFC371"]}
                hideText={true}
                percent={props.percentage / 100}
            />
            <h5>{props.percentage}%</h5>
        </div>
    </div>
);

export default EnergyTile;