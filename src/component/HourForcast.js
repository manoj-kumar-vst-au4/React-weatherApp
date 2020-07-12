import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
 
export default class HourForcast extends Component {
    render() {

        let Points = this.props.hourlyData.map((data, index)=>{
            return (
                {
                    x:parseInt(index),
                    y: parseInt(data.temp - 273.15)
                }
            );
        });

        const data = [
            {									
                color: "red", 
                points: Points.slice(0,10),
            }
        ];

        console.log(Points)
        return (
            <div>
                <div className="App">
                    <LineChart 
                        width={750}
                        height={300}
                        data={data}
                        xLabel= "Hour Forcast"
                        yLabel=""
                        yMin="0"
                        yMax="50"
                        
                    />
                </div>				
            </div>
        );
    }
}