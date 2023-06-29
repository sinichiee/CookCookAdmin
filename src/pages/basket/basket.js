import style from './basket.module.css';
import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const BasketPieChart = () => {

    let [successBasket, setSuccessBasket] = useState(0);
    let [failBasket, setFailBasket] = useState(0);

    useEffect(()=>{
        let timer = setInterval(()=>{
            axios.get("/data/selectSuccessBasket").then((resp)=>{setSuccessBasket(resp.data)});
            axios.get("/data/selectFailBasket").then((resp)=>{setFailBasket(resp.data)});
        },5000);
        return ()=>{clearInterval(timer)}
    },[]);

    const myData = [
        {
          "id": "Success",
          "label": "Success",
          "value": successBasket,
          "color": "hsl(163, 70%, 50%)"
        },
        {
          "id": "Fail",
          "label": "Fail",
          "value": failBasket,
          "color": "hsl(328, 70%, 50%)"
        },
      ];

    return (
        <div style={{width: '800px', height: '500px', }}>
        <h2 style={{textAlign:'center'}}>재료 추출 통계</h2>
        <ResponsivePie
        data={myData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        //pastel1,2,set3
        colors={{ scheme: 'set3' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'test1'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'test2'
                },
                id: 'lines'
            },
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
        </div>
    );
}
