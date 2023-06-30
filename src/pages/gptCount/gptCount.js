
import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardHeader } from '@mui/material';
import style from './gptCount.module.css';

export const MealPieChart = () => {

    const [mealCount, setMealCount] = useState([]);

    useEffect(() => {
        axios.post('/data/selectMealCount')
            .then((resp) => {
                setMealCount(resp.data);
            });
    }, [])

    const tmp = [
        {
            "id": "mealFailTotal",
            "label": "Fail",
            "value": mealCount.mealFailTotal,
            "color": "hsl(328, 70%, 50%)"
        },
        {
          "id": "mealSuccessTotal",
          "label": "Success",
          "value":  mealCount.mealSuccessTotal,
          "color": "hsl(163, 70%, 50%)"
        },
    ];

    useEffect(()=>{
        const timer = setInterval(()=>{
            axios.get("/data/selectMealCount").then((resp)=>{setMealCount(resp.data)});
        },5000);
        return ()=>{clearInterval(timer)}
    },[]);

    return (
        // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
        <Card {...''} style={{height:400}}>
        <CardHeader title="식단 생성 통계" subheader="" style={{float:'left'}}/>
            <ResponsivePie
                data={tmp}
                margin={{ top: 20, right: 60, bottom: 120, left: 60 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'pastel1' }}
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
                enableArcLinkLabels={false}
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
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 30,
                        translateY: 38,
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
        </Card>
    );
};

export const BasketPieChart = () => {

    const [basketCount, setBasketCount] = useState({
        "basketSuccess":0, "basketFail":0
    });

    useEffect(()=>{
        axios.get("/data/selectBasketCount").then((resp)=>{setBasketCount(resp.data)});
      }, []);

    useEffect(()=>{
        const timer = setInterval(()=>{
            axios.get("/data/selectBasketCount").then((resp)=>{setBasketCount(resp.data)});
        },5000);
        return ()=>{clearInterval(timer)}
    },[]);

    const basketData = [
        {
          "id": "Success",
          "label": "Success",
          "value": basketCount.basketSuccess,
          "color": "hsl(163, 70%, 50%)"
        },
        {
          "id": "Fail",
          "label": "Fail",
          "value": basketCount.basketFail,
          "color": "hsl(328, 70%, 50%)"
        },
      ];

    return (
        <Card {...''} style={{height:400, }}>
        <CardHeader title="재료 추출 통계" subheader="" style={{float:'left'}} />
        <ResponsivePie
        data={basketData}
        margin={{ top: 20, right: 60, bottom: 120, left: 60 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        // pastel1,2,set3
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
        enableArcLinkLabels={false}
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
                translateX: 30,
                translateY: 38,
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
        </Card>
    );
}

export const TotalPieChart = () => {
    const [totalCount, setTotalCount] = useState({
        "totalSuccess":0, "totalFail":0
    });

    useEffect(()=>{
        axios.get("/data/selectTotalCount").then((resp)=>{setTotalCount(resp.data)});
      }, []);

    useEffect(()=>{
        const timer = setInterval(()=>{
            axios.get("/data/selectTotalCount").then((resp)=>{setTotalCount(resp.data)});
        },5000);
        return ()=>{clearInterval(timer)}
    },[]);

    const totalData = [
        {
          "id": "TotalSuccess",
          "label": "TotalSuccess",
          "value": totalCount.totalSuccess,
          "color": "hsl(163, 70%, 50%)"
        },
        {
          "id": "TotalFail",
          "label": "TotalFail",
          "value": totalCount.totalFail,
          "color": "hsl(328, 70%, 50%)"
        },
      ];

    return (
        <Card {...''} style={{height:400}}>
        <CardHeader title="총 이용 통계" subheader="" style={{float:'left',}} />
        <ResponsivePie 
        data={totalData}
        margin={{ top: 20, right: 60, bottom: 120, left: 60 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        // pastel1,2,set3
        colors={{ scheme: 'pastel2' }}
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
        enableArcLinkLabels={false}
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
                translateX: 30,
                translateY: 38,
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
        </Card>
    );
}

export const Pies = () => {
    return(
        <Container className='d-flex w-100'>
            <Row className='w-100'>
            <Col className='w-100' style={{height:'400px'}}>
                <MealPieChart />
            </Col>
            <Col className='w-100' style={{height:'400px'}}>
                <BasketPieChart />
            </Col>
            <Col className='w-100' style={{height:'400px'}}>
                <TotalPieChart />
            </Col>
            </Row>
        </Container>

    )
}
