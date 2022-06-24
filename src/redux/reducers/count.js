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
        default:
            return state;
    }
}