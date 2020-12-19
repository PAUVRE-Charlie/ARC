/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Data imports */
import images from '../images';

const article = {
    title: "Modélisation 3D",
	author: 'Aziz Sellami',
	preview:
		'La modélisation de notre Robot a différents objectifs. Tout d’abord elle a pour but d’aider à la réflexion sur l’agencement des différents composants du Robot. Ensuite, elle a pour but de prototyper des éléments du robots et des pièces qui pourront par la suite être à l’imprimante 3D.',
	body:{
        objective: {
            title: "Objectif",
            body: (
                <React.Fragment>
                    <p>La modélisation de notre Robot a différents objectifs. Tout d’abord elle a pour but d’aider à la réflexion sur l’agencement des différents composants du Robot. Ensuite, elle a pour but de prototyper des éléments du robots et des pièces qui pourront par la suite être à l’imprimante 3D.</p>
                    <div className="multipleImages">
                        <img className="smallImage" src={images.modelisation3D.robot_front} alt="robot_front"/>
                        <img className="smallImage" src={images.modelisation3D.robot_back} alt="robot_back"/>
                    </div>
                </React.Fragment>
            )
        },
        software_solution: {
            title: "La solution logicielle",
            body: (
                <React.Fragment>
                    <div className="sideViewImage">
                        <img className="smallImage" src={images.modelisation3D.fusion_logo} alt="logo_fusion"></img>
                        <span>Fusion 360 est un logiciel de CAO qui permet de faire de la modélisation 3D, de la fabrication, du dessin industriel et de l'ingénierie électronique et mécanique. Nous avons choisi ce logiciel pour son interface intuitive et sa licence étudiante gratuite.</span>
                    </div>
                </React.Fragment>
            )
        },
        constraints: {
            title: "Les contraintes",
            body: (
                <React.Fragment>
                    <p>Le règlement de la Coupe de France de Robotique exige que le robot respecte des contraintes de dimensions précises. La modélisation permettra alors d’anticiper certaines de ces contraintes, par exemple:</p>
                    <ul>
                        <li>
                            Le périmètre d’un robot ne doit pas excéder 1200 mm au moment du départ. Le périmètre de ce robot totalement déployé ne doit pas excéder 1300 mm au cours du match. (<a href="https://www.coupederobotique.fr/edition-2020/le-concours/thematique/">Règlement</a> - Section F2)<br/>
                            <img className="mediumImage" src={images.modelisation3D.constraints} alt="robot_constraints"></img>
                        </li>
                        <li>À tout instant au cours du match, la hauteur de chaque robot ne doit pas dépasser 350 mm. Cependant, il sera toléré que le bouton d’arrêt d’urgence dépasse de cette hauteur limite pour atteindre 375 mm. (<a href="https://www.coupederobotique.fr/edition-2020/le-concours/thematique/">Règlement</a> - Section F2)</li>
                    </ul>
                    <span>Intégration sur le site:</span>
                    <iframe title="fusion-model" src="https://imtatlantique10.autodesk360.com/shares/public/SH56a43QTfd62c1cd968a8f3514029fc2801?mode=embed" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"  frameBorder={0}></iframe>
                </React.Fragment>
            )
        },
    }
}

export default article;