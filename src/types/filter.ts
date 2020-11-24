export enum SORT_BY {
    VIRAL = "viral",
    TOP = "top",
    TIME = "time",
    RISING = "rising",
}

export enum SECTIONS {
    HOT = "hot",
    TOP = "top",
    USER = "user",
}

export enum WINDOW_DURATION {
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    YEAR = "year",
    ALL = "all",
}

export type FILTERS = {
    section: SECTIONS;
    showViral: boolean;
    window: WINDOW_DURATION;
    sort: SORT_BY;
    page?: number;
};
