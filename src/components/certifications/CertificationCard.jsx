const CertificationCard = ({ title, image, link, button }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <img src={image} alt={title} />
      </div>
      <a href={link} target='_blank' rel='noreferrer'>{button}</a>
    </div>
  )
}
export default CertificationCard
