import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RequireAuth({ children, setCurrentUser, setPins, setActivities }) {
  let navigate = useNavigate();
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user.id);
          setPins(user.pins);
          setActivities(user.activities);
        });
      } else {
        navigate("/signin");
      }
    });
  }, []);

  return children;
}

export default RequireAuth;
