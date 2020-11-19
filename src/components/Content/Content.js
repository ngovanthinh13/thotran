// import './img'

import './Content.css';

// import search from './img/search.svg'
// import search from './img/.svg'



function Content() {
    return (
        <div>


            <div className="slider">
                <img width='1525' src='https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push1_DIE.jpg?wid=2048' alt='' />
                <h1 >JOURNEY HOME FOR THE HOLIDAYS</h1>
                <p style={{ letterSpacing: '.05rem', fontSize: '16px' }}>Starring Alicia Vikander</p>
                <button>
                    Discover the Campaign
            </button>
            </div>
            <div className='main_content'>
                <div className='content_left'>
                    <img width='720' src='https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push2_DII.jpg?wid=1080' alt='' />

                    <h2 >LATEST GIFTS </h2>

                </div>
                <div className='content_right'>
                    <div className='content_right_item'>
                        <div>COMPLIMENTARY DELIVERY</div>
                        <button>Shop Women's Wallets</button>

                    </div>
                    <div className='content_right_item_under'>
                        <img width='700vh' height='445vh' src='https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push4_DI3.jpg?wid=1080' alt='' />
                        <h2>
                            TIMELESS CLASSICS
    </h2>
                    </div>

                </div>

            </div>
            <div className='thumbnail'>
                <div className='thumbnail_1'>
                    <img width='430' src='https://www.louisvuitton.com/images/louis-vuitton--HP_TH_Holidays_Campaign_Gifts_For_Her_DI1.jpg?wid=656' alt=''/>
                    <p>
      GIFTS FOR HER
    </p>
                </div>
                <div className='thumbnail_2'>
                    <img width='430' src='https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push6_DI1.jpg?wid=656' alt=''/>
                    <p>
      PARTY SHOES
    </p>
                </div>
                <div className='thumbnail_3'>
                    <img width='430' src='https://www.louisvuitton.com/images/louis-vuitton--HP_TH_Holidays_Campaign_Gifts_For_Him_DI1.jpg?wid=656' alt='' />
                    <p>
      GIFTS FOR HIM
    </p>
                </div>

            </div>
        </div>
    );
}

export default Content;
