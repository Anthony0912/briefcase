import { useEffect, useState } from 'react'
import { getProjects } from '../../services/project.service'
import Project from '../../interfaces/project.interface'
import { CircularProgress } from '../../helpers/imports/material-ui.imports';

const BriefcaseView = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const abortController: AbortController = new AbortController()
    const fechData = async (): Promise<void> => {
      const response: Project[] = await getProjects()
      setProjects(response)
      setIsLoading(false)
    }

    fechData().catch(console.error)
    return () => abortController.abort()

  }, [])

  return (
    <div className="work section">
      <h2 className="section-title">Portafolio</h2>
      {isLoading ?
        <div className='content-empty-portafolio'>
          <CircularProgress />
        </div>
        : projects.length === 0 && !isLoading ?
        <div className='content-empty-portafolio'>
          <h2>It has not been possible to obtain the projects, please try again later.</h2>
        </div>
          :
          <div className="work__container bd-grid">
            {projects.map((project: Project, index: number) => {
              return <figure key={index} className="c4-izmir c4-border-top-right work__img figure">
                <img src={project.url_image} alt={project.project} />
                <figcaption className="c4-layout-bottom-left c4-reveal-right">
                  <div className="content-code">
                    <div className="content-first-code">
                      <h5>
                        <a
                          href={project.url_repository}
                          className="portafolio__link title-data-hover"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.repository === "GitHub" ?
                            <i className="bx bxl-github"></i> :
                            <i className="bx bxl-gitlab"></i>}
                          <span className="name-icon">{project.repository}</span>
                          <h3 className="title-data-hover">View source code</h3>
                        </a>
                      </h5>
                    </div>
                    {project.url_project_video !== '' ?
                      <div>
                        <h5>
                          <a
                            href={project.url_project_video}
                            className="portafolio__link title-data-hover"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className='bx bxl-youtube'></i>
                            <h3 className="title-data-hover">Watch video</h3>
                          </a>
                        </h5>
                      </div> : ''}
                    {project.url_project !== '' ?
                      <div>
                        <h5>
                          <a
                            href={project.url_project}
                            className="portafolio__link title-data-hover"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.icons_programing_languaje.map((icon: string, index: number) => {
                              return <i key={index} className={icon}></i>
                            })
                            }
                            <h3 className="title-data-hover">Go to {project.project}</h3>
                          </a>
                        </h5>
                      </div> : ''}
                  </div>
                </figcaption>
              </figure>
            })}
          </div>
      }
    </div>
  )
}

export default BriefcaseView
