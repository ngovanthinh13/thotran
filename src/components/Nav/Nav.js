// import './img'

import './Nav.css';

import search from './img/search.svg'


function Nav() {
    return (
        <div className="nav">
            <div className='nav_left'>
                
                <ul>
                    <li><div className='logo'>LOUIS VUITTON</div></li>
                    <li>NEW</li>
                    <li>WOMEN</li>
                    <li>MEN</li>
                    <li>ART OF LIVING</li>
                    <li>MAGAZINE</li>
                </ul>
            </div>
            <div className='nav_right'>
                <div className='search'>
                    <img width='20px' src={search} alt='' />
                <input placeholder='Tìm kiếm với quà' />
                <p> &nbsp;&nbsp;</p>
                </div>
                
        </div>
        </div>
    );
}

export default Nav;
