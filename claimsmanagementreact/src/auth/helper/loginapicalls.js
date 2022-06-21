import { AUTH_API } from "../../backend";

export const signin = user => {
    console.log(user)
    return fetch(`${AUTH_API}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        // console.log("BaliRes",response.json());
        return response.json();
      })
      .catch(err => console.log(err));
  };
  