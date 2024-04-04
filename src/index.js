const APIURL = "https://restcountries.com/v3.1/all";

const fetchCountries = async () => {
    const response = await fetch(APIURL);
    const countries = await response.json();
    console.log(countries);
};

console.log(countries);
