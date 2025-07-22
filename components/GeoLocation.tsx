"use client"

import { Map, YMaps } from "@pbe/react-yandex-maps";

export default function GeoLocation() {
    return (
        <YMaps>
          <Map defaultState={{center: [55.75, 37.57], zoom: 5}}></Map>
        </YMaps>
    )
}