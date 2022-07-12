import { useParams, Link, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComic.scss';

const SingleComicPage = () => {
    let nav = useNavigate();
    const { comicId } = useParams();
    const [comic, setComic] = useState(null);

    const { loading, error, getComic, clearError } = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId])

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onCharLoaded)
    }

    const onCharLoaded = (comic) => {
        setComic(comic);
    }

    const handleClick = () => {
        nav(-1);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !comic) ? <View comic={comic} handleClick={handleClick} /> : null;
    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({ comic, handleClick }) => {
    const { title, description, pageCount, thumbnail, language, price } = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <a onClick={handleClick} className="single-comic__back">Back to all</a>
        </div>
    )
}

export default SingleComicPage;