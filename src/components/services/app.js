import axios from "axios";
 
axios.defaults.baseURL = "https://pixabay.com/api/";
const BASE_KEY="27675363-36ea1c192b15f6a71011fab08";

export const getPictures = async (name) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${name}&page=1&key=${BASE_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data;
    
}