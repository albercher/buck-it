import { useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

function RequireAuth({ children, setCurrentUser, setPins, setActivities, setBuckits }) {
  let navigate = useNavigate();
  
  //   const userInfoReq = fetch('/me').then(res => res.json())

  // userInfoReq.then(userInfo => {
  //   console.log(userInfo)
  // })
  
  
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user.id);
          // setPins(user.pins);
          setActivities(user.activities);
          setBuckits(user.buckits)
        });
      } else {
        navigate("/signin");
      }
    });
  }, []);

  return children;
}

export default RequireAuth;
