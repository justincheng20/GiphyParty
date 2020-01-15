$(function () {

    async function getGif(searchTerm) {
        const hostNameAndResource = "http://api.giphy.com/v1/gifs/search?q=";
        const APIKey = "api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
        // let gif = await axios.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
        let gif = await axios.get(`${hostNameAndResource}${searchTerm}&${APIKey}`);
        let gifURL = gif.data.data[0].images.downsized_large.url;
        return gifURL;

    }

    function appendToTable(gifURL){
        const imageListItem = `<img class="gif" src=${gifURL}>`;
        $("#gifList").append(imageListItem);
    }

    // let gifsTable = $("#gifsTable");
    // gifsTable.append();
    // Append to table after submit

    $("#searchForm").on("submit", async function(e){
        e.preventDefault();
        let searchTerm = $("#formURL").val();
        let gifURL = await getGif(searchTerm);
        appendToTable(gifURL);
        $(".gif").last().on("click", function(e){
            //remove
            e.target.remove();
        })
    });
    
})
