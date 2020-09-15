import React from "react";
import {Chart} from "react-charts";

export default function MyChart(props) {
    const data = React.useMemo(
        () => [
            {
                label: "Новые случаи в день",
                data: [
                    [1, 1],
                    [3, 2],
                    [2, 4],
                    [3, 2],
                    [4, 7],
                ],
            },
            {
                label: "Смерти в день",
                data: [
                    [0, 3],
                    [1, 1],
                    [2, 5],
                    [3, 6],
                    [4, 4],
                ],
            },
        ],
        [],
    );

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
            <Chart data={data} axes={axes} />
        </div>
    );
}
