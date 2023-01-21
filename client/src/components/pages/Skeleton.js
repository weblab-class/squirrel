import React from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";

const Skeleton = ({ userId}) => {
  return (
    //<div className="center block">
     <div className="bigContainer">
      {/* <NavBar/> */}
      {/* <NavBar userId ={userId} handleLogin={handleLogin} handleLogout={handleLogout}/> */}
      {/* <NavBar userId ={userId} handleLogin={handleLogin} handleLogout={handleLogout}/> */}
      {userId ?  <div className="HomeContainer">
        <div className="messagesColumn">
          <Link to="/messages/" className="Title">
              Messages
          </Link>
        </div>
        <div className="forumColumn">
          <div className="Title">Forum</div>
        </div>
        <div className="messagesColumn">
          <div className="eventsColumn">
            <div className="Title">Events</div>
          </div>
          <div className="recommendationsColumn"> 
            <span className="Title">Connections</span>
          </div>
        </div>
    </div>: (<>
    {/* ADD FORUM PAGE!! */}
    {/* <NavBar/> */}
    {/* <NavBar userId ={userId} handleLogin={handleLogin} handleLogout={handleLogout}/> */}
    <div className="forumColumn">
          <div className="Title">Forum</div>
        </div>
    </>)}
     </div>
  );
};

export default Skeleton;

// import React from "react";
// import { Link } from "@reach/router";
// import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

// import NavBar from "../modules/NavBar.js";
// import "../../utilities.css";
// import "./Skeleton.css";
// import "./pages.css";

// //TODO: REPLACE WITH YOUR OWN CLIENT_ID
// const GOOGLE_CLIENT_ID = "FILL ME IN";

// const Skeleton = ({ userId, handleLogin, handleLogout }) => {
//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <NavBar/>
//       {userId ? (
//         <button
//           onClick={() => {
//             googleLogout();
//             handleLogout();
//           }}
//         >
//           Logout
//         </button>
//       ) : (
//         <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
//       )}   
//       <div class="HomeContainer">
//           <div class="messagesColumn">
//             <Link to="/messages/" className="Title">
//                 Messages
//             </Link>
//           </div>
//           <div class="forumColumn">
//             <Link to="/forum/" className="Title">
//                   Forum
//             </Link>
//           </div>
//           <div class="messagesColumn">
//             <div class="eventsColumn">
//               <Link to="/calendar/" className="Title">
//                   Events
//               </Link>
//             </div>
//             <div class="recommendationsColumn"> 
//               <div class="Title">Connections</div>
//             </div>
//           </div>
//       </div>

//     </GoogleOAuthProvider>
//   );
// };

// export default Skeleton;
