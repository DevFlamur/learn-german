


export default (state,action) => {
    switch(action.type) {
        case "APPLICATION_SWITCH_LANGUAGE":  
            if(typeof window !== 'undefined' && window.localStorage) { 
                localStorage.setItem("lng",action.payload); 
            }
        return {
            ...state,
            language: action.payload
          } 

          case "APPLICATION_GET_RESOURCE_TEXT": 
        
 return state;
        default:
            return state;
    }
}