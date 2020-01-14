$(function () {

    console.log("Let's get this party started!");
    const APIKey = "api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    async function getGif() {
        let gif = await axios.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
        let gifURL = gif.data.data[0].images.downsized_large.url;
        console.log(gifURL);

        // let gifURL = 
    }

    let gifsTable = $("#gifsTable");
    gifsTable.append();

})
