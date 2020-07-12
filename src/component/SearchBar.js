import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <input type="text" className="form-control text-center border border-light shadow" value={this.props.city} onChange={this.props.cityChange} style={{"width":"300px", "borderRadius":"10px"}}/>
            </div>
        )
    }
}
