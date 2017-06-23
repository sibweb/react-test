import React, { Component } from 'react';
import Item from './Item'

export default
class Listview extends Component {

  constructor(props) {
    super(props);
    // Empty state so no error on first render.
    this.state = {}
  }

  componentDidMount(){
    // Could do call in here but for tidyness in componentDidMount lets break it out.
    this.getItems()
  }

  getItems(){
    // Get data from props passed in.
    let vehicles = this.props.vehicles;
    // Check if its there.
    if(vehicles){
      // Loop through and create a item for each one.
      let vehicleSet = vehicles.map((vehicle)=>
        <Item key={vehicle.id} item={vehicle} />
      );
      // Once done lets render the out put.
      this.setState({
        vehicleSet: vehicleSet
      });
    }
  }

  render() {
    // var for ease of typing.
    let vehicleSet = this.state.vehicleSet;
    // Simplistic className for reuse.
    return (
      <div className="listview">
        {vehicleSet}
      </div>
    )
  }

}
