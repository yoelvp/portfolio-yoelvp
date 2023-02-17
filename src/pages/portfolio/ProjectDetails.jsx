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
          <Link to="/portfolio" className="text-red font-semibold hover:underline selection:bg-white">
            Portfolio
          </Link>
          <span className="mx-2 selection:bg-red">&gt;</span>
          <span className="text-xl selection:bg-red">
            {project.title}
          </span>
        </p>
      </div>
      <p className="indent-4 selection:bg-red">
        {project.description}
      </p>
      <div className="mt-4 ml-2">
        {project.link && (
          <p>
            <strong className="bg-red bg-opacity-60 rounded-[4px] px-1 text-xs text-white mr-2 selection:bg-red">
              SITIO WEB
            </strong>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-red hover:underline selection:bg-white"
            >
              {project.link}
            </a>
          </p>
        )}
        <p>
          <strong className="bg-red bg-opacity-60 rounded-[4px] px-1 text-xs text-white mr-2 selection:bg-red">
            STACK
          </strong>
          <span className="selection:bg-red">
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
