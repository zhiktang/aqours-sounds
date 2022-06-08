const sounds = ['Chika', 'Riko', 'You', 'Dia', 'Kanan', 'Mari', 'Hanamaru', 'Ruby', 'Yoshiko'];
const count = [0 , 0, 0, 0, 0, 0, 0, 0, 0];
sounds.forEach((sound)=> {
    
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    update();
    btn.addEventListener('click', ()=> {
        //console.log(sound);
        click(sound);
        update();
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();

    });    
    btn.addEventListener('mouseenter', ()=> {
        //console.log("enter");
        update();
        btn.innerText = count[sounds.indexOf(sound)];

    });

    btn.addEventListener('mouseleave', ()=> {
        btn.innerText = sound;
    });

    document.getElementById('buttons').appendChild(btn);
});
function update() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'count.txt', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
       // console.log(xhttp.readyState);
       // console.log("status: " + xhttp.status);
        if (this.readyState == 4 && this.status == 200) {
           // console.log("enter if");
            //console.log(this.responseText);
            const file = this.responseText;
           // console.log(file);
            const lines = file.split('\n');
            for (var i = 0; i < sounds.length; i++) {
                var data = lines[i].split(' ');
                count[i] = data[1];
            }
            
        }
    }
    //console.log(count);
    //console.log(count.length);
};
function click(person) {
    //console.log(person);
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://192.168.1.137:3000', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({person: person}));
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
};
