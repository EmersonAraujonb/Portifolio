import Avatar from '/MY_IMG.png';
import Curriculo from '../curriculo/Emerson_Araujo.pdf'
import {FaDownload} from 'react-icons/fa'
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Emerson Araújo" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href={Curriculo} download="curriculo-emerson-araujo.pdf" className="btn"><span>Download currículo <FaDownload/></span><i></i></a>
    </aside>
  )
}

export default Sidebar