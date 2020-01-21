export function PostData(type,userData){

    let BaseURL="https://i-temple.pacewisdom.in/api/login";

    return new Promise((resolve,reject)=>{

     fetch(BaseURL+type,{
         method:'POST',
         body:JSON.stringify(userData)
     })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      reject(error);
    });

    });
}