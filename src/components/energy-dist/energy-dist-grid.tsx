import React from 'react';
import { useState, useEffect } from 'react';
import EnergyTile from './energy-tile';

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

const EnergyDistGrid: React.FC<Props> = (props: Props) => {
    const [generationMix, setGenerationMix] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await props.getData();
                setIsLoading(false);
                setGenerationMix(result.data.generationmix);
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="row">
            {   hasError ? <p className="error">There has been an error.</p> 
                : isLoading 
                ? <p className="isLoading">Data is Loading...</p> 
                : mapTiles(generationMix)}
        </div>
    )
}

export default EnergyDistGrid;