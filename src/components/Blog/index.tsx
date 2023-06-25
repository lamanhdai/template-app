import Article from 'components/Article';
import img1 from '../../assets/img/B612_20221106_215621_108-1-1.jpg';
import {
  StyledBlog
} from './index.style'

export default function Blog () {
  return (
    <StyledBlog className="container">
      <header className="row section-header max-inner">
        <div className="columns-12 col-centered">
          <h2>Blog news</h2><hr/>
        </div>
      </header>
      <div className="row">
        <div className="col col-md-2 col-lg-4">
          <Article
            img={img1}
            url={'/'}
            date={'30 May 2014'}
            title={'Dolor in reprehenderit'}
            excerpt={'Natus error sit voluptatem accusantium doloremque laudantium totam rem...'}/>
        </div>
      </div>
    </StyledBlog>
  )
}