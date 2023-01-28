import React from 'react';
import Navbar from '../navbar/Navbar';
import LanguageSelector from '../ui/LanguageSelector';

const Header = () => {
  return (     
      <header className='web__header'>
        <LanguageSelector />
        <Navbar /> 
      </header>
  )
}

export default Header