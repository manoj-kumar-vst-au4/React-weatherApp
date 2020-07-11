import React, { Component } from "react";
import SearchBar from "./component/SearchBar";
import Axios from "axios";
import DayForcast from "./component/DayForcast";
import CurrentForcast from "./component/CurrentForcast";

export default class App extends Component {
  state = {
    city: "",
    latitude:"",
    longitude:"",
    dropdowndata: [],
    currentData:[],
    hourlyData:[],
    dailyData:[]
  };
  
  componentDidMount=()=>{
    const show = async (position) =>{
      await this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      let lat = this.state.latitude;
        let lon = this.state.longitude;
        Axios({
          method: "GET",
          url: `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=9d0a8871b2e2bb813b32d2b39c3042b4`,
          headers: {
            "content-type": "application/json",
          },
        }).then(
          (resp)=>{
            this.setState({
              currentData: resp.data.current,
              hourlyData: resp.data.hourly,
              dailyData: resp.data.daily
            })
          }
        ).catch(
          (error)=>{
            console.log(error)
          }
        )
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(show);
    } else { 
      console.log("gps not supported!")
    }

  fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
    .then(response => {
      this.setState({
        city: response.city
      })
    })
    .catch((data, status) => {
      console.log('Request failed');
    })
  }

  cityChange = async (e) => {
    await this.setState({
      city: e.target.value
    });
    let city = this.state.city;
    Axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d0a8871b2e2bb813b32d2b39c3042b4`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then( async (res) => {
        await this.setState({
          city: res.data.name,
          latitude: res.data.coord.lat,
          longitude: res.data.coord.lon
        });
        let lat = this.state.latitude;
        let lon = this.state.longitude;
        Axios({
          method: "GET",
          url: `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=9d0a8871b2e2bb813b32d2b39c3042b4`,
          headers: {
            "content-type": "application/json",
          },
        }).then(
          (resp)=>{
            this.setState({
              currentData: resp.data.current,
              hourlyData: resp.data.hourly,
              dailyData: resp.data.daily
            })
          }
        ).catch(
          (error)=>{
            console.log(error)
          }
        )
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    
    return (
      <div className="container d-flex border border-light py-1 flex-column my-2" style={{"borderRadius":"20px"}}>
        <SearchBar cityChange={this.cityChange} 
        city={this.state.city}
        />
        <DayForcast
        dailyData={this.state.dailyData}
        />
        <CurrentForcast
        currentData={this.state.currentData}
        hourlyData={this.state.hourlyData}
        />
        
      </div>
    );
  }
}
