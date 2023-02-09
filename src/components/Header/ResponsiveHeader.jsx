import { BiMenu } from 'react-icons/bi'

const ResponsiveHeader = () => {
  return (
    <header className='responsive__header'>
      <BiMenu
        className='menu__button'
        color='#ffffff'
        size='40px'
      />
    </header>
  )
}
export default ResponsiveHeader
