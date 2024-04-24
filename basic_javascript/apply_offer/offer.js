let items = [300,350,450,444,789,234,100];

for(let i = 0; i<=items.length-1;i++){
    console.log(`before apply 10% offer ${items[i]}`);
    let offer = items[i]/10;
    items[i] = items[i] - offer;

    console.log(`after apply 10% offer ${items[i]}`);
}

