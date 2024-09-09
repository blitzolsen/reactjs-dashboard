import React, { useState, useEffect } from 'react'
import { AgCharts } from 'ag-charts-react';
import Form from 'react-bootstrap/Form';
import { GraphType } from '../../constants/enums';
export default function GraphWidget() {
    const graphData = {
        [GraphType.CANS_OF_MOUNTAIN_DEW_DRANK]: {
            data: [
                { month: 'Jan', cansOfMountainDewDrank: 28 },
                { month: 'Feb', cansOfMountainDewDrank: 20 },
                { month: 'Mar', cansOfMountainDewDrank: 14 },
                { month: 'Apr', cansOfMountainDewDrank: 10 },
                { month: 'May', cansOfMountainDewDrank: 5 },
                { month: 'Jun', cansOfMountainDewDrank: 20 },
                { month: 'Jul', cansOfMountainDewDrank: 10 },
                { month: 'Aug', cansOfMountainDewDrank: 20 },
                { month: 'Sep', cansOfMountainDewDrank: 10 },
                { month: 'Oct', cansOfMountainDewDrank: 20 },
                { month: 'Nov', cansOfMountainDewDrank: 10 },
                { month: 'Dec', cansOfMountainDewDrank: 20 },
            ],
            series: [{ type: 'bar', xKey: 'month', yKey: 'cansOfMountainDewDrank' }],
        },
        [GraphType.CANDY_SHAREHOLD_OVER_MY_BUDGET]: {
            data: [
                { name: 'Reeses', amount: 35 },
                { name: 'Sweet Tarts Cherry Ropes', amount: 45 },
                { name: 'Skittles', amount: 7 },
                { name: 'Cherry Sours', amount: 10 },
                { name: 'Everything Else', amount: 3 },
            ],
            series: [{ type: 'pie', angleKey: 'amount', legendItemKey: 'name' }],
        },
        [GraphType.AMOUNT_OF_WATER_MY_KIDS_DRINK_THROUGH_THE_DAY]: {
            data: [
                { amount: '8:00AM', terra: 0, ember: 0, leif: 0, aksel: 0 },
                { amount: '10:00AM', terra: 0, ember: 0, leif: 0, aksel: 0 },
                { amount: '12:00PM', terra: 0, ember: 0, leif: 0, aksel: 0 },
                { amount: '2:00PM', terra: 0, ember: 0, leif: 0, aksel: 0 },
                { amount: '4:00PM', terra: 0, ember: 0, leif: 0, aksel: 0 },
                { amount: '6:00PM', terra: 0, ember: 0, leif: 0, aksel: 0 },
                { amount: '8:00PM', terra: 12, ember: 14, leif: 8, aksel: 4 },
                { amount: '10:00PM', terra: 13, ember: 15, leif: 10, aksel: 7 },

            ],
            series: [{ type: 'line', xKey: 'amount', yKey: 'terra', yName: 'Terra' },
            { type: 'line', xKey: 'amount', yKey: 'ember', yName: 'Ember' },
            { type: 'line', xKey: 'amount', yKey: 'leif', yName: 'Leif' },
            { type: 'line', xKey: 'amount', yKey: 'aksel', yName: 'Aksel' }]
        },
    };
    const [selectedGraph, setSelectedGraph] = useState(GraphType.CANS_OF_MOUNTAIN_DEW_DRANK);
    const [chartOptions, setChartOptions] = useState(graphData[selectedGraph]);
    useEffect(() => {
        setChartOptions(graphData[selectedGraph]);
    }, [selectedGraph]);
    return (
        <>
            <AgCharts options={chartOptions} />
            <Form.Label>Select Widget Type</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => {
                setSelectedGraph(e.target.value);
            }}>
                {Object.entries(GraphType).map(([key, value]) => (
                    <option key={key} value={value}>
                        {value}
                    </option>
                ))}
            </Form.Select>
        </>
    );
}
