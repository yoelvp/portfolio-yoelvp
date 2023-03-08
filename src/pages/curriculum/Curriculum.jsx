import Layout from '../../layout/Layout'

const Curriculum = () => {
  return (
    <Layout>
      <section className="grid grid-cols-1 gap-4 md:gap-8 w-full">
        <div>
          <h4 className="section-title">
            Experiencia
          </h4>

          <section>
            <div className="mt-4">
              <div className="flex justify-start items-end gap-2">
                <p className="inline border border-red rounded-xl px-2 py-[1px] uppercase text-sm">
                  Oct. 2022 - Mar. 2023
                </p>
                <span className="text-gray">
                  Possible Corp.
                </span>
              </div>
              <div className="flex justify-content items-start gap-2 ml-4">
                <hr className="bg-red-variant border-none h-20 px-[1px]" />
                <article className="mt-2">
                  <h4 className="text-red">
                    Desarrollador móvil
                  </h4>
                  Desarrollo de una aplicación móvil para pagos por medio de moneda digital, suscripción de establecimientos y clientes asociados a Possible Corp.
                  <p>
                  </p>
                </article>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start items-center gap-2">
                <p className="inline border border-red rounded-xl px-2 py-[1px] uppercase text-sm">
                  Feb. 2022 - Oct. 2022
                </p>
                <span className="text-gray">
                  Possible Corp.
                </span>
              </div>
              <div className="flex justify-content items-start gap-2 ml-4">
                <hr className="bg-red-variant border-none h-20 px-[1px]" />
                <article className="mt-2">
                  <h4 className="text-red">
                    Desarrollador web
                  </h4>
                  Desarrollador de aplicaciones web para la empresa, empresas externas las cuáles hacian uso de nuestros servicios de desarrollo de páginas web.
                  <p>
                  </p>
                </article>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start items-center gap-2">
                <p className="inline border border-red rounded-xl px-2 py-[1px] uppercase text-sm">
                  Nov. 2021 - Dic. 2021
                </p>
                <span className="text-gray">
                  Instituto De Educación Superior Tecnológico Público Huamachuco
                </span>
              </div>
              <div className="flex justify-content items-start gap-2 ml-4">
                <hr className="bg-red-variant border-none h-20 px-[1px]" />
                <article className="mt-2">
                  <h4 className="text-red">
                    Desarrollador web
                  </h4>
                  <p>
                    Fue un proyecto en grupo, donde desarrollamos una pequeña <strong>landing page</strong> y un sistema para la gestion y administración de eventos que realizaba una empresa que se dedica al alquiler y organización de eventos, también el registro y administración de su personal.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-4">
          <h4 className="section-title">
            Educación
          </h4>

          <section className="mt-4">
            <div className="flex justify-start items-center gap-2">
              <p className="inline border border-red rounded-xl px-2 py-[1px] uppercase text-sm">
                Abr. 2019 - Dic. 2021
              </p>
              <span className="text-gray">
                Instituto De Educación Superior Tecnológico Público Huamachuco
              </span>
            </div>
            <article className="flex justify-content items-start gap-2 ml-4">
              <hr className="bg-red-variant border-none h-20 px-[1px]" />
              <div className="mt-2">
                <h4 className="text-red">
                  Computación E Informática
                </h4>
                <p>
                  Estudié <strong>Computación E Informática</strong> en el Instituto de Educación Superior tecnológico Público de Huamachuco, donde empecé a aprender programación, fue donde empecé a conocer el increíble mundo del desarrollo de software y aplicaciones web.
                </p>
              </div>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default Curriculum

