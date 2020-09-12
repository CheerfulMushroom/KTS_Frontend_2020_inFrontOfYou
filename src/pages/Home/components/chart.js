import React from "react";
import {Chart} from "react-charts";
import {chartData} from "./exampleData";

export default function MyChart() {
    const axes = React.useMemo(
        () => [
            {primary: true, type: "linear", position: "bottom"},
            {type: "linear", position: "left"},
        ],
        [],
    );

    return (
        <div
            style={{
                height: "300px",
            }}
        >
            <Chart data={chartData} axes={axes} />
        </div>
    );
}
