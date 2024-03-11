import {topDealUsers} from "../../data";
import "./topBox.scss";

const TopBox = () => {
    return (
        <div className='topBox'>
            <h1>Title</h1>
            <div className='topBox__list'>
                {topDealUsers.map((user) => {
                    return (
                        <div className='topBox__list__user' key={user.id}>
                            <div className='topBox__list__user__info'>
                                <img src={user.img} alt='' />

                                <div>
                                    <span className='name'>
                                        {user.username}
                                    </span>
                                    <span className='email'>
                                        {user.email}
                                    </span>
                                </div>
                            </div>

                            <span className='topBox__list__user__amount'>
                                ${user.amount}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopBox;
