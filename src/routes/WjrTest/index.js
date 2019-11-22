import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Row, Col, Modal } from 'hzero-ui';
import { Bind } from 'lodash-decorators';
import { connect } from 'dva'
import intl from 'hzero-front/lib/utils/intl';
import {
  SEARCH_FORM_CLASSNAME,
  SEARCH_COL_CLASSNAME,
  SEARCH_FORM_ROW_LAYOUT,
  FORM_COL_4_LAYOUT,
  SEARCH_FORM_ITEM_LAYOUT,
  MODAL_FORM_ITEM_LAYOUT,
} from 'hzero-front/lib/utils/constants';
@connect(mapStateToProps)
@Form.create({ fieldNameProp: null })
export default class SearchForm extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      expandForm: false,
    };
  }

  @Bind()
  handleResetBtnClick(e) {
    e.preventDefault();
    const { form } = this.props;
    form.resetFields();
  }

  @Bind()
  handleSearchBtnClick(e) {
      let {dispatch} =this.props;
    e.preventDefault();
    let res=this.props.form.getFieldsValue();
    console.log('被点击',dispatch);
    dispatch({
        type:'wjrtest/onSearch',
        value:res
    });
    
  }

  @Bind()
  handleExpandForm() {
    this.setState({
      expandForm: true,
    });
  }

  @Bind()
  handleCollectForm() {
    this.setState({
      expandForm: false,
    });
  }


  renderCodeFormItem(formItemLayout = SEARCH_FORM_ITEM_LAYOUT) {
    const { form,list } = this.props;
    return (
      <Form.Item
        {...formItemLayout}
        label={intl.get('module.service.model.modelName.code').d('编码')}
      >
        {form.getFieldDecorator('code')(<Input />)}
      </Form.Item>
    );
  }

  renderNameFormItem(formItemLayout = SEARCH_FORM_ITEM_LAYOUT) {
    const { form } = this.props;
    return (
      <Form.Item
        {...formItemLayout}
        label={intl.get('module.service.model.modelName.name').d('名称')}
      >
        {form.getFieldDecorator('name')(<Input />)}
      </Form.Item>
    );
  }

  renderDescriptionFormItem(formItemLayout = SEARCH_FORM_ITEM_LAYOUT) {
    const { form } = this.props;
    return (
      <Form.Item
        {...formItemLayout}
        label={intl.get('module.service.model.modelName.description').d('描述')}
      >
        {form.getFieldDecorator('description')(<Input />)}
      </Form.Item>
    );
  }
  componentWillMount(){

  }
  render() {
    let { form} = this.props;
    console.log('props是',this.props);
    const { expandForm = false } = this.state;
    return (
        <div>
        <Form className={SEARCH_FORM_CLASSNAME}>
        <Row {...SEARCH_FORM_ROW_LAYOUT}>
          <Col {...FORM_COL_4_LAYOUT}>
            {this.renderCodeFormItem()}
          </Col>
          <Col {...FORM_COL_4_LAYOUT}>
            {this.renderNameFormItem()}
          </Col>
          <Col {...FORM_COL_4_LAYOUT}>
            {this.renderDescriptionFormItem()}
          </Col>
          
          <Col {...FORM_COL_4_LAYOUT} className={SEARCH_COL_CLASSNAME}>
            <Form.Item>
              <Button onClick={this.handleExpandForm}>
                {intl.get('hzero.common.button.viewMore').d('更多查询')}
              </Button>
              <Button onClick={this.handleResetBtnClick}>
                {intl.get('hzero.common.button.reset').d('重置')}
              </Button>
              <Button htmlType="submit" type="primary" onClick={this.handleSearchBtnClick}>
                {intl.get('hzero.common.button.submit').d('提交')}
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row {...SEARCH_FORM_ROW_LAYOUT}>
        <Col {...FORM_COL_4_LAYOUT}>
          <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field7').d('字段24')}
              >
                {form.getFieldDecorator('field24')(<Input />)}
              </Form.Item>
          </Col>
          <Col {...FORM_COL_4_LAYOUT}>
          <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field7').d('字段40')}
              >
                {form.getFieldDecorator('field40')(<Input />)}
              </Form.Item>
          </Col>
          <Col {...FORM_COL_4_LAYOUT}>
          <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field7').d('字段50')}
              >
                {form.getFieldDecorator('field50')(<Input />)}
              </Form.Item>
          </Col>
        </Row>
        <Modal
          maskClosable
          width={520}
          title={intl.get('hzero.common.button.viewMore').d('更多查询')}
          visible={expandForm}
          wrapClassName="ant-modal-sidebar-right"
          transitionName="move-right"
          onCancel={this.handleCollectForm}
          footer={
            [
              <Button
                onClick={this.handleCollectForm}
              >
                {intl.get('hzero.common.button.collected').d('收起查询')}
              </Button>,
              <Button
                onClick={this.handleResetBtnClick}
              >
                {intl.get('hzero.common.button.reset').d('重置')}
              </Button>,
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.handleSearchBtnClick}
              >
                {intl.get('hzero.common.button.search').d('查询')}
              </Button>,
            ]
          }
        >
          <Row {...SEARCH_FORM_ROW_LAYOUT}>
            <Col>
              {this.renderCodeFormItem(MODAL_FORM_ITEM_LAYOUT)}
            </Col>
            <Col>
              {this.renderNameFormItem(MODAL_FORM_ITEM_LAYOUT)}
            </Col>
            <Col>
              {this.renderDescriptionFormItem(MODAL_FORM_ITEM_LAYOUT)}
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field4').d('字段4')}
              >
                {form.getFieldDecorator('field4')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field5').d('字段5')}
              >
                {form.getFieldDecorator('field5')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field6').d('字段6')}
              >
                {form.getFieldDecorator('field6')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field7').d('字段7')}
              >
                {form.getFieldDecorator('field7')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field8').d('字段8')}
              >
                {form.getFieldDecorator('field8')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field9').d('字段9')}
              >
                {form.getFieldDecorator('field9')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field10').d('字段10')}
              >
                {form.getFieldDecorator('field10')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field11').d('字段11')}
              >
                {form.getFieldDecorator('field11')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field12').d('字段12')}
              >
                {form.getFieldDecorator('field12')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field13').d('字段13')}
              >
                {form.getFieldDecorator('field13')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field14').d('字段14')}
              >
                {form.getFieldDecorator('field14')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field15').d('字段15')}
              >
                {form.getFieldDecorator('field15')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field16').d('字段16')}
              >
                {form.getFieldDecorator('field16')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field17').d('字段17')}
              >
                {form.getFieldDecorator('field17')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field18').d('字段18')}
              >
                {form.getFieldDecorator('field18')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field19').d('字段19')}
              >
                {form.getFieldDecorator('field19')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field20').d('字段20')}
              >
                {form.getFieldDecorator('field20')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field21').d('字段21')}
              >
                {form.getFieldDecorator('field21')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field22').d('字段22')}
              >
                {form.getFieldDecorator('field22')(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                {...MODAL_FORM_ITEM_LAYOUT}
                label={intl.get('module.service.model.modelName.field23').d('字段23')}
              >
                {form.getFieldDecorator('field23')(<Input />)}
              </Form.Item>
            </Col>
          </Row>
        </Modal>
      </Form>
      {
          this.props.list.map((item,index)=>{
          return <p key={index} style={{color:'blue',fontSize:'30px'}}>姓名是:{item.name}!!!!年龄是:{item.age}</p>
          })
      }
        </div>
    );
  }
}

function mapStateToProps({wjrtest}){
    console.log('redux中的数据是',wjrtest);
    return {
        ...wjrtest
    }
}