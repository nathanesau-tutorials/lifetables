import React, { Component } from 'react';
import { LineChart, Line, XAxis,
    YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer } from 'recharts';

class LifeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            quote: ''
        };
    }

    componentDidMount() {
        var data = require('../data/lifetable.json');
        this.setState({ data });
    }

    render() {
        let finalData = [];

        if (this.state.data.length > 0) {
            finalData = this.state.data;

            for(var i = 0; i < 100; i++) {
                finalData[i].dx = finalData[i].lx - finalData[i+1].lx;
            }
            finalData[100].dx = 0;
        }
        
        return (
            <div className="chart bar HIV">
                <h6>Knowlege about sexual transmission of AIDS (Average Both Sexes)</h6>
                <ResponsiveContainer width='80%' height={500}>
                    <LineChart cx="50%" cy="50%" outerRadius="80%" data={finalData}>
                    <XAxis dataKey="age" />
                    <YAxis domain={[0,2000]}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line connectNulls={true} type="monotone" dataKey="dx" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default LifeTable;