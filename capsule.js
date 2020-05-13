const items = [
    ["Backpack", "https://s3.amazonaws.com/gashapon.alby/backpack.jpg"],
    ["Body", "https://s3.amazonaws.com/gashapon.alby/body.jpg"],
    ["Brain", "https://s3.amazonaws.com/gashapon.alby/brain.jpg"],
    ["Clock", "https://s3.amazonaws.com/gashapon.alby/clock.jpg"],
    ["Eye", "https://s3.amazonaws.com/gashapon.alby/eye.jpg"],
    ["Hand", "https://s3.amazonaws.com/gashapon.alby/hand.jpg"],
    ["?", "https://s3.amazonaws.com/gashapon.alby/question.jpg"],
    ["Skull", "https://s3.amazonaws.com/gashapon.alby/skull.jpg"]
]

function getItem() {
    var index = Math.round(Math.random() * 7);
    var gName = items[index][0];
    var gUrl = items[index][1];
    newItem(gName, gUrl);
    console.log(`The name is ${gName}`);
    // var exist = !!document.getElementsByClassName('itemimg');
    // exist ? newItem(gName, gUrl) : replaceItem(gName, gUrl);
}

function newItem(name, url) {
    document.getElementById('itemimg').src = url;
    document.getElementById('itemname').innerHTML = name;
}

// function replaceItem(name, url) {
//     document.getElementsByClassName('itemimg').src = url;
//     document.getElementsByClassName('itemname').innerHTML = name;
// }