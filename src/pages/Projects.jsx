import { useContext } from 'react'
import LangContext from '../context/LangContext'
import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {
  const { translations } = useContext(LangContext)

  return (
    <section className='projects__section'>
      <h2 className='projects__section--title'>{translations.projects.title}</h2>
      <article className='projects__section--container'>
        {translations.projects.card.map((card) => <ProjectCard key={card.title} title={card.title} image={card.image} repo={card.repo} repoButton={card.repoButton} deploy={card.deploy} deployButton={card.deployButton} />)}
      </article>
    </section>
  )
}

export default Projects
