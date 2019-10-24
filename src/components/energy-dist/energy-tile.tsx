import React from 'react';
import './energy-tile.css';
import * as images from './images';
import GaugeChart from 'react-gauge-chart'

interface Props {
    fuel: string;
    percentage: number;
    index:number;
}

const EnergyTile: React.FC<Props> = (props: Props) => (
    <div className="tile-card center">
        <img className="tile-img" src={images[props.fuel] ? images[props.fuel] : images.placeholder } /> 
        <div className="tile-body">
            <label className="tile-label">{props.fuel}</label>
            <GaugeChart id={`gauge-chart-${props.fuel}-${props.index}`}
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