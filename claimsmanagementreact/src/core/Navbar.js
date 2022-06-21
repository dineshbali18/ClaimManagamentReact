
import { Routes, Route, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  return (
    <div style={{}}>
    <nav class="navbar navbar-dark bg-primary">
    <h3 style={{fontWeight:'bold',fontSize:'20px'}}><label style={{color:'snow',fontSize:'40px'}}>C</label>ogzkart <label style={{color:'snow',fontSize:'40px'}}>C</label>laims</h3>
    <h4 style={{color:'snow',padding:'8px',borderStyle:'solid',marginRight:'5px',marginTop:'4px'}}>
    <Link to='/signout' onClick={()=>{removeCookie("token");removeCookie("username")}} style={{color:'snow',fontWeight:'bold'}}>Sign out</Link>
    </h4>
    </nav>
    </div>
  );
}

export default Navbar;
