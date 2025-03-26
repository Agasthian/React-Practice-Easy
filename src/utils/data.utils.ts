//this file has an async api call function with genertic type for url(props-input) and promise(return), coz we dono the type of response form the api call
//<T> - generic return wrapped the promise , url -type - string

export const getData = async  <T>(url: string):Promise <T>=>{
    const response = await fetch(url)
    return await response.json()
}