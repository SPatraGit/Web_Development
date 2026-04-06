import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
           <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '50%',zIndex: '1'}}>
              {source}
            </span>
            <img src={imageUrl?imageUrl:"https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/TPS-logo.png?mtime=1753477397"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
