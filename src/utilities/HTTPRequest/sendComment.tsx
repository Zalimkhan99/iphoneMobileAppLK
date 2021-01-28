
import React from "react";
let status:string = "false"

export default  function sendComment(request:string ) {
    fetch(request)
        .then((response)=>{
            if(response.ok){
                console.log("Коментарий был отправлен")
            }
            else{
                alert("Комментарий не был отправлен, из-за проблем с соединением, попробуйте снова!")
               console.log("Ошибка")


            }
        }).catch((error)=> console.log(error))


}


