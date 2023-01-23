import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationContainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiOutlineWhatsApp id='whatsapp-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(77) 99864-8013</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>emersonsantos0302@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Barreiras / BA</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer