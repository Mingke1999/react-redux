export function addOrder(order){
    return{
        type:"addOrder",
        order
    }
}

export function delOrder(id){
    return{
        type:"delOrder",
        id
    }

}

/**
 * async processing
 */

export function asyncAddOrder(url){
    return dispatch =>{
        fetch(url).then(res=>res.json())
        .then(data=>{
            dispatch(addOrder(data.banner))
        })
    }
}