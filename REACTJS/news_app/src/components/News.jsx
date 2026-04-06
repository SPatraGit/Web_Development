import React, { Component } from 'react';
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'General'
        
    };

   static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    capitalized = (str) => {
       return  str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
            spinner : false,
            page : 1
        }
        document.title = `${this.capitalized(this.props.category)} - ApnaNews`;
    }


   async updateNews(){
    if (this.state.spinner) return; // FIX 2

    try {
        console.log("API KEY:", import.meta.env.VITE_NEWS_API);

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${import.meta.env.VITE_NEWS_API}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        this.setState({spinner: true});

        let data = await fetch(url);
        let parsedData = await data.json();

        if (parsedData.status === "error") { // FIX 3
            console.error("API ERROR:", parsedData.message);
            this.setState({ spinner: false });
            return;
        }

        this.setState({
            articles : parsedData.articles || [],
            totalResults: parsedData.totalResults || 0,
            spinner: false
        });

    } catch (error) {
        console.error(error);
        this.setState({ spinner: false });
    }
}

    async componentDidMount(){
       this.updateNews();
    }


    handleNextClick = async () => {
    this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        this.updateNews
    );
};

    handlePreviousClick = async () => {
        this.setState(
            (prevState) => ({ page: prevState.page - 1 }),
            this.updateNews
        );
    };

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin:'35px 0px'}}>ApnaNews - Top {this.capitalized(this.props.category)} Headlines</h1>
                {this.state.spinner && <Spinner/>}
                <div className="row">
                    {!this.state.spinner && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled = {this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled = {this.state.page+1 > Math.ceil((this.state.totalResults || 0)/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}> Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
