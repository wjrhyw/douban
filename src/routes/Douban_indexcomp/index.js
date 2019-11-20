import React from 'react';
import {connect} from 'dva';
import {Bind} from 'lodash-decorators';
import {Form, Icon, Input, Button ,Select,Row,Col,Card} from 'hzero-ui';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import "./indexStyle"

@Form.create({})
export default class DoubanIndexcomp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { Meta } = Card;
        return (
            <React.Fragment> 
                <Row>
                    <Col offset={22}>
                    <NavLink to ='/douban/login'>
                        <Button type="primary">登录</Button>
                    </NavLink>
                    </Col>
                </Row>
                <Form layout="inline">
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                    <div className="gutter-box">
                        <Form.Item>
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" style={{objectFit:'cover'}} height='340px' src={require('../../../public/img/index/booklogo.jpg')} />}
                        >
                            <Meta
                                title="读书"
                                description=""
                            />
                        </Card>
                        </Form.Item>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="gutter-box">
                        <Form.Item>
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" style={{objectFit:'cover'}} height='340px' src={require('../../../public/img/index/dianyinglogo.jpg')} />}
                        >
                        <Meta
                            title="电影"
                            description=""
                        />
                        </Card>
                        </Form.Item>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="gutter-box">
                        <Form.Item>
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" style={{objectFit:'cover'}}  height='340px' src={require('../../../public/img/index/musiclogo.jpg')} />}
                        >
                        <Meta
                            title="音乐"
                            description=""
                        />
                        </Card>
                        </Form.Item>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="gutter-box">
                        <Form.Item>
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" style={{objectFit:'cover'}} height='340px' src={require('../../../public/img/index/grouplogo.jpg')} />}
                        >
                        <Meta
                            title="小组"
                            description=""
                        />
                        </Card>
                        </Form.Item>
                    </div>
                    </Col>
                </Row>
                </Form>
            </React.Fragment>
        )
    }
}
