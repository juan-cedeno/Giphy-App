import Axios from 'axios'

class GetGiphyService {
    
    static async getgiphy (categoty) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=9Z371drw8Ut4IXepQJ5dA1uM6hsT3rbq&q=${categoty}`
        
        try {
            
        const {data} = await Axios.get(url)
        
        return data

    } catch (error) {
        return []
    }
        
    }
}
export default GetGiphyService