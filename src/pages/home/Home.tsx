import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
    return (
        <div className='home'>
            <div className='home__box box1'>
                <TopBox />
            </div>
            <div className='home__box box2'>
                <ChartBox {...chartBoxUser} />
            </div>
            <div className='home__box box3'>
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className='home__box box4'>
                <PieChartBox />
            </div>
            <div className='home__box box5'>
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className='home__box box6'>
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className='home__box box7'>
                <BigChartBox />
            </div>
            <div className='home__box box8'>
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className='home__box box9'>
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
};

export default Home;
