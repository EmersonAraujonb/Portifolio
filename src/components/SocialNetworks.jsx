import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import '../styles/components/socialNetworks.sass'

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, link:'https://www.linkedin.com/in/emerson-araújo-584b6a227/'},
    {name: 'github', icon: <FaGithub/>, link:'https://github.com/EmersonAraujonb'}

]
const SocialNetworks = () => {
  return (
  <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
        ))}
  </section>
  )
}

export default SocialNetworks