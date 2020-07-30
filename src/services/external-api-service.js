import config from '../config';

const ExtApiService = {
    getMeal() {
        return fetch(`${config.MEAL_API_ENDPOINT}/${config.MEAL_API_KEY}/random.php`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAlcDrinks() {
        return fetch(`${config.DRINK_API_ENDPOINT}/${config.DRINK_API_KEY}/filter.php?a=Alcoholic`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getNonAlcDrinks() {
        return fetch(`${config.DRINK_API_ENDPOINT}/${config.DRINK_API_KEY}/filter.php?a=Non_Alcoholic`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getDrinkById(id) {
        return fetch(`${config.DRINK_API_ENDPOINT}/${config.DRINK_API_KEY}/lookup.php?i=${id}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getLocation(location) {
        return fetch(`${config.LOCATION_API_ENDPOINT}?access_key=${config.POS_STACK_API_KEY}&query=${location}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getPlacesByLocation(latLongStr, type) {
        return fetch(`${config.PLACES_API_ENDPOINT}?radius=10000&type=${type}&location=${latLongStr}&key=${config.GOOGLE_API_KEY}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default ExtApiService;