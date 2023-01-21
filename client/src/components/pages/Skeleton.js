import React from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";

<<<<<<< HEAD
const Skeleton = ({ userId }) => {
  return (
    
    //<div className="center block">
     <div>
      
      {userId ?  <div className="HomeContainer">
        <div className="messagesColumn">
          {/* <div class="Title">Messages</div> */}
=======
const Skeleton = ({ userId}) => {
  return (
     <div className="bigContainer">
      {userId ?  <div className="HomeContainer">
        <div className="messagesColumn">
>>>>>>> 9ceba4eeea92a331a57cd3547f4f76cd3088ef0b
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
<<<<<<< HEAD
    {/* ADD FORUM PAGE!! */}
    
=======
    <div className="forumColumn">
          <div className="Title">Forum</div>
        </div>
>>>>>>> 9ceba4eeea92a331a57cd3547f4f76cd3088ef0b
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
