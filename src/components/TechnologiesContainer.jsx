import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiSass } from 'react-icons/di';
import { SiVuetify, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiMaterialui, SiTypescript } from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb'
import { FaVuejs } from 'react-icons/fa';


import '../styles/components/technologiesContainer.sass';

const technologies = [
  {
    id: 'html',
    name: 'HTML5',
    icon: <DiHtml5 />,
    description:
      'É uma linguagem de marcação utilizada na construção de páginas na Web.',
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: <DiCss3 />,
    description: 'É um mecanismo para adicionar estilo a um documento web.',
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: <DiJsBadge />,
    description:
      'É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.',
  },
  {
    id: 'react',
    name: 'React',
    icon: <DiReact />,
    description:
      'O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. ',
  },
  {
    id: 'vue',
    name: 'Vue',
    icon: <FaVuejs />,
    description:
      'É um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única. ',
  },
  {
    id: 'nextJs',
    name: 'Next.js',
    icon: <TbBrandNextjs />,
    description:
      'O NextJs por ser um framework do React tem basicamente a mesma sintaxe e forma de codificar, utilizando as mesmas funcionalidades de state e props.',
  },
  {
    id: 'vuetify',
    name: 'Vuetify',
    icon: <SiVuetify />,
    description:
      'O Vuetify é uma estrutura de interface do usuário sem habilidades de design necessárias com componentes Vue lindamente criados à mão.',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwindcss',
    icon: <SiTailwindcss />,
    description:
      'Tailwind CSS funciona verificando todos os seus arquivos HTML, componentes JavaScript e quaisquer outros modelos para nomes de classe, gerando os estilos correspondentes e, em seguida, gravando-os em um arquivo CSS estático.',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: <SiBootstrap />,
    description:
      'O Bootstrap é um kit de ferramentas de front-end poderoso e repleto de recursos. Construa qualquer coisa — do protótipo à produção — em minutos.',
  },
  {
    id: 'styled-components',
    name: 'Styled components',
    icon: <SiStyledcomponents />,
    description:
      'Utilizando literais de modelo marcados (uma adição recente ao JavaScript) e o poder do CSS, styled-components permite que você escreva código CSS real para estilizar seus componentes.',
  },
  {
    id: 'material-ui',
    name: 'MaterialUi',
    icon: <SiMaterialui />,
    description:
      'O MUI oferece um conjunto abrangente de ferramentas de interface do usuário para ajudá-lo a enviar novos recursos mais rapidamente.',
  },
  {
    id: 'typescript',
    name: 'Typescript',
    icon: <SiTypescript />,
    description:
      'TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.',
  },
  {
    id: 'sass',
    name: 'Sass',
    icon: <DiSass />,
    description:
      'Sass é a linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo.',
  },
];

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
