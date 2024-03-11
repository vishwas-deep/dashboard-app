import {Link} from "react-router-dom";
import "./menu.scss";
import {menu} from "../../data";

const Menu = () => {
    return (
        <div className='menu'>
            {menu.map((item) => {
                return (
                    <div className='menu__item' key={item.id}>
                        {/* title */}
                        <span className='menu__item__title'>{item.title}</span>
                        
                        {/* links */}
                        {item.listItems.map((listItem) => {
                            return (
                                <Link
                                    to={listItem.url}
                                    className='menu__item__list'
                                    key={listItem.id}
                                >
                                    <img src={listItem.icon} alt='' />
                                    <span className="menu__item__list__title">{listItem.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
