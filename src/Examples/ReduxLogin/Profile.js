import { useSelector } from "react-redux";

function Profile() {
  const userState = useSelector((state) => state.user.value);
  const themeState = useSelector((state) => state.theme.value);

  return (
    <div style={{ backgroundColor: themeState }}>
      <h3>Login Profile</h3>
      <p>Name: {userState.name}</p>
      <p>Age: {userState.age}</p>
      <p>Email: {userState.email}</p>
    </div>
  );
}

export default Profile;
