import React from 'react';
import { connect } from 'dva';
import { Row, Col, Input, Pagination, List, Card } from 'choerodon-ui';
import { Bind } from 'lodash-decorators';
import Nav from '../Nav/index';
@connect(mapStateToProps)
export default class Reade extends React.Component {
  constructor(props) {
    super(props);
    let { readelist1 } = this.props;
    this.state = {
      list: readelist1,
    };
  }
  @Bind()
  change(page) {
    if (page == 2) {
      this.setState({
        list: this.props.readelist2,
      });
    }
    if (page == 3) {
      this.setState({
        list: this.props.readelist3,
      });
    }
    if (page == 4) {
      this.setState({
        list: this.props.readelist4,
      });
    }
    if (page == 1) {
      this.setState({
        list: this.props.readelist1,
      });
    }
  }
  @Bind()
  renderlist(list) {
    return (
      <List
        grid={{  column: 6 }}
        dataSource={list}
        renderItem={item => (
          <List.Item style={{backgroundColor:'#E8E8E8',marginLeft:'2px',marginRight:'2px',textAlign:'center'}}>
            {item}
          </List.Item>
        )}
      />
    );
  }
  render() {
    return (
      <div
        style={{
          paddingTop: '10px',
        }}
      >
        <Nav />
        <Row style={{ marginTop: '20px',paddingBottom:'20px',backgroundColor:'#F6F6F1'}}>
          <Col span={3} style={{ textAlign: 'center', fontSize: '24px' }}>
            豆瓣读书
          </Col>
          <Col span={21} style={{ textAlign: 'left', paddingLeft: '5px' }}>
            <Input.Search
              style={{
                width: '600px',
              }}
              placeholder="书名, 作者, ISBN"
              onSearch={value => console.log(value)}
              enterButton
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px',paddingBottom:'10px',borderBottom:'0.4px solid black' }}>
          <Col span={3} style={{ textAlign: 'center', fontSize: '20px' }}>
            新书快递
          </Col>
          <Col span={2} style={{ fontSize: '16px', paddingTop: '3px', textAlign: 'left' }}>
            <a>更多>></a>
          </Col>
          <Col span={19} style={{ textAlign: 'right', paddingRight: '320px' }}>
            <Pagination
              defaultCurrent={1}
              total={40}
              tiny={false}
              showTotal={false}
              showSizeChanger={false}
              onChange={this.change}
            />
          </Col>
        </Row>
        <Row style={{ paddingLeft: '50px', marginTop: '15px' }}>
          <Col span={18}>
            <List
              grid={{ column: 4 }}
              dataSource={this.state.list}
              size="small"
              renderItem={item => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 150 }}
                    cover={
                      <img
                        alt="example"
                        src={item.src}
                        style={{ width: '150px', height: '150px' }}
                      />
                    }
                  >
                    <Card.Meta title={item.name} description={item.author} />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>
            <Row>
              <Col>文学</Col>
              <Col>{this.renderlist(this.props.list1)}</Col>
            </Row>
            <Row>
              <Col>流行</Col>
              <Col>{this.renderlist(this.props.list2)}</Col>
            </Row>
            <Row>
              <Col>文化</Col>
              <Col>{this.renderlist(this.props.list3)}</Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
function mapStateToProps({ reade }) {
  return {
    ...reade,
  };
}
