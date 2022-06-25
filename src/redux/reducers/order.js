import { findIndex } from "lodash";

/**
 * count state
 */
const initState = [
    {
        id:1001,
        title:"toothpaste"
        
    }
]

/**
 * reducer must be a function
*/
export default function ordernt(state=initState,action){
    switch(action.type){
        case "addOrder":
            //array combination
            return [
                ...state,
                action.order
            ]
        case "delOrder":
            
            //let index = 0;
            let index = findIndex(state,ele=>ele.id===action.id)
            /*
            for(var i=0;i<state.length;i++){
                if(state[i].id ===action.id){
                    index = i;
                }
            }
            */
           
            return[
                //arr = [10,20,30,40,50] arr.slice(0,3)->10,20,30 
                ...state.slice(0,index),
                //arr.slice(3 + 1)  -> 50
                ...state.slice(index+1)
            ]
        default:
            return state;
    }
}