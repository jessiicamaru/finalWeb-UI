import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';

import { data } from './provinces';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const HighchartComponent = ({ mapData }) => {
    const [solvedData, setSolvedData] = useState(null);

    useEffect(() => {
        if (mapData && Object.keys(mapData).length) {
            // eslint-disable-next-line react/prop-types
            const data = mapData.features.map((item) => {
                return {
                    ...item,
                    properties: {
                        ...item.properties,
                        name: item.properties['alt-name'] || item.properties['woe-name'],
                    },
                };
            });

            console.log(data);

            setSolvedData({ ...mapData, features: data });
        }
    }, [mapData]);
    // console.log(mapData);
    // console.log(solvedData);

    const options = {
        chart: {
            height: 600 + 'px',
            map: solvedData,
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
            enabled: true,
            formatter: function () {
                if (this.color == 'rgb(22,119,255)') return 'Train visits ' + this.key;
                return 'Train does not visit ' + this.key;
            },
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
