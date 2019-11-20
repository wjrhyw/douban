export default {
    namespace: 'indexLogin',
    state:{
      username:{
        value:''
      },
      password:{
        value:''
      }
    },
    reducers: {
        'AddFields'(state,{changedValues}){
            let newState=JSON.parse(JSON.stringify(state));
            newState[Object.keys(changedValues)[0]].value={...changedValues[Object.keys(changedValues)[0]]}.value;
            return newState;
        }
    },
    effects: {
      
    },  
  };