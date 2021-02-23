export const getURLParam = (param) => {
    const queryString = getQueryString();
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
}

const getQueryString = () => {
    return window.location.search;
}