import React from 'react';
import { useState, useEffect } from 'react';
import { uid } from 'react-uid';
import EnergyTile from './energy-tile';
import './energy-dist-grid.css';

// Define types.
interface Energy {
    fuel: string;
    perc: number;
}
interface Props {
    getData: () => any
}

// Component
const EnergyDistGrid: React.FC<Props> = (props: Props) => {
    // Configure state
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Configure componentDidMount
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await props.getData();
                setData(result.data);
            } catch (error) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // Helper method Elements
    const loader = () => <div className="loader center"></div>
    const error = () => <div className="error center">There has been an error while getting data.</div>
    const time = () => <div className="time center" key={uid('time')}>{new Date(data.from).toTimeString()} - {new Date(data.to).toTimeString()}</div>
    const tiles = () => (
        data.generationmix.map((energy: Energy, index: number) =>
            <div key={uid(energy)} className="col-3">
                <EnergyTile fuel={energy.fuel} uid={uid(energy)} percentage={energy.perc} />
            </div>
        )
    );

    return (
        <div className="row">
            {isLoading ? loader() : hasError ? error() : [time(), tiles()]}
        </div>
    )
}

export default EnergyDistGrid;