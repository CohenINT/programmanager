
import {HTTP_REQUESTS} from  "./config";

document.getElementById("teamviewer").onclick=(event)=>
{
 
    console.log("teamviewer clicked.");


    //call server http request to activate teamviewer 
     
     try{
        const resp = await fetch(HTTP_REQUESTS.runTeamviewer);
        if(!resp.ok)
        {
            throw new Error("Network Error");
        }
         console.log("dada returned:");
        console.log(resp);
        event.path[0].style.border="11px solid green"
        debugger;


     }
     catch(error){
        console.log("Error: "+error.message);

     }
     

 


};



