import React, { memo } from "react";
import {
    ComposableMap,
    Sphere,
    Graticule,
    ZoomableGroup,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const MapChart = ({ setTooltipContent }) => {
    const height = 600;
    const width = 1200
    const scale = 200;

    return (
        <ComposableMap data-tip="" width={width} height={height} projectionConfig={{ scale: scale }}>
            <ZoomableGroup translateExtent={[[0, 0], [width, height]]}>
                <Sphere stroke="#DDD" />
                <Graticule stroke="#DDD" />
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME, POP_EST } = geo.properties;
                                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: "#D6D6DA",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#3082d2",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#3082d2",
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default memo(MapChart);
