import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import "./pieChartBox.scss";
import {pieChartData} from "../../data";

const PieChartBox = () => {
    return (
        <div className='pieChartBox'>
            {/* heading */}
            <h1>Leads by Source</h1>

            {/* chart */}
            <div className='pieChartBox__charts'>
                <ResponsiveContainer width={"99%"} height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                background: "white",
                                borderRadius: "5px",
                            }}
                        />
                        <Pie
                            data={pieChartData}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey='value'
                        >
                            {pieChartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* options */}
            <div className='pieChartBox__options'>
                {pieChartData.map((item) => {
                    return (
                        <div
                            className='pieChartBox__options__option'
                            key={item.name}
                        >
                            {/* title */}
                            <div className='pieChartBox__options__option__title'>
                                <div
                                    className='pieChartBox__options__option__title__dot'
                                    style={{background: item.color}}
                                />
                                <span>{item.name}</span>
                            </div>

                            {/* value */}
                            <span>{item.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PieChartBox;
