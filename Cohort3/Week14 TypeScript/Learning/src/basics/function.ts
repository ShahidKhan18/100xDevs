export const functionTypes={
    // ++ Function with type annotations
    basicFunction: function (a:number,b:number):number{  
        return a+b;
    },

    promiseReturnFunction:function (a:number,b:number):Promise<number>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(a+b);
        },2000)
      })
    }
}