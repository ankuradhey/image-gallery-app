import React, { FC, useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "./ImageDetail.css";

export const ImageDetail: FC = () => {
    let { id } = useParams();
    let history = useHistory();
    const { gallery } = useContext(AppContext);

    const [imageData, setImageData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const data = gallery.find((item) => item.slug === id);
        if (!data || data.length === 0) {
            history.push("/");
        }
        setImageData(data);
        setLoading(false);
    }, [id, gallery]);

    if (loading) return <div data-testid="loading">Loading...</div>;

    return (
        <div className="container imagedetail">
            <Link to="/" className="imagedetail__button">
                Back to home
            </Link>
            {imageData?.title && <h2>{imageData?.title}</h2>}

            <img className="imagedetail__image" src={imageData.link} />

            <span className="imagedetail__content">
                <strong>Upvotes:</strong> {imageData?.ups}
            </span>
            <span className="imagedetail__content">
                <strong>Downvotes:</strong> {imageData?.downs}
            </span>
            <span className="imagedetail__content">
                <strong>Score:</strong> {imageData?.score}
            </span>
            <p>{imageData?.description}</p>
        </div>
    );
};
