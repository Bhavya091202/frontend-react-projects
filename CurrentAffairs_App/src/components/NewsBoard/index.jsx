import { useEffect, useState } from 'react'
import styles from './newsboard.module.css'
import { NewsItem } from '../NewsItem'

export function NewsBoard({category}) {
    const [articles, setAricles] = useState([])
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        fetch(url).then(
            response=> response.json()).then(
                data=> setAricles(data.articles)
        )
    }, [category])
    return (
        <newsboard>
            <div>
                <br />
                <h2 className={styles.centerText}>Latest <span className="badge text-bg-danger">News</span></h2>
                {articles.map((news, index)=> {
                    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })}
            </div>
        </newsboard>
    )
}
