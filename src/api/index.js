/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
 		    if(vehicles.status === 200) {
          // Parse into JSON.
 			    cb(JSON.parse(vehicles.responseText));
		    }
		}
	};

	vehicles.send();
};

// Use similar call to previous call.
export const getVehicle = (id, cb) => {
    const details = new XMLHttpRequest();
    details.open('GET', 'http://localhost:9988/api/vehicle/' + id);

    details.onreadystatechange = function() {
        if(details.readyState === 4) {
 		    if(details.status === 200) {
          // Parse into JSON.
 			    cb(JSON.parse(details.responseText));
		    }
		}
	};

	details.send();
};
