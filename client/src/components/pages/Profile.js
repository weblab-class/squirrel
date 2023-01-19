import React from "react";
import { Link } from "@reach/router";

const Profile = (props) => {
    const [user, setUser] = useState()
    const [location, setLocation] = useState()
    const [badges, setBadges] = useState([])
    
    useEffect(() => {
        document.title = "Profile Page";
        get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
      }, []);
    
    if(!user){
        return(<div> Loading! Feel free to grab a coffee as you wait uwu </div>)
    }
    return(
        <>
            <div className="Profile-avatarContainer">
                <div className="Profile-avatar" />
            </div>

            <h1 className="Profile-name u-textLeft">{user.name}</h1>
        </>
    )
}