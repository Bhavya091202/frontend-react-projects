import styles from './newsitem.module.css';
import ref from '../../assets/notAvailable.jpg';
export function NewsItem({title, description, src, url}) {
    return (
        <div className={`card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 ${styles.cardStyle}`}>
            <img src={src?src:ref} className={`card-img-top ${styles.srcSize}`} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description?description.slice(0,90):"News is not  available for current event. It is information about something just happened"}</p>
                <a href={url} className="btn btn-primary">Read More..</a>
            </div>
        </div>
        
    )
}