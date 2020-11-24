import React, { FC } from "react";
import { SECTIONS, SORT_BY, WINDOW_DURATION } from "../../types";
import "./Filter.css";

export const Filter: FC = ({ section, window, sort, showViral, applyFilter }) => {
    return (
        <section className="filter">
            <div className="filter__group">
                <label className="filter__label">Section:</label>
                <div className="filter__inputgroup">
                    <button
                        className={`filter__button${section === SECTIONS.HOT ? "--active" : ""}`}
                        onClick={() => applyFilter("section", SECTIONS.HOT)}
                    >
                        HOT
                    </button>
                    <button
                        className={`filter__button${section === SECTIONS.TOP ? "--active" : ""}`}
                        onClick={() => applyFilter("section", SECTIONS.TOP)}
                    >
                        TOP
                    </button>
                    <button
                        className={`filter__button${section === SECTIONS.USER ? "--active" : ""}`}
                        onClick={() => applyFilter("section", SECTIONS.USER)}
                    >
                        USER
                    </button>
                </div>
            </div>
            <div className="filter__group">
                <label className="filter__label">Window:</label>
                <div className="filter__inputgroup">
                    <button
                        className={`filter__button${
                            window === WINDOW_DURATION.DAY ? "--active" : ""
                        }`}
                        onClick={() => applyFilter("window", WINDOW_DURATION.DAY)}
                    >
                        DAY
                    </button>
                    <button
                        className={`filter__button${
                            window === WINDOW_DURATION.WEEK ? "--active" : ""
                        }`}
                        onClick={() => applyFilter("window", WINDOW_DURATION.WEEK)}
                    >
                        WEEK
                    </button>
                    <button
                        className={`filter__button${
                            window === WINDOW_DURATION.MONTH ? "--active" : ""
                        }`}
                        onClick={() => applyFilter("window", WINDOW_DURATION.MONTH)}
                    >
                        MONTH
                    </button>
                    <button
                        className={`filter__button${
                            window === WINDOW_DURATION.YEAR ? "--active" : ""
                        }`}
                        onClick={() => applyFilter("window", WINDOW_DURATION.YEAR)}
                    >
                        YEAR
                    </button>
                    <button
                        className={`filter__button${
                            window === WINDOW_DURATION.ALL ? "--active" : ""
                        }`}
                        onClick={() => applyFilter("window", WINDOW_DURATION.ALL)}
                    >
                        ALL
                    </button>
                </div>
            </div>
            <div className="filter__group">
                <label className="filter__label">Sort By:</label>
                <div className="filter__inputgroup">
                    <button
                        className={`filter__button${sort === SORT_BY.VIRAL ? "--active" : ""}`}
                        onClick={() => applyFilter("sort", SORT_BY.VIRAL)}
                    >
                        VIRAL
                    </button>
                    <button
                        className={`filter__button${sort === SORT_BY.TOP ? "--active" : ""}`}
                        onClick={() => applyFilter("sort", SORT_BY.TOP)}
                    >
                        TOP
                    </button>
                    <button
                        className={`filter__button${sort === SORT_BY.TIME ? "--active" : ""}`}
                        onClick={() => applyFilter("sort", SORT_BY.TIME)}
                    >
                        TIME
                    </button>
                    <button
                        className={`filter__button${sort === SORT_BY.RISING ? "--active" : ""}`}
                        onClick={() => applyFilter("sort", SORT_BY.RISING)}
                    >
                        RISING
                    </button>
                </div>
            </div>
            <div className="fliter__group">
                <label className="filter__label">Show Viral Images:</label>
                <div className="filter__inputgroup">
                    <input
                        type="checkbox"
                        value={showViral}
                        onChange={() => applyFilter("showViral", !showViral)}
                    />
                </div>
            </div>
        </section>
    );
};
