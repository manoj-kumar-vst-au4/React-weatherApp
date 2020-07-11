import React, { Component } from 'react'
import HourForcast from "./HourForcast";
export default class CurrentForcast extends Component {
    render() {
        const getTime =(timestamp)=>{
            var date = new Date(timestamp * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime = hours + ':' + minutes.substr(-2) ;
            return formattedTime;
        }
        return (
            <div className="container text-center   d-flex justify-content-center mt-3">
                <div className="d-flex flex-column">
                <div className="card shadow" style={{"width":"750px", "borderRadius":"20px"}} >
                    <h1 className="text-center mt-3"><b>{parseInt(this.props.currentData.temp - 273.15)}°C</b></h1>
                <div>
                    <HourForcast
                        hourlyData={this.props.hourlyData}
                    />
                </div>
                <div className=" d-flex justify-content-around ">
                    <div className="mr-5  px-5  pb-0 bg-light" style={{"borderRadius":"10px"}}>
                        <p><b>Pressure</b></p>
                        <p>{this.props.currentData.pressure} hpa</p>
                    </div>
                    <div className="ml-5  px-5  pb-0 bg-light" style={{"borderRadius":"10px"}}>
                        <p><b>Humidity</b></p>
                        <p>{this.props.currentData.humidity}%</p>
                    </div>
                </div>
                <div className=" d-flex justify-content-around my-2 ">
                    <div className="mr-5  px-5  pb-0 bg-light" style={{"borderRadius":"10px"}}>
                        <p><b>SunRise</b></p>
                        <p>{getTime(this.props.currentData.sunrise)}AM</p>
                    </div>
                    <div className="ml-5  px-5  pb-0 bg-light" style={{"borderRadius":"10px"}}>
                        <p><b>SunSet</b></p>
                        <p>{getTime(this.props.currentData.sunset)}PM</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
