export function getBaseUrl() {
    const baseUrl: string = window.location.pathname.replace(/\/demo\d/, '');
    return baseUrl;

}

