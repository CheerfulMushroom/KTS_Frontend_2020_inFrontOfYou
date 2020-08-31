import React from "react";
import {scaleLinear} from "d3-scale";
import {
    ComposableMap,
    Sphere,
    Graticule,
    ZoomableGroup,
    Geographies,
    Geography
} from "react-simple-maps";
import PropTypes from "prop-types";


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else if (num > 100) {
        return Math.round(num / 100) / 10 + "K";
    } else {
        return num;
    }
};

export default class MapChart extends React.Component {
    static propTypes = {
        setTooltipContent: PropTypes.func.isRequired,
        countriesData: PropTypes.arrayOf(PropTypes.shape({
            countryCode: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })),
    }

    static defaultProps = {
        countriesData: [],
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        const countriesData = this.props.countriesData;

        const allCountriesValues = countriesData.map((countryData => countryData.value))
        const maxValue = Math.max(...allCountriesValues);
        const minValue = Math.min(...allCountriesValues);

        const colorScale = scaleLinear()
            .domain([minValue, maxValue])
            .range(["#ffedea", "#ff5233"]);


        const height = 1200;
        const width = 2400
        const scale = 400;

        return (
            <ComposableMap data-tip="" width={width} height={height} projectionConfig={{scale: scale}}>
                <ZoomableGroup translateExtent={[[0, 0], [width, height]]}>
                    <Sphere stroke="#DDD"/>
                    <Graticule stroke="#DDD"/>
                    <Geographies geography={geoUrl}>
                        {({geographies}) =>
                            geographies.map(geo => {
                                const countryData = countriesData.find((country) => country.countryCode === geo.properties.ISO_A2)

                                let color;
                                if (countryData === undefined) {
                                    color = "#D6D6DA";
                                } else {
                                    color = colorScale(countryData.value);
                                }


                                return <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const {NAME} = geo.properties;
                                        this.props.setTooltipContent(`${NAME} — ${countryData !== undefined ? rounded(countryData.value) : 'N/A'}`);
                                    }}
                                    onMouseLeave={() => {
                                        this.props.setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: color,
                                            outline: "none",
                                            stroke: '#b1b1b1',
                                            strokeWidth: 0.5,
                                            transition: "500ms",
                                        },
                                        hover: {
                                            fill: "#e4e4e4",
                                            outline: "none",
                                            stroke: '#b1b1b1',
                                            strokeWidth: 0.5,
                                            transition: "500ms",
                                        },
                                        pressed: {
                                            fill: "#e4e4e4",
                                            outline: "none"
                                        }
                                    }}
                                />
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        );
    }
};
