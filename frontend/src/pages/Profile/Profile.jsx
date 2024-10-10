import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/users";
import UserProfile from "../../components/UserProfile";
import { NavbarComponent } from "../../components/NavbarComponent";
import AllPosts from "../../components/AllPosts";
import Container from "react-bootstrap/esm/Container";

export function Profile() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  // GET USER
  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedIn = token !== null;
    if (loggedIn) {
      getUser(token)
        .then((data) => {
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user)); // add all user data to local storage
          localStorage.setItem("username", data.user.username); // adds username to local storage
          localStorage.setItem("token", data.token);
        })
        .catch((err) => {
          console.error(err);
          navigate("/login");
        });
    }
  }, [navigate]);

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  return (
    <>
      <NavbarComponent />
      <Container>
      <h1 className="my-4 text-center">My Profile</h1>
      <div>{user && <UserProfile user={user} key={user._id} />}</div>
      <div className="text-start mx-4">
      <p className="text-dark"><a href="/users/me/update">Edit my profile</a></p>
      </div>
      <hr className="my-4" />
      <div className="feed mt-4" role="feed">
        <h1 className="my-4 ml-5">Your posts </h1>
        <AllPosts user={user} postFilter="currentUser" />
      </div>
      </Container>
    </>
  );
}
