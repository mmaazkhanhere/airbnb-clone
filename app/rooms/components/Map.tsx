"use client"

import React from 'react'
import { Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { MapProps } from '@/interface';

const Map: React.FC<MapProps> = ({ longtitude, latitude, state, city, country, sub_direction }) => {

    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    const lat = latitude;
    const long = longtitude

    return (
        <article>
            <h2 className='text-2xl font-semibold my-2'>
                Where you&apos;ll be
            </h2>
            <div className='w-full '>
                <MapContainer
                    center={[lat, long]}
                    zoom={14}
                    scrollWheelZoom={false}
                    className="h-[55vh] rounded-lg"
                >
                    <TileLayer attribution={attribution} url={url} />
                    <Marker position={[lat, long]}>
                        <Popup>
                            Exact location provided after booking
                        </Popup>
                    </Marker>

                    <LayerGroup>
                        <LayerGroup>
                            <Circle
                                center={[lat, long]}
                                pathOptions={{ fillColor: 'blue' }}
                                radius={1000}
                            />
                            <Circle
                                center={[lat, long]}
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
                    <span >{city}</span>, <span>{state}</span>, <span>{country}</span>
                </p>
                <p>
                    {sub_direction}.
                </p>
            </div>
        </article>
    )
}

export default Map