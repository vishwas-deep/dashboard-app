import {Link} from "react-router-dom";
import "./chartBox.scss";
import {Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";


type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}

const ChartBox = (props: Props) => {

    return (
        <div className='chartBox'>
            {/* box */}
            <div className='chartBox__boxInfo'>
                <div className='chartBox__boxInfo__title'>
                    <img src={props.icon} alt='' />
                    <span>{props.title}</span>
                </div>

                <h1>{props.number}</h1>
                <Link path='/' style={{ color: props.color }}>View all</Link>
            </div>

            {/* chart */}
            <div className='chartBox__chartInfo'>
                <div className='chartBox__chartInfo__chart'>
                    <ResponsiveContainer width='99%' height='100%'>
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{
                                    background: "transparent",
                                    border: "none",
                                }}
                                labelStyle={{
                                    display: "none"
                                }}
                                position={{
                                    x: 10,
                                    y: 60
                                }}
                            />
                            <Line
                                type='monotone'
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className='chartBox__chartInfo__texts'>
                    <span className='percentage' style={{
                        color: props.percentage < 0 ? "tomato" : "limegreen"
                    }}>{props.percentage}%</span>
                    <span className='duration'>this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;
