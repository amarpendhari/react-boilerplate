export const setItem = (key:string, value:any):void =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value))
    }
};

export const getItem = (key:string):any => {
    if(typeof window !== 'undefined'){
        const data = localStorage.getItem(key);
        try{
            return (typeof data === 'string')?JSON.parse(data):undefined
        }
        catch(e){
            console.log('invalid json from localstorage');  
        }
    }
    return undefined;
}

export const removeItem = (key:string):void =>{
    if(typeof window !== 'undefined')
        localStorage.removeItem(key);
}

export const removeAllItemForcely = ():void=>{
    if(typeof window !== 'undefined')
        localStorage.clear();
}

export const clear = () => {
    const lsKeys = Object.keys(localStorage);
    lsKeys.forEach(key => {
        localStorage.removeItem(key);
    });
};
