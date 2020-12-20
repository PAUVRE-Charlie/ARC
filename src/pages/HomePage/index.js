/**
 * This file is the home page of the website.
 * It contains just a hero.
 */

/* Packages */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Styles */
import './styles.css'

/* Components */
import ScrollToTop from '../../components/ScrollToTop';

/* Data */
import colors from '../../data/colors';
import images from '../../data/images';
import navigation from '../../data/navigation';

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
        <ScrollToTop>
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
                
                {/* Logo */}
                <img className="clubLogo" src={images.logo654} alt="logo"/>

                {/* Categories */}
                <div className="categories">
                    <Link to={process.env.PUBLIC_URL + '/articles/' + navigation.robot.link} className="categoryItem" style={{color: colors.white, transform: 'rotate(15deg)'}}>
                        Robot
                    </Link>
                    <Link to={process.env.PUBLIC_URL + '/articles/' + navigation.coupe.link} className="categoryItem" style={{color: colors.darkBlue, transform: 'rotate(-15deg)'}}>
                        Coupe
                    </Link>
                    <Link to={process.env.PUBLIC_URL + '/articles/' + navigation.club.link} className="categoryItem" style={{color: colors.accent, transform: 'rotate(15deg)'}}>
                        Club
                    </Link>
                </div>
                
            </div>
        </ScrollToTop>
    )
}
