import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CheckAuth({ children, setCurrentUser, setPins, setActivities, setBuckits }) {
  let navigate = useNavigate();
  
  // const userInfoReq = fetch('/me').then(res => res.json())

  // userInfoReq.then(userInfo => {
  //   return fetch
  // })

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user.id);
          setPins(user.pins);
          setActivities(user.activities);
          navigate("/");

        });
      }
    });
  }, []);

  return children;
}

export default CheckAuth;
