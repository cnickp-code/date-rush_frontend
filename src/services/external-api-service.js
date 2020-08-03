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
    getRestaurantsByLocation(lat, lng, start, radius) {
        // let key = config.RESTAURANT_API_KEY;
        return fetch(`${config.RESTAURANTS_API_ENDPOINT}start=${start}&lat=${lat}&lon=${lng}&radius=${radius}`, {
            headers: {
                'user-key': '4da470aab3c605b25b7c16a75d16929e'
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default ExtApiService;