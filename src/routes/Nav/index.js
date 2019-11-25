import React from 'react';
import { Menu } from 'choerodon-ui';
import { Bind } from 'lodash-decorators';
export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedKeys: [],
    };
  }
  @Bind()
  handleClick({key,keyPath}) {
    console.log('key值是',key);
    console.log('keypath是什么',keyPath);
    window.location.href=`http://localhost:8000/douban/${key}`;
  }
  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal" selectedKeys={this.state.selectedKeys}>
        <Menu.Item key="movie">电影</Menu.Item>
        <Menu.Item key="music">音乐</Menu.Item>
        <Menu.Item key="reade">读书</Menu.Item>
        <Menu.Item key="group">小组</Menu.Item>
      </Menu>
    );
  }
  componentWillMount() {
    let url = window.location.href;
    console.log('当前的地址栏是', url);
    url.search(/movie/) != -1
      ? this.setState({
          selectedKeys: ['movie'],
        })
      : url.search(/music/) != -1
      ? this.setState({
          selectedKeys: ['music'],
        })
      : url.search(/reade/) != -1
      ? this.setState({
          selectedKeys: ['reade'],
        })
      : this.setState({
          selectedKeys: ['group'],
        });
  }
}
