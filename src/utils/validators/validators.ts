export const required = (value:any) =>{
if (value)return undefined;
return 'Field required'
}



export const  maxLengthCreator = (maxLength:any)=>(value:string)=>{
    if (value.length > maxLength)return `Max lenght is ${maxLength} symbols`
    return undefined
}

