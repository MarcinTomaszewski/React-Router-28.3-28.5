// listowanie wszystkich dostępnych państw: 
export const GET_COUNTRIES = 'GET_COUNTRIES';
// wyświetlanie informacji o jednym państwie: 
export const GET_COUNTRY = 'GET_COUNTRY';
// usuwanie państwa: 
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
// szukanie państwa po nazwie: 
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
// wyświetlanie państw konkretnego kontynentu: 
export const SET_CONTINENT = 'SET_CONTINENT';

// listowanie wszystkich dostępnych państw:
export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}
// wyświetlenie informacji o jednym państwie
export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}
// usuwanie państwa
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}
// szukanie państwa po nazwie
export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}
// wyświetlanie państw konkretnego kontynentu
// parametr name odnosi sie do nazwy kontynentu
export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}