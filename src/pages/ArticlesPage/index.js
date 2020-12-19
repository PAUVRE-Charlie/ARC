/**
 * This file is the page that gathers all the articles of the website.
 * It is composed of two elements: 
 * - a list of categories on the left side of the web page
 * - a list of the articles in the center
 */

/* Packages */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

/* Styles */
import './styles.css';

/* Components */
import ArticleCard from '../../components/ArticleCard';

/* Data */
import colors from '../../data/colors';
import articles from '../../data/articles';
import navigation from '../../data/navigation';

export default function ArticlesPage({match}) {

    useEffect(
		() => {
			/* This function make each card container appear fading from below : the class names are in articleCard.css 
				The number at the end of the timeout function is the delay there is before the animation starts */
			let timer = 0;
			document.querySelectorAll('.articleCardContainer').forEach((obj) => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
                }, timer);
                timer += 100;
			});
		},
		[ match ]
	);

    return (
        <div className="articlesPageContainer">
            {/* Categories */}
            <Link to={process.env.PUBLIC_URL + '/articles/' + navigation.robot.link}>
                <div className="sideTextItem" style={{top: '5%', color: colors.white, opacity: match.params.category === navigation.robot.link ? "100%":'50%'}}>
                    R<span style={{fontSize: match.params.category === navigation.robot.link ? '50px':'0'}}>obot</span>
                </div>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/articles/' + navigation.coupe.link}>
                <div className="sideTextItem" style={{top: '35%', color: colors.darkBlue, opacity: match.params.category === navigation.coupe.link ? "100%":'50%'}}>
                    C<span style={{fontSize: match.params.category === navigation.coupe.link ? '50px':'0'}}>oupe</span>
                </div>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/articles/' + navigation.club.link}>
                <div className="sideTextItem" style={{top: '65%', color: colors.accent, opacity: match.params.category === navigation.club.link ? "100%":'50%'}}>
                    C<span style={{fontSize: match.params.category === navigation.club.link ? '100px':'0'}}>lub</span>
                </div>
            </Link>

            {/* Articles */}
            <div className="articlesContainer">
                { articles && articles.filter(article => article.category === match.params.category).map(article => {
                    return <ArticleCard key={article.id} article={article} />
                })}
            </div>


        </div>
    )
}
