//all api = https://restcountries.eu/rest/v2/all
// name api = https://restcountries.eu/rest/v2/name/{name}

//full page 

fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => {
        countryDetails(data);
    })

const countryDetails = countryList => {
    countryList.forEach(country => {
        const countryDiv = document.createElement('div');
        const countryInfo = `
                <div class="col">
                    <div class="card">
                        <img src="${country.flag}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">${country.name}</h5>
                            <div class = "d-flex justify-content-center">
                                <button class="card-text btn btn-dark">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
        countryDiv.innerHTML = countryInfo;
        const allCountry = document.getElementById('allCountry');
        allCountry.appendChild(countryDiv);
    });
}

//search option 

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function () {

    let input = document.getElementById('input').value;

    fetch(`https://restcountries.eu/rest/v2/name/${input}`)
        .then(response => response.json())
        .then(data => {
            searchCountryDetails(data)
        })

        const searchCountryDetails = searchCountryList => {
            searchCountryList.forEach(country => {
                console.log(country);
                const countryDiv = document.createElement('div');
                const countryInfo = `
                        <div class="col">
                            <div class="card">
                                <img src="${country.flag}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">${country.name}</h5>
                                    <p>Region : ${country.region} </p>
                                    <p>Capital : ${country.capital}</p>
                                    <p>Area : ${country.area}</p>
                                    <p>Language :${country.languages[0].name}</p>
                                    <p>Population :${country.population}</p>
                                    <p>Currencies : ${country.currencies[0].name + "(" + country.currencies[0].symbol + ")"}</p>
                                </div>
                            </div>
                        </div>
                `
                countryDiv.innerHTML = countryInfo;
                const searchResult = document.getElementById('searchResult');
                searchResult.appendChild(countryDiv);
            });
        }
})


