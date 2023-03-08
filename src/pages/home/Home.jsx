import Layout from '../../layout/Layout'

import Biography from './components/Biography'
import Presentation from './components/Presentation'
import Projects from './components/Projects'

const Home = () => {
  return (
    <Layout>
      <section className="section-hero grid place-content-center">
        <article className="flex flex-col justify-start items-center gap-8 sm:flex-row">
          <img src="/images/profile.png" alt="profile image" className="w-40" />
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-5xl font-title selection:bg-red selection:text-white">
              Yoel Valverde
            </h4>
            <span className="text-xl selection:bg-red selection:text-white">
              Desarrollador web
            </span>
          </div>
        </article>
      </section>

      <Presentation />
      <Biography />
      <Projects />
    </Layout>
  )
}

export default Home
