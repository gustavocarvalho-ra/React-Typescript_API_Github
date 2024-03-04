import { UserProps } from '../types/user'

import { MdLocarionPin } from 'react-icons/md'

const User = ({
  login, 
  avatar_url, 
  followers, 
  following, 
  location, 
  starred_url,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p>
        <MdLocarionPin />
        <span>{location}</span>
      </p>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default User