const mainDiv = document.querySelector('main')
mainDiv.innerHTML = `<div class='card mt-3 p-3 gap-3'>
                        <div class='row'>
                            <div class='col-auto'>
                                <button class="btn btn-secondary" id="btn2"> Get Random Image</button>
                            </div>
                            <div class='col-auto'>
                                <button class="btn btn-secondary" id="btn3">Console Hound Images</button>
                            </div>
                        </div>
                        <div class="container" id="container">
                            <form class='row g-3'>
                                <div class='col-auto'>
                                    <select class='form-select' name="selector" id="selector"></select>
                                </div>
                                <div class='col-auto'>
                                    <button class="btn btn-secondary" id="btn4">Get Breed Image</button>
                                </div>
                            </form>
                            <div class="img-container" id="img-container"></div>
                            </div>
                        </div>`

// const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const selector = document.getElementById('selector')
const imgContainer = document.getElementById('img-container')

let breeds = []
// const getBreeds = () => {
axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
        // console.log(res.data)
        selector.innerHTML = ''
        let breeds = res.data.message;
        // console.log(breeds)
        for (const breed in breeds) {
            // console.log(breed)
            const option = document.createElement('option');
            option.value = breed;
            option.text = breed
            selector.appendChild(option)
        }
        return breeds
    })
    .catch(err => console.error(err));
// }

const getSelectedBreedImage = (e) => {
    e.preventDefault()
    const selectedBreed = selector.value
    console.log(selectedBreed)
    axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(res => {
            console.log(res)
            imgContainer.innerHTML = `<img class='m-3' src="${res.data.message}" alt="${selectedBreed}" />`
        }
        )
        .catch(err => console.log(err))
}

const getRandomImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log(res.data.message)
            imgContainer.innerHTML = `<img class='m-3' src="${res.data.message}" alt="random-image" />`

        })
        .catch(err => console.error(err));
}

const getHoundImage = () => {
    axios.get('https://dog.ceo/api/breed/bulldog/images')
        .then(res => {
            // console.log(res.data.message)
            res.data.message.forEach(e => console.log(e))
        })
        .catch(err => console.error(err));
}

// btn.addEventListener('click', getBreeds);
btn2.addEventListener('click', getRandomImage);
btn3.addEventListener('click', getHoundImage);
btn4.addEventListener('click', getSelectedBreedImage);