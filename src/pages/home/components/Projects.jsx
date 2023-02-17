import { useState, useEffect } from 'react'
import projects from '../../../services/projects.json'
import FirstProjectsCard from './FirstProjectsCard'
import LinkShapeButton from '../../../components/LinkShapeButton'

const Projects = () => {
  const [mainProjects, setMainProjects] = useState([])

  useEffect(() => {
    setMainProjects(projects.personal)
  }, [])

  const twoFirtPersonalProjects = mainProjects.slice(0, 2)

  return (
    <section className="mb-10">
      <h2 className="section-title text-red mb-4 selection:bg-white">
        Proyectos recientes
      </h2>
      <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2">
        {twoFirtPersonalProjects.map(project => <FirstProjectsCard key={project.id} project={project} />)}
      </div>
      <div className="flex justify-center">
        <LinkShapeButton to="/portfolio" variant="filled">
          Más proyectos
        </LinkShapeButton>
      </div>
    </section>
  )
}

export default Projects
