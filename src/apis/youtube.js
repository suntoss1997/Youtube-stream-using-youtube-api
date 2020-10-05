import axios from  'axios';

const KEY= 'AIzaSyCBDa48Shc1T8Vis955vk9BAb42cZOYw5o';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY

}
});