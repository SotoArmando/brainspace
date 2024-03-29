
import { Component } from "react";
import '../css/graphs.css';
import { convertRemToPixels } from "../lib/Util";
import CanvasJSReact from '../lib/canvasjs.react';



const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const _data = [0.000819, 0.000845, 0.000842, 0.000825, 0.000823, 0.000817, 0.000808, 0.000817, 0.000824, 0.000838, 0.000826, 0.00082, 0.000824, 0.000833, 0.000831, 0.000828, 0.000831, 0.000838, 0.000835, 0.00083, 0.000834, 0.000828, 0.000839, 0.000848, 0.000859, 0.00085, 0.000848, 0.000848, 0.000853, 0.000848, 0.000851, 0.000849, 0.000851, 0.000836, 0.000838, 0.000842, 0.000837, 0.000835, 0.000874, 0.000889, 0.000874, 0.000869, 0.000876, 0.000907, 0.000932, 0.000915, 0.000896, 0.000871, 0.000857, 0.000881, 0.000865, 0.000857, 0.000856, 0.000848, 0.000849, 0.000856, 0.000874, 0.000864, 0.00087, 0.000872, 0.000877, 0.000877, 0.000887, 0.000872, 0.000866, 0.000873, 0.000868, 0.000852, 0.000851, 0.00085, 0.000836, 0.000822, 0.000838, 0.000828, 0.000823, 0.000822, 0.000824, 0.000811, 0.000792, 0.000786, 0.000802, 0.000865, 0.000867, 0.000885, 0.000927, 0.000912, 0.000914, 0.000887, 0.000907, 0.000919, 0.000887, 0.000897, 0.000889, 0.000901, 0.000911, 0.000904, 0.000883, 0.00089, 0.000886, 0.000898, 0.000899, 0.000891, 0.000931, 0.000956, 0.000919, 0.000934, 0.000932, 0.000918, 0.000909, 0.000888, 0.000914, 0.000911, 0.000903, 0.000881, 0.000899, 0.000893, 0.000888, 0.000867, 0.000887, 0.000883, 0.00088, 0.000869, 0.000863, 0.000872, 0.000871, 0.000872, 0.000864, 0.000868, 0.000854, 0.000848, 0.000838, 0.000863, 0.000863, 0.000853, 0.000837, 0.000846, 0.00074, 0.000781, 0.00078, 0.000782, 0.000786, 0.000801, 0.000806, 0.0008, 0.000803, 0.000796, 0.000788, 0.000776, 0.00078, 0.000787, 0.000786, 0.000791, 0.000803, 0.000826, 0.000823, 0.000824, 0.000818, 0.000821, 0.000826, 0.000833, 0.000854, 0.000847, 0.000839, 0.000843, 0.000859, 0.000845, 0.000832, 0.000826, 0.000831, 0.000836, 0.000836, 0.000815, 0.000814, 0.000811, 0.000818, 0.000818, 0.000823, 0.000821, 0.000818, 0.000806, 0.000803, 0.000821, 0.000816, 0.000827, 0.000824, 0.000824, 0.000832, 0.000826, 0.000819, 0.000836, 0.000833, 0.000834, 0.00083, 0.000825, 0.000822, 0.000826, 0.000824, 0.00082, 0.000818, 0.000817, 0.000801, 0.000795, 0.000789, 0.000802, 0.000803, 0.000791, 0.000804, 0.000797, 0.00081, 0.00084, 0.000829, 0.000818, 0.000822, 0.000816, 0.000824, 0.000816, 0.00082, 0.000817, 0.000813, 0.000811, 0.000803, 0.000804, 0.000807, 0.000814, 0.000823, 0.000814, 0.000806, 0.000805, 0.000807, 0.000812, 0.000816, 0.000813, 0.000814, 0.00081, 0.000817, 0.000811, 0.000814, 0.000813, 0.000808, 0.000813]

export default class Chart0 extends Component {
    constructor(args) {
        super(args)

        this.state = {
            ...args,

        }

    }


    componentDidMount() {
        debugger;
        this.chart.render();
    }


    render() {
        const { displaySymbol, isCrypto, data } = this.state;

        let falldata = data || _data;
        const options = {
            animationEnabled: true,
            zoomEnabled: true,
            backgroundColor: "transparent",
            toolTip: {
                fontSize: convertRemToPixels(1),
            },

            axisY: {
                title: "",
                includeZero: false,
                suffix: "",
                lineColor: "transparent",
                lineThickness: 3,
                gridColor: "rgb(204,204,204)",
                labelFontSize: convertRemToPixels(1),
            },
            axisX: {
                includeZero: true,
                title: "",
                prefix: "",
                suffix: "h",
                interval: 12,
                lineColor: "rgb(47,47,47)",
                lineThickness: 3,
                gridColor: "rgb(204,204,204)",
                gridThickness: 1,
                labelFontSize: "1rem",
            },
            data: [{
                lineColor: "rgb(69,208,156)",
                type: "spline",
                toolTipContent: "Hour {x}: {y} USD",

                dataPoints: [
                    ...falldata.slice(0, 72).map((e, i) => ({ x: i, y: e }))
                ]
            }]
        }

        let price = falldata.slice(0, 72)[71]
        let dif = (falldata[71] - falldata[0])
        return (
            <div id="rezizable" className="allsize col space_between items_start  pad_l24 pad_r34 mobilepad_0">
                <div className="col">
                    <span className="f700 f_3 mobilepad_l24">{isCrypto ? "Crypto" : "Forex"}</span>
                    <span className="f_3 fore_11 f600 row wrap items_end corebox_3 pad_b27 mobilepad_l24"><span className="f_2 pad_r24">{displaySymbol}</span> <span className="pad_r24">{price}</span> <span className={(dif > 0 ? "fore_green" : "fore_red") + " "}>{dif.toString().slice(0, 10)}</span> </span>
                </div>
                <div className="allsize">
                    <CanvasJSChart onRef={ref => this.chart = ref} options={options} />
                </div>

                <div></div>
            </div>
        );
    }
}