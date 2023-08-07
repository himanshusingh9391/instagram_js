// document.querySelector('.profileName').innerHTML = "Himanshu"

let random= Math.floor(Math.random() * 30 + 1);
document.querySelector('.numOfPosts').innerHTML = random;

document.querySelector('.followersCount').innerHTML = Math.floor(Math.random() * 10000);

fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user = data.results[0];
        console.log(user);
        document.querySelector('.profileName').innerHTML = user.name.first
        document.querySelector('.bioName').innerHTML = user.name.first + ' ' + user.name.last
        document.querySelector('.profilePicture').src = user.picture.medium

        for(let i=0; i<random; i++){
        let img = document.createElement('img')
        img.src = 'https://picsum.photos/9' + i
        document.querySelector('.posts').append(img);
    }
    })
})
