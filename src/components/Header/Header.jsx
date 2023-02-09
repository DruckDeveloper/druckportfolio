import { BiMenu } from 'react-icons/bi'
import Profile from './Profile'
import Navbar from '../navbar/Navbar'
import IconsGrid from './IconsGrid'
import LanguageSelector from '../ui/LanguageSelector'

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <aside className={`web__header ${openMenu ? 'open' : ''}`}>
      <BiMenu className='menu__button' size='3rem' color='#efe' onClick={() => setOpenMenu(!openMenu)} />
      <LanguageSelector />
      <Profile />
      <Navbar />
      <IconsGrid />
    </aside>
  )
}

export default Header
