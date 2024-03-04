import { UserProps } from "../types/user";

import Search from "../components/Search"
import User from '../components/User'

import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async(userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json();

    const {avatar_url, login, location, followers, following, starred_url} = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      starred_url,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user}/>}
    </div>
  )
}

export default Home;