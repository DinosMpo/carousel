import React from 'react';
import {newsFeed} from './news';
import './Articles.css';

function Articles(props) {
	const { index } = props;
	const article = newsFeed[index];

	return(
		<div>
			<table className='article-grid'>
				<tr className='article-row'>
					<td>
						<div className='article'>
							<img alt='article' src={article.image} width='300px' height='300px'/>
							<div className='article-information'>
								<h3 className='article-title'>{article.title}</h3>
								<p className='article-description'>{article.description}</p>
							</div>
						</div>
					</td>
					<td >
						<div className='article'>
							<img alt='article' src={article.image} width='300px' height='300px'/>
							<div className='article-information'>
								<h3 className='article-title'>{article.title}</h3>
								<p className='article-description'>{article.description}</p>
							</div>
						</div>
					</td>
					<td >
						<div className='article'>
							<img alt='article' src={article.image} width='300px' height='300px'/>
							<div className='article-information'>
								<h3 className='article-title'>{article.title}</h3>
								<p className='article-description'>{article.description}</p>
							</div>
						</div>
					</td>
				</tr>

				<tr className='article-row'>
					<td >
						<div className='article'>
							<img alt='article' src={article.image} width='300px' height='300px'/>
							<div className='article-information'>
								<h3 className='article-title'>{article.title}</h3>
								<p className='article-description'>{article.description}</p>
							</div>
						</div>
					</td>
					<td >
						<div className='article'>
							<img alt='article' src={article.image} width='300px' height='300px'/>
							<div className='article-information'>
								<h3 className='article-title'>{article.title}</h3>
								<p className='article-description'>{article.description}</p>
							</div>
						</div>
					</td>
					<td >
						<div className='article'>
							<img alt='article' src={article.image} width='300px' height='300px'/>
							<div className='article-information'>
								<h3 className='article-title'>{article.title}</h3>
								<p className='article-description'>{article.description}</p>
							</div>
						</div>
					</td>
				</tr>
				
			</table>
		</div>
	);
}

export default Articles;