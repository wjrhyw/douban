import React from 'react';
require('./login.css');
import Background from '../../../public/img/login.jpg';
import { Form, Input, Button ,Icon,notification  } from 'hzero-ui';
import { Bind } from 'lodash-decorators';
import { connect } from 'dva';
@connect(mapStateToProps)
@Form.create({
    onFieldsChange(props,changedValues){
        props.dispatch({
            type:'indexLogin/AddFields',
            changedValues
        });
      },
      mapPropsToFields(props) {
        return {
          username: Form.createFormField({
            value: props.username.value,
          }),
          password: Form.createFormField({
            value: props.password.value,
          }),
        };
      },
})
export default class Login extends React.Component{
    constructor(){
        super();
    }
    @Bind()
    login(e){
        e.preventDefault();
        const {form,username,password}=this.props;
        console.log(username.value,password.value);
        form.validateFields((err, values) => {
            console.log('err是',err);
            if (!err) {
              console.log(values);
            }
          });
        if(username.value!='wh'||password.value!=123){
            notification.open({
                message:'登录失败',
                description:'请检查用户名和密码',
                placement:'bottomRight',
                icon:<Icon type="warning" style={{color:'red'}}/>
            });
        }else{
            notification.open({
                message:'登录成功',
                placement:'bottomRight',
                icon:<Icon type="check" style={{color:'green'}}/>
            });
        }
        
    }
    render(){
        const {form} = this.props;
        return (
            <div className='login_main'>
                <div style={{
                    backgroundImage:`url(${Background})`,
                    backgroundSize:'cover',
                    height:'530px'
                }}>
                    <Form className='login-form' onSubmit={this.login}>
                        <Form.Item>
                            {
                                form.getFieldDecorator('username',{
                                    rules:[{required:true,message:'请输入用户名'}]
                                })(<Input 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="Username" />)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                form.getFieldDecorator('password',{
                                   rules:[{required:true,message:'请输入密码'}] 
                                })(<Input 
                                 prefix={<Icon type='lock' style={{color:'rgba(0,0,0,.25)'}}></Icon>}
                                 placeholder='password' />)
                            }
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           登录
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
function mapStateToProps({indexLogin}){
    return {
        ...indexLogin
    }
}