import { FILTERS } from "../types";

export const fetchImages = async ({
    section,
    sort,
    window,
    showViral,
    page = 0,
}: FILTERS): Promise<ImageData[]> => {
    const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`;
    const response = await fetch(url, {
        headers: {
            Authorization: "Client-ID 863abe144157c3b",
        },
    });
    let data = await response.json();
    data = data.data.map((val) => ({
        ...val,
        link: (val?.images && val?.images[0] && val?.images[0]?.link) || val.link,
        slug: (val?.images && val?.images[0] && val?.images[0]?.id) || val.id,
        ups: (val?.images && val?.images[0] && val?.images[0]?.ups) || 0,
        downs: (val?.images && val?.images[0] && val?.images[0]?.downs) || 0,
        score: (val?.images && val?.images[0] && val?.images[0]?.score) || 0,
    }));
    return data.filter(
        (val) => val.images && val.images[0] && val.images[0].type.startsWith("image")
    );
};

export const fetchImageDetail = async (id): Promise<ImageData> => {
    const url = `https://api.imgur.com/3/image/${id}`;
    const response = await fetch(url, {
        headers: {
            Authorization: "Client-ID 863abe144157c3b",
        },
    });
    let data = await response.json();
    return data.data;
};
