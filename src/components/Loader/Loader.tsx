import React, { FC, useEffect, useRef } from "react";
import { intersectionObserver } from "../../utils";
import "./Loader.css";

export const Loader: FC = ({ loading = false, page = 0, prevY, loadGallery, updateLoadingPos }) => {
    const loadingRef = useRef(null);

    const fetchGallery = (yPos) => {
        if (prevY > yPos) {
            loadGallery(page + 1);
        }
        updateLoadingPos(yPos);
    };

    useEffect(() => {
        const observer = intersectionObserver(loadingRef.current, fetchGallery, false);
        return () => {
            observer.disconnect();
        };
    });

    return (
        <div
            className={`loading ${loading ? "loading--active" : ""}`}
            data-testid="loading"
            ref={loadingRef}
        >
            <span>Loading...</span>
        </div>
    );
};
