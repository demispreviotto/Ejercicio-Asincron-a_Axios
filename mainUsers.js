const mainDiv = document.querySelector('main')
mainDiv.innerHTML = `<div class='container m-3'>
                        <div class='card p-3'>
                            <button class="btn btn-primary" id="btn">Get Users</button>
                            <div class="container" id="container">
                                <ul class='list-group list-group-flush' id="user-ul"></ul>
                            </div>
                        </div>
                    </div>`

const btn = document.getElementById('btn')
const userUl = document.getElementById('user-ul')

let users = []

const showUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // console.log(res.data);
            // console.log(res.data[0].name);

            users = res.data;

            // users.forEach(element => {
            //     console.log(element.name)
            // });

            // console.log('users: ', users)
            userUl.innerHTML = ''
            users.forEach(element => {
                userUl.innerHTML += `<li class='list-group-item'>${element.name}</li>`;
            });


            return users
        })
        .catch(error => console.error(error))
}

btn.addEventListener('click', showUsers)

