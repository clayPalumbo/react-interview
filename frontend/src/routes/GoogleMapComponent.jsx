import React, { Component } from "react";
import { compose, withProps, withHandlers } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'
import m1 from '../imgs/m1.png'

const apiKey = 'AIzaSyBdncZvkNUpZiLS-07md2po65CCB9SzrH4'

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log("Number of markers clicked: " + clickedMarkers.length)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 39.5, lng: -98.5 }}>
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
            maxZoom={14}
            styles={[{ height: 53, url: m1, width: 53 }]}
        >
            {props.markers}
        </MarkerClusterer>
    </GoogleMap>
));


export default class GoogleMapComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfoIndex: 798
        }
    }

    showInfo = (i) => {
        console.log(i);
        this.setState({ showInfoIndex: i })
    }

    componentDidMount() {
        fetch('/react-interview/getLowesStores')
            .then(res => {
                return res.json()
            })
            .then(locations => {
                const markers = locations.map((site, i) => {
                    const markerLatLng = {
                        position: {
                            lat: site.geometry.location.lat,
                            lng: site.geometry.location.lng
                        }
                    }
                    return (
                        <Marker
                            key={i}
                            {...markerLatLng}
                            site={site}
                            onClick={() => this.showInfo(i)}>
                            {this.state.showInfoIndex === i &&
                                <InfoWindow
                                    onCloseClick={() => this.showInfo(null)}>
                                    <div className="container-fluid">
                                    <div className="row">
                                        <h3>{site.name}</h3>
                                        <p>{"Building Number: " + site.number}</p>
                                        </div>
                                    </div>
                                </InfoWindow>
                            }
                        </Marker>
                    )
                })
                this.setState({ markers: markers })
            });
    }

    render() {
        return (
            <div>
                <MyMapComponent
                    isMarkerShown
                    markers={this.state.markers}
                />
            </div>
        )
    }
}