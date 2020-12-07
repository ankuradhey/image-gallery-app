// @ts-nocheck
import React, { FC, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageData } from "../../types";
import { intersectionObserver } from "../../utils";
import "./ImageCard.css";

export const ImageCard: FC<ImageData> = ({ id, title, description, link, slug }) => {
    const [isVisible, setVisible] = useState(false);
    const imageRef = useRef(null);

    const loadImage = () => {
        setVisible(true);
    };

    useEffect(() => {
        const observer = intersectionObserver(imageRef.current, loadImage);
        return () => {
            observer.disconnect();
        };
    }, [imageRef]);

    useEffect(() => {
        if (isVisible) {
            const divContainingImg = imageRef.current.querySelectorAll("div.grid-image-top")[0];
            divContainingImg.classList.remove("card__loading");
            const imageLink = divContainingImg.getAttribute("data-src");
            divContainingImg.style.backgroundImage = `url(${imageLink})`;
        }
    }, [isVisible]);

    let titleContent = (description || title)?.trim();
    titleContent = titleContent.length > 30 ? titleContent.slice(0, 30) + "..." : titleContent;

    return (
        <div className="card grid-item" ref={imageRef}>
            <Link to={`/image/${slug}`} className="wrapping-link"></Link>
            <div className="grid-item-wrapper">
                <div className="grid-item-container">
                    <div
                        className="card__loading grid-image-top"
                        data-src={link}
                        data-testid="image"
                    ></div>

                    <div className="grid-item-content">
                        <span className="item-excerpt">{titleContent}</span>
                        <span className="more-info">View Detail</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
