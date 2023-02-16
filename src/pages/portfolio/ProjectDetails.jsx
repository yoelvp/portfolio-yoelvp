import { useState, useEffect } from 'react'
import { Link, useHref, useParams } from 'react-router-dom'
import projects from '../../services/projects.json'
import Layout from '../../layout/Layout'

const ProjectDetails = () => {
  const [project, setProject] = useState({})
  const { slug } = useParams()
  const href = useHref()
  const typesOfProjectsFound = href.includes('works') ? projects.work : projects.personal
  const projectFound = typesOfProjectsFound.find(project => project.slug === slug)

  useEffect(() => {
    getProject()
  }, [])

  const getProject = () => {
    setProject(projectFound)
  }

  return (
    <Layout>
      <div className="my-10 grid grid-cols-1 gap-4">
        <img
          src={project.image}
          alt={project.alt}
          className="rounded-lg border border-white w-full h-auto object-cover object-top"
        />
        <p>
          <Link to="/portfolio" className="text-red font-semibold hover:underline">
            Portfolio
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-xl">
            {project.title}
          </span>
        </p>
      </div>
      <p className="indent-4">
        {project.description}
      </p>
      <div className="mt-4 ml-2">
        <p>
          <strong className="bg-red bg-opacity-60 rounded-[4px] px-1 text-xs text-white mr-2">
            SITIO WEB
          </strong>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-red hover:underline"
          >
            {project.link}
          </a>
        </p>
        <p>
          <strong className="bg-red bg-opacity-60 rounded-[4px] px-1 text-xs text-white mr-2">
            STACK
          </strong>
          <span>
            {project.stack?.join(', ')}
          </span>
        </p>
      </div>

      <div className="my-10 mx-10 grid grid-cols-1 gap-8">
        {project.images?.map(image => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            className="rounded-lg border border-white"
          />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectDetails
