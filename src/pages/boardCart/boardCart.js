import { ResponsiveLine } from '@nivo/line';
import { Card, CardHeader } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';


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

    const [boardData, setBoardData] = useState([
        {
            "id": "Review",
            "color": "hsl(242, 70%, 50%)",
            "data": [
                {
                    "x": getFormedDate(6),
                    "y": 0
                },
                {
                    "x": getFormedDate(5),
                    "y": 0
                },
                {
                    "x": getFormedDate(4),
                    "y": 0
                },
                {
                    "x": getFormedDate(3),
                    "y": 0
                },
                {
                    "x": getFormedDate(2),
                    "y": 0
                },
                {
                    "x": getFormedDate(1),
                    "y": 0
                },
                {
                    "x": getFormedDate(0),
                    "y": 0
                },
            ]
        },
        {
            "id": "Free",
            "color": "hsl(229, 70%, 50%)",
            "data": [
                {
                    "x": getFormedDate(6),
                    "y": 0
                },
                {
                    "x": getFormedDate(5),
                    "y": 0
                },
                {
                    "x": getFormedDate(4),
                    "y": 0
                },
                {
                    "x": getFormedDate(3),
                    "y": 0
                },
                {
                    "x": getFormedDate(2),
                    "y": 0
                },
                {
                    "x": getFormedDate(1),
                    "y": 0
                },
                {
                    "x": getFormedDate(0),
                    "y": 0
                },
            ]
        },     
        {
            "id": "Announcement",
            "color": "hsl(66, 70%, 50%)",
            "data": [
                {
                    "x": getFormedDate(6),
                    "y": 0
                },
                {
                    "x": getFormedDate(5),
                    "y": 0
                },
                {
                    "x": getFormedDate(4),
                    "y": 0
                },
                {
                    "x": getFormedDate(3),
                    "y": 0
                },
                {
                    "x": getFormedDate(2),
                    "y": 0
                },
                {
                    "x": getFormedDate(1),
                    "y": 0
                },
                {
                    "x": getFormedDate(0),
                    "y": 0
                },
            ]
        },
    ]
    );

    const [recentBoard, setRecentBoard] = useState({
        Announcement:[{regDate:getFormedDate(6), cnt:0}], 
        Free:[{regDate:getFormedDate(6), cnt:0}], 
        Review:[{regDate:getFormedDate(6), cnt:0}]
    });

    useEffect(()=>{
        axios.get("/data/recentBoardCount")
        .then((resp)=>{

            const tmp = [
                {
                    "id": "Review",
                    "color": "hsl(242, 70%, 50%)",
                    "data": [
                        {
                            "x": getFormedDate(6),
                            "y": resp.data.Review[0].cnt
                        },
                        {
                            "x": getFormedDate(5),
                            "y": resp.data.Review[1].cnt
                        },
                        {
                            "x": getFormedDate(4),
                            "y": resp.data.Review[2].cnt
                        },
                        {
                            "x": getFormedDate(3),
                            "y": resp.data.Review[3].cnt
                        },
                        {
                            "x": getFormedDate(2),
                            "y": resp.data.Review[4].cnt
                        },
                        {
                            "x": getFormedDate(1),
                            "y": resp.data.Review[5].cnt
                        },
                        {
                            "x": getFormedDate(0),
                            "y": resp.data.Review[6].cnt
                        },
                    ]
                },
                {
                    "id": "Free",
                    "color": "hsl(229, 70%, 50%)",
                    "data": [
                        {
                            "x": getFormedDate(6),
                            "y": resp.data.Free[0].cnt
                        },
                        {
                            "x": getFormedDate(5),
                            "y": resp.data.Free[1].cnt
                        },
                        {
                            "x": getFormedDate(4),
                            "y": resp.data.Free[2].cnt
                        },
                        {
                            "x": getFormedDate(3),
                            "y": resp.data.Free[3].cnt
                        },
                        {
                            "x": getFormedDate(2),
                            "y": resp.data.Free[4].cnt
                        },
                        {
                            "x": getFormedDate(1),
                            "y": resp.data.Free[5].cnt
                        },
                        {
                            "x": getFormedDate(0),
                            "y": resp.data.Free[6].cnt
                        },
                    ]
                },     
                {
                    "id": "Announcement",
                    "color": "hsl(66, 70%, 50%)",
                    "data": [
                        {
                            "x": getFormedDate(6),
                            "y": resp.data.Announcement[0].cnt
                        },
                        {
                            "x": getFormedDate(5),
                            "y": resp.data.Announcement[1].cnt
                        },
                        {
                            "x": getFormedDate(4),
                            "y": resp.data.Announcement[2].cnt
                        },
                        {
                            "x": getFormedDate(3),
                            "y": resp.data.Announcement[3].cnt
                        },
                        {
                            "x": getFormedDate(2),
                            "y": resp.data.Announcement[4].cnt
                        },
                        {
                            "x": getFormedDate(1),
                            "y": resp.data.Announcement[5].cnt
                        },
                        {
                            "x": getFormedDate(0),
                            "y": resp.data.Announcement[6].cnt
                        },
                    ]
                },
            ]
            setBoardData(tmp);
            console.log(resp.data);
        });
      }, []);

    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         axios.get("/data/recentBoardCount").then((resp)=>{setRecentBoard(resp.data)});
    //     },5000);
    //     return ()=>{clearInterval(timer)}
    // },[]);

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
                stacked: false,
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

