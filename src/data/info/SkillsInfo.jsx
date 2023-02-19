// Import icons from React-icons library
// Frontend icons
import { GrReactjs } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiSass, DiNodejsSmall, DiMongodb } from 'react-icons/di'
import { TbBrandJavascript, TbApi } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'
// Bckend icons
import { SiExpress, SiTailwindcss } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscTerminalLinux } from 'react-icons/vsc'
// Soft skills icons
import { IoIosPeople } from 'react-icons/io'
import { HiChatAlt2 } from 'react-icons/hi'

export const SkillsInfo = {
  // Frontend skills
  front: {
    react: <GrReactjs className='icon reactIcon' color='#61dafb' title='React.js' />,
    html: <AiFillHtml5 className='icon htmlIcon' color='#e34c26' title='HTML' />,
    css: <DiCss3 className='icon cssIcon' color='#264de4' title='CSS' />,
    tailwindcss: <SiTailwindcss className='icon tailwindcssIcon' color='#06B6D4' />,
    js: <TbBrandJavascript className='icon jsIcon' color='#f0db4f' title='javascript' />,
    sass: <DiSass className='icon sassIcon' color='#cc6699' title='SASS' />,
    figma: <FiFigma className='icon figmaIcon' color='#a259ff' title='Figma' />
  },
  // Backend skills
  back: {
    nodejs: <DiNodejsSmall className='icon nodeJsIcon' color='#3c873a' title='Node.js' />,
    express: <SiExpress className='icon expressJsIcon' color='#3fbd26' title='Express.js' />,
    mongodb: <DiMongodb className='icon mongodbIcon' color='#3fbd26' title='Mongodb' />,
    aws: <FaAws className='icon awsIcon' color='#ff9900' title='AWS' />,
    linux: <VscTerminalLinux className='icon linuxIcon' color='#007c9c' title='Linux' />,
    api: <TbApi className='icon apiIcon' color='#f0db4f' title='Api rest' />
  },
  // Soft skills
  soft: {
    teamWork: <IoIosPeople className='icon teamWorkIcon' color='#ffeea8' />,
    successCommunication: <HiChatAlt2 className='icon successComunicationIcon' color='#3fbd26' />
  }
}
