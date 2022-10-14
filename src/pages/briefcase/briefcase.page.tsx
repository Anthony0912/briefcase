import { SyntheticEvent, useEffect, useState } from 'react'
import ProjectService from '../../services/project.service';
import HttpClient from '../../helpers/config-services/http-client.config';

import Project from '../../interfaces/project.interface';
import { CircularProgress, TabList, Tab, TabPanel, Box, TabContext } from '../../helpers/imports/material-ui.imports';

const BriefcaseView = (): JSX.Element => {

  
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsExperience, setProjectsExperience] = useState<Project[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState<boolean>(true);
  const [isLoadingProjectsExperience, setIsLoadingProjectsExperience] = useState<boolean>(true);
  const [value, setValue] = useState<string>('1');
  
  
  useEffect(() => {
    const abortController: AbortController = new AbortController();
    const fechData = async (): Promise<void> => {
      const httpClient = new HttpClient();
      const projectService = new ProjectService(httpClient);
      const responseProjects: Project[] = await projectService.getProjects()
      const responseProjectsExperience: Project[] = await projectService.getProjectsExperience()
      setProjects(responseProjects);
      setIsLoadingProjects(false);
      setProjectsExperience(responseProjectsExperience);
      setIsLoadingProjectsExperience(false);
    }

    fechData().catch(() => {
      setProjects([]);
      setIsLoadingProjects(false);
      setProjectsExperience([]);
      setIsLoadingProjectsExperience(false);
    })
    return () => abortController.abort();

  }, [])

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="work section">
      <h2 className="section-title">Portafolio</h2>


      <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box sx={{ color: "#fff", borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="disabled tabs example">
              <Tab sx={{ color: "#fff" }} label="Portfolio Experience" value="1" />
              <Tab sx={{ color: "#fff" }} label="Portfolio University" value="2" />
            </TabList >
          </Box>
          <TabPanel value="1">
            {isLoadingProjectsExperience ?
              <div className='content-empty-portafolio'>
                <CircularProgress />
              </div>
              : projectsExperience.length === 0 && !isLoadingProjectsExperience ?
                <div className='content-empty-portafolio'>
                  <h2>It has not been possible to obtain the projects, please try again later.</h2>
                </div>
                :
                <div className="work__container bd-grid ">
                  {projectsExperience.map((project: Project, index: number) => {
                    return <figure key={index} className="c4-izmir c4-border-top-right work__img figure animate__animated animate__fadeIn">
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
                                  project.repository === "GitLab" ?
                                    <i className="bx bxl-gitlab"></i> : ''
                                }
                                <span className="name-icon">{project.repository}</span>
                                {project.repository ? <h3 className="title-data-hover">View source code</h3> : ''}
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
          </TabPanel>
          <TabPanel value="2">
            {isLoadingProjects ?
              <div className='content-empty-portafolio'>
                <CircularProgress />
              </div>
              : projects.length === 0 && !isLoadingProjects ?
                <div className='content-empty-portafolio'>
                  <h2>It has not been possible to obtain the projects, please try again later.</h2>
                </div>
                :
                <div className="work__container bd-grid">
                  {projects.map((project: Project, index: number) => {
                    return <figure key={index} className="c4-izmir c4-border-top-right work__img figure animate__animated animate__fadeIn">
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
          </TabPanel>

        </TabContext>
      </Box>
    </div >
  )
}

export default BriefcaseView
