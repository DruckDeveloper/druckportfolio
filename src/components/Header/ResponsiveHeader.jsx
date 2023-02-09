import { BiMenu } from 'react-icons/bi'

const ResponsiveHeader = ({ setOpenMenu, openMenu }) => {
  return (
    <header className='responsive__header'>
      <BiMenu className='menu__button' size='3rem' color='#efe' onClick={() => setOpenMenu(!openMenu)} />
    </header>
  )
}
export default ResponsiveHeader
