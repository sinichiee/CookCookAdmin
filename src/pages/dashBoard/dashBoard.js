import { ResponsiveLine } from '@nivo/line'
import style from './dashBoard.module.css';


const dashBoard = () => {

    const data = [
        {
            "id": "japan",
            "color": "hsl(5, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 24
                },
                {
                    "x": "helicopter",
                    "y": 250
                },
                {
                    "x": "boat",
                    "y": 170
                },
                {
                    "x": "train",
                    "y": 23
                },
                {
                    "x": "subway",
                    "y": 128
                },
                {
                    "x": "bus",
                    "y": 237
                },
                {
                    "x": "car",
                    "y": 112
                },
                {
                    "x": "moto",
                    "y": 230
                },
                {
                    "x": "bicycle",
                    "y": 288
                },
                {
                    "x": "horse",
                    "y": 252
                },
                {
                    "x": "skateboard",
                    "y": 159
                },
                {
                    "x": "others",
                    "y": 133
                }
            ]
        }
    ];

    return (
        <div className='container'>
            <div className={style.box}>
                <div style={{ width: '300px', height: '150px', border: '1px solid black' }}>일일 총 방문자 수</div>
                <div style={{ width: '300px', height: '150px', border: '1px solid black' }}>일일 ~~~~</div>
            </div>
            <div style={{ width: '800px', height: '500px' }}>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000',
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    );
}

export default dashBoard;

