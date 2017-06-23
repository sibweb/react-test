import React, { Component } from 'react';
import { getData } from '../api';
import Loading from './Loading'
import Listview from './Listview'
export default
class VehicleList extends Component {

	constructor(props) {
		super(props);
		// Set loading to true and make vehicles null
		this.state = {
			vehicles: null,
			loading: true
		}
	}

	componentDidMount() {
		// Could do call in here but for tidyness in componentDidMount lets break it out.
		this.getData();
	}

	getData(){
		getData((data) => {
			// Check if data exists from cb and we have vehicles as well.
			if(data && data.vehicles){
				// Split data here dont need object in object.
				let vehicles = data.vehicles
				// All good? Lets drop loading and
				this.setState({
					vehicles, loading: false
				});
			}else{
				// Else lets stop loading and throw and error.
				this.setState({
					loading: false,
					error: true
				})
			}

		});
	}

	render() {
		// Lets just set some variables to save typing.
		let vehicles = this.state.vehicles;
		let loading = this.state.loading;
		let error = this.state.error;

		if(loading){
			// No data yet lets show a nice loader.
			return (
				<Loading text="Loading" />
			)
		}else if(vehicles && !loading){
			// Not loading and vehicles is here? Lets start showing some data.
			return (
				<Listview key="VehicleList" vehicles={vehicles}  />
			)
		}else{
			// Something else happened.. lets so an error.
			return (
				<h1>Error</h1>
			)
		}
	}
}
