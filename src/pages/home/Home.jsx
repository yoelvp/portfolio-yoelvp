import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LinkShapeButton from '../../components/LinkShapeButton'
import projects from '../../services/projects.json'
import Layout from '../../layout/Layout'

const Home = () => {
  const [mainProjects, setMainProjects] = useState([])

  useEffect(() => {
    setMainProjects(projects.personal)
  }, [])

  const twoFirtPersonalProjects = mainProjects.slice(0, 2)
  console.log(twoFirtPersonalProjects)

  return (
    <Layout>
      <section className="section-hero grid place-content-center">
        <article className="flex justify-start items-center gap-8">
          <img src="/images/profile.png" alt="profile image" className="w-40" />
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-5xl font-title">
              Yoel Valverde
            </h4>
            <span className="text-xl">
              Desarrollador web
            </span>
          </div>
        </article>
      </section>

      <h2 className="section-title text-red-variant">
        ¡Hola mundo!
      </h2>
      <section className="flex flex-col justify-start gap-4 mb-8">
        <div className="mb-4">
          <p className="indent-4 text-justify selection:bg-red" style={{ hyphens: 'auto' }}>
            Soy un joven apasionado por la tecnología y la programación. Estudié en el Instituto de Educación Superior Tecnológico Público Huamachuco, donde obtuve mi título en Computación e Informática en el año 2021.
            En mi tiempo libre, me gusta experimentar con Linux, un sistema operativo de código abierto que me permite personalizar y ajustar mi computadora a mis necesidades.
          </p>
          <br />
          <p className="indent-4 text-justify selection:bg-red" style={{ hyphens: 'auto' }}>
            Si deseas conocer más <Link to="/about" className="text-red selection:bg-white underline hover:no-underline">acerca de mí</Link> o una visión general de mi historial laboral y habilidades no dudes en contactarme. ¡Será un placer trabajar juntos!
          </p>
        </div>
        <div className="flex justify-center">
          <LinkShapeButton to="/about" variant="filled">
            Mi portafolio
          </LinkShapeButton>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title text-red">
          Mi biografía
        </h2>
        <div>
          <article className="mb-8">
            <strong className="inline-block mb-2">
              2002
            </strong>
            <p className="indent-4">
              Nací en un pequeño pueblo Tambillo, La Libertad.
            </p>
          </article>
          <article className="mb-8">
            <strong className="inline-block mb-2">
              2021
            </strong>
            <p className="indent-4">
              Terminé de estudiar mi carrera profesional en el Instituto De Educación Superior Tecnológico Público &quot;Huamachuco&quot;, en Huamachuco, La Libertad.
            </p>
          </article>
          <article className="mb-8">
            <strong className="inline-block mb-2">
              Feb. 2022 - Oct. 2022
            </strong>
            <p className="indent-4">
              Trabajé como desarrollador web en &quot;Possible Corp.&quot;, desarrollando páginas web con tecnologías como: <strong className="font-semibold">HTML</strong>, <strong className="font-semibold">CSS</strong>, <strong className="font-semibold">Javascript</strong>, <strong className="font-semibold">React</strong>, <strong className="font-semibold">Tailwindcss</strong>, <strong className="font-semibold">Bootstrap</strong>, <strong className="font-semibold">SASS</strong>, <strong className="font-semibold">PHP</strong>, <strong className="font-semibold">Laravel</strong> y <strong className="font-semibold">MySQL</strong>.
            </p>
          </article>
          <article className="mb-8">
            <strong className="inline-block mb-2">
              Sep. 2022 hasta la actualidad
            </strong>
            <p className="indent-4">
              Actualmente trabajo como desarrollador <strong className="font-semibold">móvil fullstack</strong> usando tecnologías <strong className="font-semibold">Spring Boot</strong> y <strong className="font-semibold">MySQL</strong> en el backend, tecnologías como <strong className="font-semibold">Java</strong>, <strong className="font-semibold">Retrofit</strong> en el desarrollo móvil y <strong className="font-semibold">React</strong>, <strong className="font-semibold">Styled Components</strong> para desarrollo web.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title text-red mb-4">
          Proyectos recientes
        </h2>
        <div className="flex justify-between items-start gap-4 mb-8">
          {
            twoFirtPersonalProjects.map(project => {
              return (
                <Link
                  to={`/portfolio/${project.id}`}
                  key={project.id}
                  className="inline-bock w-3/6 bg-dark-variant rounded-md overflow-hidden"
                >
                  <div>
                    <img
                      src={project.front}
                      alt={project.alt}
                      className="h-40 w-full object-cover object-top"
                    />
                    <p className="py-2 px-4 font-bold">
                      {project.title}
                    </p>
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className="flex justify-center">
          <LinkShapeButton to="/portfolio" variant="filled">
            Más proyectos
          </LinkShapeButton>
        </div>
      </section>
    </Layout>
  )
}

export default Home
