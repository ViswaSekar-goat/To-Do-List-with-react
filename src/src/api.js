/* eslint-disable no-unsafe-finally */


async function apiReq(url='',optionsObj=null,errMsg=null){
  try{
    const response = await fetch(url,optionsObj)
    if(!response.ok) throw Error("please reload the app")
  }catch(err){
    errMsg = err.message;
  }finally{
    return errMsg;
  }
}

export default apiReq