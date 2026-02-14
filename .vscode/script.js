let img = document.querySelector('#img');
let h2 = document.querySelector('#h2');
let btn = document.querySelector('button');

let arr = [{
        team:'Chennai Super Kings',
        backgroundImg: "./CSKoutline.avif"
    },
    {
        team:'Delhi Capitals',
        backgroundImg: "./DCoutline.png"
    },
    {
        team:'Gujarat Titans',
        backgroundImg: "./GToutline.png"
    },
    {
        team:'Kolkata Knight Riders',
        backgroundImg: "./KKRoutline.png"
    },
    {
        team:'Lucknow Super Giants',
        backgroundImg: "./LSGoutline.png"
    },
    {
        team:'Mumbai Indians',
        backgroundImg: "./MIoutline.png"
    },
    {
        team:'Punjab Kings',
        backgroundImg: "./PBKSoutline.png"
    },
    {
        team:'Rajasthan Royals',
        backgroundImg: "./RRoutline.png"
    },
    {
        team:'Royal Challengers Bengaluru',
        backgroundImg: "./RCBoutline.png"
    },
    {
        team:'Sunrisers Hyderabad',
        backgroundImg: "./SRHoutline.png"
    }
];

btn.addEventListener('click',function(){
    let winner = arr[Math.floor(Math.random()*arr.length)];
    h2.innerHTML = winner.team;
    img.src = winner.backgroundImg;
});