"use client"

import React from 'react'
import L from 'leaflet';
import { Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

const customIcon = L.icon({
    iconUrl: '/assets/marker.png', // Replace with the actual path to your icon image
    iconSize: [32, 32], // Set the size of the icon (width, height)
    iconAnchor: [16, 32], // Set the anchor point of the icon (relative to the icon size)
});

const Map = () => {

    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    return (
        <section>
            <h2 className='text-2xl font-semibold my-2'>
                Where you&absp;ll be
            </h2>
            <div className='w-full '>
                <MapContainer
                    center={[19.8960, 73.6921]}
                    zoom={14}
                    scrollWheelZoom={false}
                    className="h-[55vh] rounded-lg"
                >
                    <TileLayer attribution={attribution} url={url} />
                    <Marker position={[19.8960, 73.6921]} icon={customIcon}>
                        <Popup>
                            Exact location provided after booking
                        </Popup>
                    </Marker>

                    <LayerGroup>
                        <LayerGroup>
                            <Circle
                                center={[19.8960, 73.6921]}
                                pathOptions={{ fillColor: 'blue' }}
                                radius={1000}
                            />
                            <Circle
                                center={[19.8960, 73.6921]}
                                pathOptions={{ fillColor: 'red' }}
                                radius={400}
                                stroke={false}
                            />
                        </LayerGroup>
                    </LayerGroup>
                </MapContainer>,
            </div>
            <div className='flex flex-col items-start justify-center gap-4'>
                <p className='font-semibold text-lg'>
                    <span >Pimplad Nasik</span>, <span>Maharashtra</span>, <span>India</span>
                </p>
                <p>
                    Enjoy boating on the backwaters of Waldevi Lake, a 20-minute drive complemented by amazing views.
                    Adventure and culture combine at the Pandav Leni Caves, where you can set up your hiking trails, 20 minutes from the villa.
                </p>
            </div>
        </section>
    )
}

export default Map