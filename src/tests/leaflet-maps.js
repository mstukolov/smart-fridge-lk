/**
 * Created by MAKS on 27.09.2017.
 */
import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer, Circle, Polyline, A } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import {divIcon} from "leaflet/src/layer/marker/DivIcon";
//import myIcon from 'leaflet/dist/images/marker-icon.png'
export default class LeafletComponent extends Component {

    state = {
        lat: 55.741639,
        lng: 37.626374,
        zoom: 13,
        latlngs : [
            [55.741639, 37.626374],
            [55.741639, 38.826374],
            [55.741639, 39.826374]
        ]
    }

    render() {
        const position = [55.741639, 37.226374]
        const position2 = [55.741639, 37.626374]
        const position3 = [55.741639, 37.926374]
        const cola_icon = divIcon({
            className: 'coca-div-icon',
            iconSize: [80, 80]
        });
        const sprite_icon = divIcon({
            className: 'sprite-div-icon',
            iconSize: [80, 80]
        });
        const ninja_icon = divIcon({
            className: 'ninja-div-icon',
            iconSize: [80, 80]
        });
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} draggable={true} icon={cola_icon}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
                <Marker position={position2} draggable={true} icon={sprite_icon}>
                    <Popup>
                        <h1>Магазин №1000 Азбука Вкуса</h1>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
                <Marker position={position3} draggable={true} icon={ninja_icon}>
                    <Popup>
                        <h1>Магазин №1000 Азбука Вкуса</h1>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
                {/*<Circle center={position} radius={1000}></Circle>
                <Polyline positions={this.state.latlngs}></Polyline>*/}
            </Map>
        )
    }
}