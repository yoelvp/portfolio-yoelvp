const ProjectCard = ({ project }) => {
  return (
    <article key={project.id}>
      <img
        src={project.image}
        alt={project.alt}
        className="w-full h-48 max-h-48 object-cover object-top rounded-md border border-white"
      />
      <div className="flex justify-center items-center pt-4">
        <h4 className="text-lg font-title font-bold">
          {project.title}
        </h4>
      </div>
    </article>
  )
}

export default ProjectCard
