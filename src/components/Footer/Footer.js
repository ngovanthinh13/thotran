// import './img'

import './Footer.css';
import vietnamicon from '../Header/img/vietnam_icon.png'


// import search from './img/search.svg'


function Footer() {
    return (
        <div className="footer">
            <div className='logo_footer'>
                <h1>Tho Tran</h1>
                {/* <hr style={{border:'border: 1px solid #636e72;'}} /> */}
                <div className='footer_menu'>
                    <ul>
                        <li className='footer_menu_itemt1'>
                            <div className='icon_footer'>
                                <div className='icon_footer_img'><img width="" src={vietnamicon} alt="" /></div>
                                <div className='icon_footer_name'> &nbsp;Vietnam</div>
                            </div>
                            
                                {/* */}
                                
                    </li>
                    {/* <li className='footer_menu_itemt2'>
                            Vieet
        </li> */}
                        <li className='footer_menu_itemt2'>
                            Newsletter
        </li>
                        <li className='footer_menu_itemt3'>
                            Contact
        </li>
                        <li className='footer_menu_itemt4'>
                            Apps
        </li>
                        <li className='footer_menu_itemt5'>
                            Follow Us
      </li>
                        <li className='footer_menu_itemt6'>
                            Legal & Privacy
        </li>
                        <li className='footer_menu_itemt7'>
                            Careers
        </li>
                        <li className='footer_menu_itemt8'>
                            Sitemap
      </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;
