// Import icons from React-icons library
import { GrReactjs } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiSass, DiNodejsSmall, DiMongodb } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'
import { SiExpress } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscTerminalLinux } from 'react-icons/vsc'
import { IoIosPeople } from 'react-icons/io'
import { HiChatAlt2 } from 'react-icons/hi'

export const SkillsInfo = {
  // Frontend skills
  front: {
    react: <GrReactjs className='icon reactIcon' color='#61dafb' />,
    html: <AiFillHtml5 className='icon htmlIcon' color='#e34c26' />,
    css: <DiCss3 className='icon cssIcon' color='#264de4' />,
    js: <TbBrandJavascript className='icon jsIcon' color='#f0db4f' />,
    sass: <DiSass className='icon sassIcon' color='#cc6699' />,
    figma: <FiFigma className='icon figmaIcon' color='#a259ff' />
  },
  // Backend skills
  back: {
    nodejs: <DiNodejsSmall className='icon nodeJsIcon' color='#3c873a' />,
    express: <SiExpress className='icon expressJsIcon' color='#3fbd26' />,
    mongodb: <DiMongodb className='icon mongodbIcon' color='#3fbd26' />,
    aws: <FaAws className='icon awsIcon' color='#ff9900' />,
    linux: <VscTerminalLinux className='icon linuxIcon' color='#007c9c' />
  },
  // Soft skills
  soft: {
    teamWork: <IoIosPeople className='icon teamWorkIcon' color='#ffeea8' />,
    successCommunication: <HiChatAlt2 className='icon successComunicationIcon' color='#3fbd26' />
  }
}
