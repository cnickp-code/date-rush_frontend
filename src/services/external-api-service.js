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
    }
}

export default ExtApiService;