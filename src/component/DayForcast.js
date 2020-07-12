import React, { Component } from 'react'
import Sunny from "../images/sunny.png";
import Rain from "../images/rain.png";
import Cloud from "../images/cloud.png";

export default class DayForcast extends Component {
    render() {
        const getDay=(timestamp)=>{
            var weekday = new Array(7);
                weekday[0] = "Sun";
                weekday[1] = "Mon";
                weekday[2] = "Tue";
                weekday[3] = "Wed";
                weekday[4] = "Thu";
                weekday[5] = "Fri";
                weekday[6] = "Sat";
                var date = weekday[new Date(timestamp * 1000).getDay()];
            return date;
        }
        return (
            <div className="container d-flex justify-content-center  mt-1">
                <div className=" d-flex flex-row flex-wrap justify-content-around">
                    {this.props.dailyData.map(data=>{
                        return(
                            <button className="text-center btn btn-white   px-4 ">
                                <p className="text-dark py-1"><b>{getDay(data.dt)}</b></p>
                                <p className="py-0">{parseInt(data.temp.max-273.15)}°{parseInt(data.temp.min-273.15)}°</p>
                                <img src={data.weather[0].main === "Clear" ? Sunny : null || data.weather[0].main === "Rain" ? Rain : null ||data.weather[0].main === "Clouds" ? Cloud : null} alt="" style={{"width":"35px"}}/>
                                <p className="py-0 text-secondary">{data.weather[0].main}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}
