import { Link } from 'react-router-dom'
import LinkShapeButton from '../../../components/LinkShapeButton'

const Presentation = () => {
  return (
    <div>
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
    </div>
  )
}

export default Presentation
