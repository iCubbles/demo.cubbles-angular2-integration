export function getBaseUrl() {
    const baseUrl: string = window.document.location.href.replace(/\/demo\d/, '');
    return baseUrl;

}

