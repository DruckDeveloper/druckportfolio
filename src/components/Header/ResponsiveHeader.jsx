import { BiMenu } from 'react-icons/bi'

const ResponsiveHeader = () => {
  return (
    <header className='responsive__header'>
      <BiMenu
        className='menu__button'
        color='#ffffff'
        size='35px'
      />
    </header>
  )
}
export default ResponsiveHeader
