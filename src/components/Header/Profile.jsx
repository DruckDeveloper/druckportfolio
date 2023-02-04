import React from 'react'
import { FormattedMessage } from 'react-intl'
import dylan_profile from '../../assets/images/dylan_profile.jpg'

const Profile = () => {
  return (
    <div className='profile'>
      <picture className='profile__picture'>
          <div className='profile__image'>
            <img src={dylan_profile} alt="Dylan Ramirez" title='Dylan Ramirez' className='profile__image--img'/>
          </div>
      </picture>
      <div className='profile__content'>
        <h2 className='profile__content--name'>
          <FormattedMessage
            id='header.profile-name'
            defaultMessage='Druck Developer'
          />
        </h2>
        <h4 className='profile__content--rol'>
          <FormattedMessage 
            id='header.profile-rol-1'
            defaultMessage='Javascript Full stack developer'
          />
        </h4>
        <h4 className='profile__content--rol'>
          <FormattedMessage 
            id='header.profile-rol-2'
            defaultMessage='AWS cloud practitioner'
          />
        </h4>
      </div>
    </div>
  )
}

export default Profile