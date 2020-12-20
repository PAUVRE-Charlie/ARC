/**
 * This file is an article card component.
 * It is composed of two elements: 
 * - a title
 * - a small preview
 */

/* Packages */
import { Link } from 'react-router-dom';

/* Styles */
import './styles.css'

/* Data */
import colors from '../../data/colors'

export default function ArticleCard({ article }) {
    return (
        <Link className="articleCardContainer" to={process.env.PUBLIC_URL + '/articles/' + article.category + '/' + article.id} style={{color: colors.darkBlue}}> 
            {/* Title */}
            <div className="titleCard">{article.title}</div>
            {/* Preview */}
            <div className="previewCard">{article.preview}</div>
        </Link>
    )
}
