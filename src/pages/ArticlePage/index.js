/**
 * This file is the page that focus a single article.
 * It is composed of two elements: 
 * - a list of categories on the left side of the web page
 * - the article in the center-right
 */

/* Packages */
import { Fragment, useEffect, useState  } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';

/* Styles */
import './styles.css';

/* Data */
import colors from '../../data/colors';
import articles from '../../data/articles';
import navigation from '../../data/navigation';

export default function ArticlesPage({match}) {

    const [ article, setArticle ] = useState({});

    useEffect(
		() => {
            setArticle(articles.find((article) => article.id === match.params.id));
            /* This function make each containers of these classes appear fading from below : the class names are in article.css 
                The number at the end of the timeout function is the delay there is before the animation starts */
            document.querySelectorAll('.articleContainer').forEach((obj) => {
                setTimeout(function() {
                    obj.classList.add('fadeAndMoveFromBelowArticle');
                }, 0);
            });
		},
		[ match ]
	);

    return (
        <div className="articlePageContainer">
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

            {/* Article */}
            { article && 
                <div className="articleContainer">
                    {/* the title section of the article */}
                    <div className="articleTitleSection">
                        <p className="articleTitle" style={{ color: colors.darkBlue }}>
                            {article.title}
                        </p>
                        <p className="articleSubtitle" style={{ color: colors.accent }}>
                            {article.author}
                        </p>
                    </div>
                    {/* the contents section of the article */}
                    <div className="articleContents">
                        { article.body && Object.values(article.body).length > 1 && Object.keys(article.body).map(section =>{
                            return <LinkScroll key={"contents"+section} to={(section)} style={{color: colors.darkBlue}}>{article.body[section].title}</LinkScroll>
                        })}
                    </div>
                    
                    {/* the body of the article */}
                    <div className="articleBody" style={{ color: colors.darkBlue }}>
                        { article.body && (
                            Object.values(article.body).length > 1 ?(
                                Object.values(article.body).map(section =>{
                                    return <Fragment key={"body"+section.title}>
                                        <h2 id={Object.keys(article.body).find(key => article.body[key] === section)}>{section.title}</h2>
                                        {section.body}
                                    </Fragment>
                                })
                            ) : Object.values(article.body).map(section =>{
                                return <Fragment key={"body"+section.title}>
                                    {section.body}
                                </Fragment>
                            })
                        )}
                    </div>
                </div>
            }
        </div>
    )
}
