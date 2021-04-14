import React from 'react';
import Picture from '../../Assets/img/EW3A0907.jpg';
import '../Introduction/IntroductionMobile.css'

function IntroductionMobile() {
    return (
        <div className="IntroductionMobile">
            <img src={Picture} alt="FontaineBrian" width="50%" height="50%" className="IntroductionMobilePicture"/>
            <h2 className="IntroductionMobileTitle"> Fontaine Brian</h2>
            <h3>Concepteur développeur d'application</h3>
            <p className="IntroductionMobileText">
                J'ai commencé à exercer dans le domaine de la restauration pendant 3 années, 
                cela m'a permis d'acquérir une relation clientèle. 
                Je me suis reconverti en tant que développeur web et web mobile j'ai suivi une formation à LA MANU Amiens,
                pour ensuite me tourner vers une formation de concepteur et développpeur d'applications. 
            </p>
            <div class="IntroductionMobileButton">
                <a href="https://github.com/BrianFontaine" target="__blank" className="GithubDark"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/brian-fontaine-0375751a5/" target="__blank" className="LinkdeenDark"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}

export default IntroductionMobile
