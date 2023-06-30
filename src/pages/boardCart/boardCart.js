import { ResponsiveLine } from '@nivo/line';
import { Card, CardHeader } from '@mui/material';


export const BoardChart = () => {

    function getFormedDate(num) {
        const today = new Date();
        const cloneDate = new Date(today);
        cloneDate.setDate(cloneDate.getDate() - num);
        // const formedYear = cloneDate.getUTCFullYear();
        const formedMonth = cloneDate.getUTCMonth() + 1 > 10 ? cloneDate.getUTCMonth + 1 : `0${(cloneDate.getUTCMonth() + 1)}`;
        const formedDate = cloneDate.getDate() >= 10 ? cloneDate.getDate() : `0${cloneDate.getDate()}`;
        return `${formedMonth}/${formedDate}`;
    }

    const boardData = [
        {
            "id": "Review",
            "color": "hsl(242, 70%, 50%)",
            "data": [
                {
                    "x": getFormedDate(6),
                    "y": 47
                },
                {
                    "x": getFormedDate(5),
                    "y": 15
                },
                {
                    "x": getFormedDate(4),
                    "y": 134
                },
                {
                    "x": getFormedDate(3),
                    "y": 109
                },
                {
                    "x": getFormedDate(2),
                    "y": 16
                },
                {
                    "x": getFormedDate(1),
                    "y": 89
                },
                {
                    "x": getFormedDate(0),
                    "y": 285
                },
            ]
        },
        {
            "id": "Free",
            "color": "hsl(229, 70%, 50%)",
            "data": [
                {
                    "x": getFormedDate(6),
                    "y": 8
                },
                {
                    "x": getFormedDate(5),
                    "y": 126
                },
                {
                    "x": getFormedDate(4),
                    "y": 42
                },
                {
                    "x": getFormedDate(3),
                    "y": 45
                },
                {
                    "x": getFormedDate(2),
                    "y": 161
                },
                {
                    "x": getFormedDate(1),
                    "y": 107
                },
                {
                    "x": getFormedDate(0),
                    "y": 115
                },
            ]
        },     
        {
            "id": "Announcement",
            "color": "hsl(66, 70%, 50%)",
            "data": [
                {
                    "x": getFormedDate(6),
                    "y": 106
                },
                {
                    "x": getFormedDate(5),
                    "y": 249
                },
                {
                    "x": getFormedDate(4),
                    "y": 266
                },
                {
                    "x": getFormedDate(3),
                    "y": 46
                },
                {
                    "x": getFormedDate(2),
                    "y": 111
                },
                {
                    "x": getFormedDate(1),
                    "y": 242
                },
                {
                    "x": getFormedDate(0),
                    "y": 109
                },
            ]
        },
    ];

    return(
        <Card {...''} style={{height:459}}>
        <CardHeader title="Board Postings" subheader="" style={{float:'left'}}/>
        <ResponsiveLine
            data={boardData}
            margin={{ top: 10, right: 30, bottom: 140, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'pastel2' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh='true'
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 65,
                    itemsSpacing: 30,
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
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        </Card>
    );
}

