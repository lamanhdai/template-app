import BaseLink from 'components/Link';

import {
  StyleArticle
} from './index.style'
interface ArticleType {
  img: string
  url: string
  date: string
  title: string
  excerpt: string
}
export default function Article (props: ArticleType) {
  const {
    img,
    url,
    date,
    title,
    excerpt,
  } = props;
  return (
    <StyleArticle>
      <div className="grid-item-media"><BaseLink url={url}><img src={img} className="img-fluid"/></BaseLink></div>
      <div className="grid-item-desc">
        <h2>
          <BaseLink url={url}>
            <>
              <span className="grid-item-meta">{date}</span>
              <span className="grid-item-title">{title}</span>
            </>
          </BaseLink>
        </h2>
        <p>{excerpt}</p>
      </div>
    </StyleArticle>
  )
}