import '../styles/components/projectsContainer.sass';

import {FaGithub} from 'react-icons/fa';

const projects = [
  {
    id: 'projectImoveis',
    name: 'Projeto Imóveis',
    image: '../../img-projects/Projeto-imoveis-2.png',
  },
  {
    id: 'projectCachorros',
    name: 'Projeto Cachorros Aleatórios',
    image: '../../img-projects/projeto-cachorros-aleatorios.png',
  },
  {
    id: 'projectBitcoin',
    name: 'Projeto Bitcoin',
    image: '../../img-projects/projeto-bitcoin-2.png',
  },
  {
    id: 'projetoCosts',
    name: 'Projeto Costs',
    image: '../../img-projects/projeto-costs.png',
  },
  {
    id: 'projectEcommerce',
    name: 'Projeto Ecommerce',
    image: '../../img-projects/projeto-ecommerce.png',
  },
];

const ProjectsContainer = () => {
  return (
    <section className='projects-container'>
      <h2>Projetos</h2>
      <div className='projects-grid'>
        {projects.map((project) => (
          <div className='projects-card' id={project.id} key={project.id}>
            <div className='projects-info'>
              <h3>{project.name}</h3>
              <img src={project.image} alt='' />
            </div>
          </div>
        ))}
      </div>
      <a
        href='https://github.com/EmersonAraujonb'
        target='_blank'
        className='btn'
      >
        <span> Ver Projetos <FaGithub/></span>
        <i></i>
      </a>
    </section>
  );
};

export default ProjectsContainer;
