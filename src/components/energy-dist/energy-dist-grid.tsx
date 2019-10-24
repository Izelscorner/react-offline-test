import React from 'react';
import { useState, useEffect } from 'react';
import EnergyTile from './energy-tile';
import './energy-dist-grid.css';

interface Energy {
    fuel: string;
    perc: number;
}

interface Props {
    getData: () => any
}

const mapTiles = (generationMix: Array<object>) => (
    generationMix.map((energy: Energy, index: number) =>
        <div key={index} className="col-3">
            <EnergyTile fuel={energy.fuel} index={index} percentage={energy.perc} />
        </div>
    )
)

const loader = () => <div className="loader center"></div>

const error = ()  => <div className="error center">There has been an error while getting data.</div>

const EnergyDistGrid: React.FC<Props> = (props: Props) => {
    const [generationMix, setGenerationMix] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await props.getData();
                setGenerationMix(result.data.generationmix);
            } catch (error) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="row">
            { isLoading ? loader() : hasError ? error() : mapTiles(generationMix)}
        </div>
    )
}

export default EnergyDistGrid;