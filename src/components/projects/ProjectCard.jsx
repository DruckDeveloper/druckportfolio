import { GrGithub } from 'react-icons/gr'
import { FaRocket } from 'react-icons/fa'

const ProjectCard = ({ title, repo, repoButton, deploy, deployButton, image, tech }) => {
  const backgroundImage = { backgroundImage: `url(${image})` }

  return (
    <div className='project__card' style={backgroundImage}>
      <div className='project__card--content'>
        <h3 className='project__card--content-title'>{title}</h3>
        <div className='project__card--content-skills'>
          {tech?.map((item) => item)}
        </div>
        <div className='project__card--content-buttons'>
          <a href={repo} className='button__container' target='_blank' rel='noreferrer'>
            <GrGithub />
            {repoButton}
          </a>
          <a href={deploy} className='button__container' target='_blank' rel='noreferrer'>
            <FaRocket />
            {deployButton}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
