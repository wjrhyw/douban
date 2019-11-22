import axios from 'axios';
export function wjrtest_request(value){
    console.log('在被执行',value);
    let res={};
    Object.keys(value).forEach((name)=>{
        if(value[name]!=undefined){
            res[name]=value[name]
        }
    })
    return axios.get('http://10.211.114.186:8080/data/data.json');
}