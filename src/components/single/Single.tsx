import {
    Legend,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    LineChart,
    Tooltip,
} from "recharts";
import "./single.scss";

type Props = {
    id: number;
    title: string;
    img?: string;
    info: object;
    chart?: {
        dataKeys: {
            name: string;
            color: string;
        }[];
        data: object[];
    };
    activities?: {
        time: string;
        text: string;
    }[];
};

const Single = (props: Props) => {
    return (
        <div className='single'>
            <div className='single__view'>
                <div className='single__view__info'>
                    <div className='single__view__info__top'>
                        {props.img && <img src={props?.img} alt='' />}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>

                    <div className='single__view__info__details'>
                        {Object.entries(props.info).map((item) => {
                            return (
                                <div className='item' key={item[0]}>
                                    <span className='item__title'>
                                        {item[0]}
                                    </span>
                                    <span className='item__value'>
                                        {item[1]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <hr />

                {props.chart && (
                    <div className='single__view__chart'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey='name' />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.dataKeys.map((dataKey) => {
                                    return (
                                        <Line
                                            key={dataKey.name}
                                            type='monotone'
                                            dataKey={dataKey.name}
                                            stroke={dataKey.color}
                                        />
                                    );
                                })}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>

            <div className='single__activities'>
                <h2>Latest Activities</h2>
                {props.activities && (
                    <ul>
                        {props.activities.map((activity) => {
                            return (
                                <li key={activity.text}>
                                    <div>
                                        <p>{activity.text}</p>
                                        <time>{activity.time}</time>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Single;
