/**
 * This file is the home page of the website.
 * It contains just a hero.
 */

/* Packages */
import { useEffect } from 'react';

/* Styles */
import './styles.css'

/* Data */
import colors from '../../data/colors';
import images from '../../data/images';

export default function HomePage() {

    useEffect(
		() => {
			/* This function make each card container appear fading from below : the class names are in articleCard.css 
				The number at the end of the timeout function is the delay there is before the animation starts */
			let timer = 0;
			document.querySelectorAll('.sideTextItem').forEach((obj) => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
                }, timer);
                timer += 100;
            });
            timer = 0;
			document.querySelectorAll('.sideTextItem').forEach((obj) => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
                }, timer);
                timer += 100;
			});
		}
	);

    return (
        <div className="homePageContainer">
            {/* Club name */}
            <div className="sideTextItem" style={{top: '5%', color: colors.white}}>
                A<span>tlantic</span>
            </div>
            <div className="sideTextItem" style={{top: '35%', color: colors.darkBlue}}>
                R<span>obotic</span>
            </div>
            <div className="sideTextItem" style={{top: '65%', color: colors.accent}}>
                C<span>lub</span>
            </div>
            {/* Robot name */}
            <div className="robotName" style={{color: colors.darkBlue}}><div>PoulpyBot</div></div>
            {/* logo */}
            <img className="clubLogo" src={images.logo654} alt="logo"/>
        </div>
    )
}
