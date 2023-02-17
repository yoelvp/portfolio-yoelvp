import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import projects from '../../services/projects.json'
import ProjectCard from './components/ProjectCard'

const Portfolio = () => {
  const [personalProjects, setPersonalProjects] = useState([])
  const [workProjects, setWorkProjects] = useState([])

  useEffect(() => {
    setPersonalProjects(projects.personal)
    setWorkProjects(projects.work)
  }, [])

  return (
    <Layout paddingTop>
      <div className=""></div>
      <section className="mt-10 mb-20">
        <h2 className="font-title text-2xl text-red mb-4">
          Proyectos personales
        </h2>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {personalProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              to={`personal/${project.slug}`}
            />
          ))}
        </section>
      </section>

      <section className="mt-10 mb-20">
        <h2 className="font-title text-2xl text-red mb-4">
          Proyectos de mi trabajo
        </h2>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {workProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              to={`works/${project.slug}`}
            />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Portfolio
