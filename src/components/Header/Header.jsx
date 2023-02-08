import Profile from './Profile'
import Navbar from '../navbar/Navbar'
import IconsGrid from './IconsGrid'
import LanguageSelector from '../ui/LanguageSelector'

const Header = () => {
  return (
    <header className='web__header'>
      <LanguageSelector />
      <Profile />
      <Navbar />
      <IconsGrid />
    </header>
  )
}

export default Header
