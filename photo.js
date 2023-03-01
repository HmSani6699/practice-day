const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (photos) => {
    const container = document.getElementById('container');
    photos.forEach(photo => {
        // console.log(photo);
        const div = document.createElement('div');

        div.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl', 'border');

        div.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${photo.thumbnailUrl}"
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div
                class="card-body items-center text-center">
                <h2 class="card-title">
                    ${photo.title}</h2>
                <p><span class="font-bold">Id : </span>${photo.id}</p>
            </div>
        `;

        container.appendChild(div)
    });
}
loadData()