import { useState } from 'react';
import { fetchForexCandles, fetchCryptoCandles } from '../lib/finantialmodeling';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function Symbol({ description, displaySymbol, symbol, basis, isCrypto, addstate, isFirst }) {
    const history = useHistory();
    const [symbolhandle, handleSymbol] = useState({ bidAsk: 'Wait' })
    const { bidAsk, growth, data } = symbolhandle;

    const mapNumbertoRead = (number) => (number) ? number.toString().lenght > 5 ? number.toString().slice(0, 7) : number.toString().slice(0, 8) : 0;

    const clickHandler = () => {
        addstate({ description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data }, "symbolclicked");
        history.push('/visitsymbol')
    }

    if (bidAsk === 'Wait') {
        handleSymbol({ ...symbolhandle, bidAsk: 'Loading' })

        if (isCrypto) {
            fetchCryptoCandles(symbol).then(data => {
                handleSymbol({ ...symbolhandle, growth: data.c[1], bidAsk: data.c[0], data: data.c })
                if (isFirst) {
                    
                    addstate({ description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data: data.c }, "landingcryptosymbol");
                }
            })
        }
        else {

            fetchForexCandles(symbol).then(data => {
                handleSymbol({ ...symbolhandle, growth: (data.c[data.c.length - 1] / data.c[0]).toString().substring(0, 5), bidAsk: data.c[0], data: data.c })
                if (isFirst) {
                    
                    addstate({ description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data: data.c }, "landingforexsymbol");
                }
            })
        }
    }
    
    let dailydif = (data != undefined) ? (data[51] - data[0]).toString().slice(0,10) : "No data";
    return (
        <div onClick={() => clickHandler()} className="col corebox_8 mobilecorebox_7 center items_start pad_l24 pad_r24 pad_b27 btn" style={{ flexBasis: basis + 'px' }}>
            <div className="allsize  col  pad_t27 borderradius_25">
                <div className="row center space_between allwidth">
                    <span className="f_1 f500 fore_6">{displaySymbol}</span>

                </div>
                <div className="row center space_between allwidth">
                    <span className="f500  mar_t15">
                        <span className={"f_2 ls_25 f600 fore_11" + ((growth > 1) ? "" : "")}>
                            {(bidAsk === 0) ? "No data" :mapNumbertoRead(bidAsk)} 
                        </span>
                    </span>
                    {/* <span className="f600 fore_green mar_t15">Today</span> */}
                </div>
                <span className={"f500 "+((dailydif) > 0 ? "fore_green" : "fore_red")}>{(dailydif == "NaN") ? "No data" : dailydif}</span>
            </div>
        </div>)
}





export default Symbol