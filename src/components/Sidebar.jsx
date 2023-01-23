import Avatar from '/IMG_PORTIFOLIO_.png';
import Curriculo from '../curriculo/curriculo.pdf'
import {FaDownload} from 'react-icons/fa'
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {

  const description = 'Emerson Araujo.pdf'
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Emerson Araújo" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href={Curriculo} download={description} className="btn"><span>Download currículo <FaDownload/></span><i></i></a>
    </aside>
  )
}

export default Sidebar