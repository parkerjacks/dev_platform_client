import React,{useEffect,useState} from "react";
import Container from 'react-bootstrap/Container'
const Profile = () => {
const [user,setUser] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:3001/user/${localStorage.getItem('username')}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.user);
          setUser(data.user)
        });
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      
            <Container>
                <a href={user.github} target='_blank' rel="noreferrer">Github</a>
                <a href={user.linkedin}>LinkedIn</a>
                <a href={user.portfolio}>Portfolio</a>
            </Container>
         
    </div>
  );
};

export default Profile;
