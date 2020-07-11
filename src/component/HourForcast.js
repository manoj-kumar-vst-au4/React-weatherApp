import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
 
export default class HourForcast extends Component {
    render() {
        let Points = this.props.hourlyData.map((data, index)=>{
            return (
                {
                    x: index+1,
                    y: parseInt(data.temp - 273.15)
                }
            );
        });
        console.log(Points)
        const data = [
            {									
                color: "steelblue", 
                points: Points.slice(0, 10) 
            }
        ];
        return (
            <div>
                <div className="App">
                    <LineChart 
                        width={500}
                        height={250}
                        data={data}
                    />
                </div>				
            </div>
        );
    }
}