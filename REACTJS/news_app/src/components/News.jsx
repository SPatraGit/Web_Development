import React, { Component } from 'react';
import NewsItem from '../NewsItem';


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }


    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=06ce9556833a49ab83bac0aa7fc27626&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles})
    }


    handlePreviousClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=06ce9556833a49ab83bac0aa7fc27626&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({})
        this.setState({
            page: this.state.page-1,
            articles : parsedData.articles
        })

    }
    handleNextClick = async () => {
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=06ce9556833a49ab83bac0aa7fc27626&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({})
        this.setState({
            page: this.state.page+1,
            articles : parsedData.articles
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h1>ApnaNews - Top Headlines</h1>
                
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled = {this.page.state<1} type="button" class="btn btn-success" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button type="button" class="btn btn-success" onClick={this.handleNextClick}> Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
