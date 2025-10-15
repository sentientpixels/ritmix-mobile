import { useEffect, useState } from "react";
import "./DynamicProfile.scss";
import { authGetLoggedInUser } from "../auth";
import AccountsPage from "./AccountsPage";

// smart component that conidtionally renders login/signup/choose profile page
// or the profile page of the logged in user
export default function DynamicProfile() {

  const [user, setUser] = useState(null)
  const [displayComponent, setDisplayComponent] = useState(<AccountsPage />)

  const loadUser = async () => {
    const _user = authGetLoggedInUser()
    setUser(_user)
  }

  useEffect(() => {
    if (user === null){
      setDisplayComponent(<AccountsPage />)
    }
  }, [user])

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <div id="DynamicProfile">
      { displayComponent }
    </div>
  );
}
