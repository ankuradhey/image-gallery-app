import React, { FC } from "react";
import { ImageCard } from "../ImageCard";
import { ImageData } from "../../types";
import "./Grid.css";

export const Grid: FC<{ gallery: {}[]; loading: boolean }> = ({ gallery = [], loading = true }) => {
    if (!loading && gallery.length === 0)
        return <div data-testid="no-result">No records found</div>;

    return (
        <main className="container">
            <div className="content grid-row">
                {gallery.map(({ id, link, description, title, slug }: ImageData) => {
                    const props = { id, link, description, title, slug };
                    return <ImageCard key={id} {...props} />;
                })}
            </div>
        </main>
    );
};
