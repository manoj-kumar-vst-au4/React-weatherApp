import React, { Component } from 'react'
import HourForcast from "./HourForcast";
import Sunny from "../images/sunny.png";
import Rain from "../images/rain.png";
import Cloud from "../images/cloud.png";

export default class CurrentForcast extends Component {
    render() {
        const getTime =(timestamp)=>{
            var date = new Date(timestamp * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime = hours + ':' + minutes.substr(-2) ;
            return formattedTime;
        }
        let data = this.props.dailyData.map(data=>{
            return data.weather[0].main;
        })
        return (
            <div className="container text-center mt-2  d-flex justify-content-center ">
                <div className="d-flex flex-column">
                <div className="card shadow" style={{"width":"750px","border":"none", "borderRadius":"30px"}} >
                    <h1 className="text-center mt-1"><b>{parseInt(this.props.currentData.temp - 273.15)}°C</b>
                        <img  className="ml-3" src={data[0] === "Clear" ? Sunny : null || data[0] === "Rain" ? Rain : null || data[0] === "Clouds" ? Cloud : null } alt="" style={{"width":"60px"}}/>
                    </h1>
                <div>
                    <HourForcast
                        hourlyData={this.props.hourlyData}
                    />
                </div>
                <div className=" d-flex justify-content-around mt-2">
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
