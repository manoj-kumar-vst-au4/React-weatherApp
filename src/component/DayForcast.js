import React, { Component } from 'react'

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
            <div className="container d-flex justify-content-center  mt-3">
                <div className=" d-flex flex-row flex-wrap justify-content-around">
                    {this.props.dailyData.map(data=>{
                        return(
                            <div className="text-center border bg-light border-white px-4 shadow" style={{"borderRadius":"10px"}}>
                                <p className="text-dark py-1"><b>{getDay(data.dt)}</b></p>
                        <p className="py-0">{parseInt(data.temp.max-273.15)}°{parseInt(data.temp.min-273.15)}°</p>
                        <p className="py-0 text-secondary">{data.weather[0].main}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
