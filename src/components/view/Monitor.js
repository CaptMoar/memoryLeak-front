import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getMetricas } from '../actions/metricasAction'

export const Monitor = () => {

    const dispatch = useDispatch();
    const [dataResult, setDataResult] = useState({
        labels: [],
        dataRam: [],
        freeRam: []
    })

    const { data: dataMetricas } = useSelector(state => state.metricas)

    useEffect(() => { dispatch(getMetricas()) }, [dispatch])
    useEffect(() => {
        if (dataMetricas[0]) {
            let arrDataLabels = dataMetricas[0].map(e => [e.hora])
            let arrDatasetData = dataMetricas[0].map(e => (e.usageMemory / 1000000000))
            let arrRamFaltante = dataMetricas[0].map(e => (e.freeMemory / 1000000000))

            setDataResult({
                labels: arrDataLabels,
                dataRam: arrDatasetData,
                freeRam: arrRamFaltante
            })
        }
    }, [dataMetricas])

    const state = {
        labels: dataResult.labels,
        datasets: [
            {
                label: 'RAM on GB',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: dataResult.dataRam
            }
        ]
    }

    return (
        <div>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Total de Ram usada',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'left'
                    }
                }}
            />
        </div>
    )
}
