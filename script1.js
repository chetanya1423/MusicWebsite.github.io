const songContainer = document.getElementById('songs');
const searchbar = document.getElementById("searchTerm").value;
const searchNow = searchbar.value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
const updateTerm = (searchTerm) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + searchTerm, options)
		.then(response => response.json())
		.then((data) => {
			//console.log(data.data);
			for (var i = 0; i < data.data.length; i++) {
				console.log(data.data)
				// title.innerHTML=data.data[i].album.title;
				const article = document.createElement('article'),
					artists = document.createElement('p'),
					song = document.createElement('h4'),
					img = document.createElement('img'),
					audio = document.createElement('audio'),
					audioSource = document.createElement('source')

				// Now put content 

				artists.innerHTML = data.data[i].artist.name;
				song.innerHTML = data.data[i].album.title;
				img.src = data.data[i].album.cover;
				audioSource.src = data.data[i].preview

				audio.controls = true;

				article.appendChild(img);
				article.appendChild(artists);
				article.appendChild(song);
				article.appendChild(audio);
				audio.appendChild(audioSource);

				songContainer.appendChild(article);
			}




		})
		.catch(err => console.error(err));
}

searchTermBtn.addEventListener("click", function (e) {
	e.preventDefault();
	updateTerm(searchTerm.value)
})
document.addEventListener('play', event => {
	const audio = document.getElementsByTagName('audio');
	for (let i = 0; i < audio.length; i++) {
		if (audio[i] != event.target) {
			audio[i].pause();
		}
	}
}, true)







