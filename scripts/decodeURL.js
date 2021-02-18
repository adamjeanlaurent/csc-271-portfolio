export const getURLParam = (param) => {
    const queryString = getQueryString();
    const urlParams = new URLSearchParams(queryString);

    console.log(urlParams.get(param));
}

const getQueryString = () => {
    return window.location.search;
}

getURLParam('sock');