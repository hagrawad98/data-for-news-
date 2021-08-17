const request = require('request')
const news = (title, description,urlToImage, callback) => {
    const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=dd4d0ce359d544c69020d608c43725fc" + title +" "+ description+" "+urlToImage
    request({ url,json: true}, (error, response) => {
        if (error) {
            callback('no internet connection', undefined)
        } else if (response.body.error) {
            callback('not found', undefined)
        } else {
            callback(undefined,response.body.articles.urlToImage+ " "+response.body.articles.title+ " "+response.body.articles.description)
        }
    })
}
module.exports=news