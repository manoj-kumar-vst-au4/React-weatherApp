import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
 
export default class HourForcast extends Component {
    render() {
        const getTime =(timestamp)=>{
            var date = new Date(timestamp * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime = hours + ':' + minutes.substr(-2) ;
            return formattedTime;
        }

        let Points = this.props.hourlyData.map((data, index)=>{
            return (
                {
                    x:parseInt(getTime(data.dt)),
                    y: parseInt(data.temp - 273.15)
                }
            );
        });

        let xData = Points.map(data=>{
            return data.x;
        })

        const data = [
            {									
                color: "red", 
                points: Points.slice(0,7),
            }
        ];

        
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
                        xMin={xData[0]}
                        
                    />
                </div>				
            </div>
        );
    }
}