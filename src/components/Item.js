import React, { Component } from 'react';
import { getVehicle } from '../api';
import Loading from './Loading';
import filter from 'lodash/filter';

export default
class Item extends Component {
  constructor(props) {
      super(props);
      // Set loading on indivdual items.
      this.state = {
          loading: true,
      }
  }

  componentDidMount(){
    // Could do call in here but for tidyness in componentDidMount lets break it out.
    this.getData();
  }

  getData(){
    // Get ID from prop passed through
    let vehicleID = this.props.item.id;
    // Go get some data!
    getVehicle(vehicleID,(data) => {
      // Could add vaildation here but didnt.
      // Drop the loader re-render.
      this.setState({
        loading: false,
        details: data
      })
    });
  }

  render(){
    // var for ease of typing.
    let loading = this.state.loading;
    let vehicleData = this.props.item;
    let vehicleDetails = this.state.details;

    // Show loader while we are getting data.
    if(loading){
      return (
        <div className="item">
          <div className="ui loader active text">Loading</div>
        </div>
      )
    }

    // Loading is finished time to loop through. Different method of checking.
    if(!loading){
      let imgSrc
      // Check to see if we have an Image
      if(vehicleData.media.length > 0){
        // Use first image
        imgSrc = vehicleData.media[0].url
      }
      // Could take this into a new Component but havent right now.
      return (
        <div className="itemCon">
          <div className="item">
            <div className="imageCon">
              <img className="image" src={imgSrc} alt={vehicleData.id} />
            </div>
            <div className="content">
              <div className="name">
                {vehicleData.id}
              </div>
              <div className="price">
                From {vehicleDetails.price}
              </div>
              <div className="desc">
                {vehicleDetails.description}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
