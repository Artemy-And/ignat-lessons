export let updateObjectInArray =(items:any,itemId:any, objPropsName:string,newObjProps:any )=>{
    return items.map((u:any) => {
        if (u[objPropsName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}