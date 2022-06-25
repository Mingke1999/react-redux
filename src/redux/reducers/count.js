/**
 * count state
 */

//state
const initState = {
    count:0
}

/**
 * reducer must be a function
*/
export default function count(state= initState,action){
    switch(action.type){
        case "addCount":
            let addState = Object.assign({},state);
            addState.count += action.num;
            return addState;
        case "minCount":
            let minState = Object.assign({},state);
            minState.count -= action.num;
            return minState;
        default:
            return state;
    }
}