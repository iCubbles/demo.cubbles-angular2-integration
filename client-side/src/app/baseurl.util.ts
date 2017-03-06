export function getBaseUrl() {
    const baseUrl: string = window.document.location.href.substring(0, window.document.location.href.indexOf('/demo') + 1);
    console.log('baseUrl', baseUrl);
    return baseUrl;

}

