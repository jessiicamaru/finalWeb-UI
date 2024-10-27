import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';

import { data } from './provinces';

// eslint-disable-next-line react/prop-types
const HighchartComponent = ({ mapData }) => {
    const options = {
        chart: {
            height: 600 + 'px',
            map: mapData,
            zooming: {
                mouseWheel: {
                    enabled: false,
                },
            },
        },

        yAxis: {
            zoomEnabled: false,
        },

        title: {
            text: '',
        },

        tooltip: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom',
            },
        },

        colorAxis: {
            min: 0,
            stops: [
                [0, '#8fbee2'],
                [1, '#1677ff'],
            ],
        },

        series: [
            {
                data: data,
                name: 'Random data',
                states: {
                    hover: {
                        color: '#5099d2',
                    },
                },
            },
        ],
    };

    highchartsMap(Highcharts);

    return <HighchartsReact highcharts={Highcharts} options={cloneDeep(options)} constructorType={'mapChart'} />;
};

export default HighchartComponent;
