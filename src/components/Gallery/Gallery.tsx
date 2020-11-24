import React, { FC, useState, useEffect, useContext } from "react";
import { Filter, Grid, Loader } from "../../components";
import { AppContext } from "../../context/AppContext";
import { FILTERS, SECTIONS, SORT_BY, WINDOW_DURATION } from "../../types";
import { fetchImages } from "../../utils";

export const Gallery: FC = () => {
    const [loading, setLoading] = useState(true);
    const { gallery, setGallery } = useContext(AppContext);
    const [loadingPos, setLoadingPos] = useState(0);

    const [filters, setFilters] = useState<FILTERS>({
        section: SECTIONS.HOT,
        window: WINDOW_DURATION.DAY,
        sort: SORT_BY.VIRAL,
        showViral: false,
        page: 0,
    });

    const applyFilter = (key, val) => {
        if (key) {
            setLoading(true);
            setFilters({ ...filters, [key]: val, page: 0 });
        }
    };

    const updateLoadingPos = (yPos) => {
        setLoadingPos(yPos);
    };

    const loadGallery = (page: number) => {
        setFilters({ ...filters, page });
        setLoading(true);
    };

    useEffect(async () => {
        const galleryImages = await fetchImages(filters);
        if (filters.page === 0) {
            setGallery([...galleryImages]);
        } else {
            setGallery([...gallery, ...galleryImages]);
        }
        setLoading(false);
    }, [filters]);

    return (
        <section className="gallery">
            <Filter {...filters} applyFilter={applyFilter} />
            <Grid gallery={gallery} loading={loading} />
            <Loader
                loading={loading}
                page={filters.page}
                prevY={loadingPos}
                loadGallery={loadGallery}
                updateLoadingPos={updateLoadingPos}
            />
        </section>
    );
};
