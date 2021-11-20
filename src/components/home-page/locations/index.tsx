import React from 'react';
import GoogleMapReact from 'google-map-react';
import * as dotenv from 'dotenv';

const Locations: React.FC = () => {
	dotenv.config();

	const mapProperties = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
		apiKey: `${process.env.REACT_APP_GoogleMapsAPIKey}`,
	};

	return (
		<article>
			<h1>Our Locations</h1>
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: mapProperties.apiKey }}
					defaultCenter={mapProperties.center}
					defaultZoom={mapProperties.zoom}
				>
					{/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
				</GoogleMapReact>
			</div>
		</article>
	);
};

export default Locations;
