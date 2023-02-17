import { Link } from 'react-router-dom'

const FirstProjectCard = ({ project }) => {
  return (
    <Link
      to={`/portfolio/personal/${project.slug}`}
      className="inline-bock w-full bg-dark-variant rounded-md overflow-hidden"
    >
      <div>
        <img
          src={project.image}
          alt={project.alt}
          className="h-40 w-full object-cover object-top"
        />
        <div className="flex justify-center items-center my-2 mx-4">
          <h4 className="font-title selection:bg-red">
            {project.title}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default FirstProjectCard
