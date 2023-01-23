import Avatar from '/IMG_PORTIFOLIO_.png';
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
        <a href="#" className="btn"><span>Download currículo <FaDownload/></span><i></i></a>
    </aside>
  )
}

export default Sidebar