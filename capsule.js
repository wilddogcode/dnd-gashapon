var previous;

const items = [
    ["Backpack", "https://s3.amazonaws.com/gashapon.alby/backpack.png"],
    ["Body", "https://s3.amazonaws.com/gashapon.alby/body.jpg"],
    ["Brain", "https://s3.amazonaws.com/gashapon.alby/brain.png"],
    ["Clock", "https://s3.amazonaws.com/gashapon.alby/clock.jpg"],
    ["Eye", "https://s3.amazonaws.com/gashapon.alby/eye.jpg"],
    ["Hand", "https://s3.amazonaws.com/gashapon.alby/hand.png"],
    ["?", "https://s3.amazonaws.com/gashapon.alby/question.jpg"],
    ["Skull", "https://s3.amazonaws.com/gashapon.alby/skull.png"]
]

function getItem() {
    var index = Math.round(Math.random() * 7);
    var gName = items[index][0];
    var gUrl = items[index][1];
    index == previous ? getItem() : newItem(gName, gUrl, index);
    return;
}

function newItem(name, url, ind) {
    document.getElementById('itemimg').src = url;
    document.getElementById('itemname').innerHTML = name;
    previous = ind;
    return;
}