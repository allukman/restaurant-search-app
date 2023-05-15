import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer DKCv7eh1QRjLqTmWua18oNhi7iXZrHAprIMa9EtNVa6QsWVXm_h4SFSGuK2qUvNGT3CFqMrNU7Iygoa-PocKV9W0x7bB-UY2FPGNtClVJM4VigBgbyuamtwBIdVhZHYx`
    }
});