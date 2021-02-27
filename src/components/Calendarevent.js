
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
function Calendarevent({ event, impact, time, unit, actual, estimate, country, basis }) {
    const history = useHistory();

    return (
        <div onClick={() => { history.push('/visitcalendarevent') }} className="col corebox_9 mobilecorebox_6 start items_start pad_l24 pad_r24 pad_t22 pad_b27 btn" style={{ flexBasis: basis + 'px' }}>
            <div className="col ">
                <span className="f600 fore_11" style={{ opacity: .94 }}>{new Date(time).toDateString() + " " + new Date(time).toLocaleTimeString()}</span>
                <span className="f500 f_0 fore_green" >{event} <span>{country}</span></span>
            </div>
        </div>)
}



const mapStateToProps = (state) => {
    const { finnhub } = state;
    return {
        finnhub
    }
};

const mapDispatchToProps = dispatch => ({
    fetchfinnhub: (finnhub, key) => dispatch({ type: 'finnhub/fetch', finnhub, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendarevent)