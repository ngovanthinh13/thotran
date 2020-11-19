// import './img'

import './header.css';

import vietnamicon from './img/vietnam_icon.png'
import questionicon from './img/question_icon.svg'
import phoneicon from './img/phone.svg'
import location from './img/location.svg'
import heart from './img/heart.svg'
import person from './img/person.svg'
import bag from './img/bag.svg'


function Header() {
    return (
        <div className="App">
            <div className='thongbao'>

            </div>
            <div className='header'>
                <div className='header_left'>
                    <div className='header_left_vie'>
                        <ul>
                            <li> <img width="" src={vietnamicon} alt="" /></li>
                            <li> <p>Ship to: Vietnam</p></li>
                            <li> <img  src={questionicon} alt=''/></li>
                            <li>Tôi có thể giúp gì cho bạn?</li>
                            <li> <img  src={phoneicon} alt=''/></li>
                            <li>+65 6788 3888</li>
                        </ul>
                       
                       
                    </div>
                </div>
                <div className='header_left'>
                <div className='header_left_vie'>
                    <ul>
                    <li> <img width="" src={location} alt="" /></li>
                    <li> <img width="" src={heart} alt="" /></li>
                    <li> <img width="" src={person} alt="" /></li>
                    <li> <img width="" src={bag} alt="" /></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div>
               
            </div>

        </div>
    );
}

export default Header;
