$(function() {
	async function getGif(searchTerm) {
		const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
		const params = {
			q       : searchTerm,
			api_key,
			limit   : 10
		};
		let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params });
		//TODO get random number from 25
		let num = Math.floor(response.data.data.length * Math.random());
		let gifURL = response.data.data[num].images.downsized_large.url;
		return gifURL;
	}

	function appendToTable(gifURL) {
		const imageListItem = `<img class="gif" src=${gifURL}>`;
		$("#gifList").append(imageListItem);
	}

	// let gifsTable = $("#gifsTable");
	// gifsTable.append();
	// Append to table after submit

	$("#searchForm").on("submit", async function(e) {
		e.preventDefault();
		let searchTerm = $("#formURL").val();
		let gifURL = await getGif(searchTerm);
		appendToTable(gifURL);
		$(".gif").last().on("click", function(e) {
			e.target.remove();
		});
	});
});
