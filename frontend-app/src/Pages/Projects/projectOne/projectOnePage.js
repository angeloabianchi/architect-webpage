import React from "react";
import photoProjectOne from '../../../Components/images/fotoPapeisEnrolados.jpg';
import photoPlanta from '../../../Components/images/plantaArquitectura.jpg';
import './projectOnePage.css';


/* function refreshPage(){ 
    window.location.reload(); 
} */


const projectOnePage = () => {

    // Renderizar na pageOne 
    window.scrollTo(0, 0);

    return(

        <div className="projectContainer">
            <div className="projectContent">
                <div className="pageOne">
                    <img className="photo" src={photoProjectOne} width="300px" alt="Papeis enrolados"/>
                </div>
                <div className="pageTwo">
                    <div className="leftSection">
                        <div className="projectInfo">
                            <h2>CLIENT</h2>
                            <h3>esse eh um texto teste texte testo toste xetxe</h3>
                            <h2>LOCATION</h2>
                            <h3>esse eh um texto teste texte testo toste xetxe</h3>
                            <h2>CATEGORY</h2>
                            <h3>esse eh um texto teste texte testo toste xetxe</h3>
                            <h2>PHOTOGRAPHY</h2>
                            <h3>esse eh um texto teste texte testo toste xetxe</h3>
                            <h2>ARTISANRY</h2>
                            <h3>esse eh um texto teste texte testo toste xetxe</h3>
                        </div>
                        <div className="projectDescription">
                            <h3>çdlasjdlkas lawejna sjdjkalwd iajlwnlda ilasjdljawl dliajldia lisjciawpmdpaw uasehua aueha a sij1ijpd aus81-wn als,c qi aisjdkq scjaondoid sicjoq sijca isisisis aisqçm=1msç akcoqma ajdonuiqbwnpdoq ushdiuq saiodjoq cpajpkoq soq osjda pcjqpmcqç iasjdpqjwpd asjdpqwd asijdpqwdiqwdkmposad iasjdoqjwod</h3>
                        </div>
                    </div>
                    <div className="rightSection">
                        <img className="photoTwo" src={photoPlanta} width="300px" alt="Papeis enrolados"/>
                    </div>
                </div>
                <div className='pageThree'>
                    <div className='leftSection'>
                        <img className="photoThree" src={photoProjectOne} width="300px" alt="Papeis enrolados"/>
                    </div>
                    <div className='rightSection'>
                        <h2>Titulo</h2>
                        <h3>Esaksj asjdpia cappcoa aowekpak aiosjdoajwe doiajdoawjeoiafak'aeahiudhauiw auhaouidja aowjoaijf gpogkef iafjpa aipdjapdo adpajfpaja wpofjapodkjoaw fapojfpaodma dpoajdpaindpiajdpa adijaod aijd aij ij nsad iaidjwanap ksjdia</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default projectOnePage;