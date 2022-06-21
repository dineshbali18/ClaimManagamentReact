import { AUTH_API, CLAIM_API } from "../../backend";
import { MEM_API } from "../../backend";

export const postSubmitClaim =( user,token)=> {
    console.log(token,user)

    return fetch(`${MEM_API}/submitClaim`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        // console.log("BaliRes",response.json());
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const getbills=(token,username)=>{
    console.log(token);
    return fetch(`${MEM_API}/viewBills/${username}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        return err;
    })
}

export const getclaimStatus=(token,claimId)=>{
    return fetch(`${MEM_API}/getClaimStatus/${claimId}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        return err;
    })
}

export const getClaimIds=(token,username)=>{
    console.log(token)
    console.log(username)
    return fetch(`${CLAIM_API}/get/individual/claims/${username}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        return err;
    })
}