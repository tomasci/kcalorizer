export const apiUrl = "API_URL_MUST_BE_HERE"

export default function makeApiUrl(path, params) {
    const url = new URL(apiUrl + path)
    url.search = new URLSearchParams(params).toString()
    return url.toString()
}