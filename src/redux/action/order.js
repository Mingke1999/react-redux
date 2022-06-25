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