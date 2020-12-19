/**
 * This file is the header component.
 * It is composed of two elements: 
 * - a list of webpage links
 * - a list of social media icons
 */

/* Packages */
import { Link } from 'react-router-dom';

/* Styles */
import './styles.css'

/* Data */
import socialMedia from '../../data/socialMedia';
import navigation from '../../data/navigation';
import colors from '../../data/colors';

export default function Header() {
    return (
        <div className="headerContainer">
            {/* Navigation bar */}
            <div className="navigationContainer">
                { navigation && Object.values(navigation).map(navItem => {
                    return <Link key={navItem.name} to={process.env.PUBLIC_URL + '/articles/' + navItem.link} style={{color: colors.darkBlue}} >{navItem.name}</Link>
                })}
            </div>
            {/* Social media buttons */}
            <div className="socialMediaContainer">
                { socialMedia && Object.values(socialMedia).map(media => {
                    return <a key={media.name} href={media.link}><img src={media.logo} alt={media.name} /></a>
                })}
            </div>
        </div>
    )
}
