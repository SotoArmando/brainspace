import React, { useState } from 'react';

export default function Marketnews({ category, datetime, headline, related, source, image, summary, url, basis }) {

    return <div className="col corebox_13  center items_start    pad_t30 mobilepad_l24 pad_l24 btn " style={{ flexBasis: basis + 'px', maxWidth: basis + 'px' }}>
        <a className="col  space_between fore_11 pad_r15 hover_b" target='_tab' href={url}>
            {/* <div  className="corebox_11 " style={{background:"url("+image+")",width:"100%",backgroundPosition:'center', backgroundSize:'cover'}}  /> */}
            <div className="col    pad_b23 ">
                <div className="col start allwidth mar_b15">
                    <span className="f_0 fore_green f600 capitalize">{category}</span>
                </div>
                <div className="row center space_between allwidth mar_t19">
                    <span className="f_1 f500 fore_16  "><span className="fore_green f500">{source} {new Date(datetime * 1000).toLocaleDateString()}</span> <span className="f_1 ls_27 f600" >{headline}</span> <br/> <span className="f_0 ls_27 fore_14 f400">{summary}</span></span>
                </div>
            </div>
            <div className="to_hover_b ls_27 f_0 f500 fore_14">> Keep Reading</div>
        </a>
    </div>
}

