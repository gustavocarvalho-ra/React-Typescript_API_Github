import { UserProps } from '../types/user'

import { MdLocationPin } from 'react-icons/md'

import { Link } from 'react-router-dom'

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
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
        <div>
          <p>Estrelas:</p>
          <p>{starred_url}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User