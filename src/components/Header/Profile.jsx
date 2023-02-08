import { useContext } from 'react'
import LangContext from '../../context/LangContext'
import dylanProfile from '../../assets/images/dylan_profile.jpg'

const Profile = () => {
  const { translations } = useContext(LangContext)

  return (
    <div className='profile'>
      <picture className='profile__picture'>
        <div className='profile__image'>
          <img src={dylanProfile} alt='Dylan Ramirez' title='Dylan Ramirez' className='profile__image--img' />
        </div>
      </picture>
      <div className='profile__content'>
        <h2 className='profile__content--name'>
          {translations.header.profileName}
        </h2>
        <h4 className='profile__content--rol'>
          {translations.header.profileRol1}
        </h4>
        <h4 className='profile__content--rol'>
          {translations.header.profileRol2}
        </h4>
      </div>
    </div>
  )
}

export default Profile
