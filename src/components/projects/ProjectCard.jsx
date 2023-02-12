const ProjectCard = ({ title, repo, repoButton, deploy, deployButton, image }) => {
  const backgroundImage = { backgroundImage: `url(${image})` }

  return (
    <div className='project__card' style={backgroundImage}>
      <h3>{title}</h3>
      <a href={repo}>{repoButton}</a>
      <a href={deploy}>{deployButton}</a>
    </div>
  )
}

export default ProjectCard
