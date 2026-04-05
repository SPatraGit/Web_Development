import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/TPS-logo.png?mtime=1753477397":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
