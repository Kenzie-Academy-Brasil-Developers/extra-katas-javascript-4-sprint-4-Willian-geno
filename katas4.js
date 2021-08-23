const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const bodyRedident = document.querySelector('body');

function kata1() {
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata1';
    newKataBody.textContent = lotrCitiesArray.join(', ') + '.';

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata1();

function kata2 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata2';
    newKataBody.textContent = JSON.stringify(bestThing.split(' '));

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata2();

function kata3 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    let arrGotCitiesCSV = gotCitiesCSV.split('');
    for (let counter = 0; counter < arrGotCitiesCSV.length; counter++){
        if (arrGotCitiesCSV[counter] === ','){
            arrGotCitiesCSV[counter] = '; ';
        }
    }
    arrGotCitiesCSV = arrGotCitiesCSV.join('');
    
    newKataHeder.textContent = 'Kata3';
    newKataBody.textContent = arrGotCitiesCSV;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata3();

function kata4 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata4';
    newKataBody.textContent = (lotrCitiesArray.join(','));

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata4();

function kata5 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata5';

    let conteudoNewKataBody = '';
    
    for (let counter = 0; counter < 5; counter++){
        conteudoNewKataBody += lotrCitiesArray[counter] + ' ';
    }

    newKataBody.textContent = conteudoNewKataBody;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata5();

function kata6 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata6';

    let conteudoNewKataBody = '';
    
    for (let counter = (lotrCitiesArray.length-1); counter > (lotrCitiesArray.length - 6); counter--){
        conteudoNewKataBody += lotrCitiesArray[counter] + ' ';
    }

    newKataBody.textContent = conteudoNewKataBody;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata6();

function kata7 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata7';

    let conteudoNewKataBody = '';
    
    for (let counter = 2; counter < 5; counter++){
        conteudoNewKataBody += lotrCitiesArray[counter] + ' ';
    }

    newKataBody.textContent = conteudoNewKataBody;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata7();

function kata8 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata8';

    lotrCitiesArray.splice(2,1)
    
    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata8();

function kata9 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata9';

  lotrCitiesArray.splice(5,(lotrCitiesArray.length-1))
    

    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata9();

function kata10 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata10';

  lotrCitiesArray.splice(2,0,'Rhun')
    

    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata10();

function kata11 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata11';

  lotrCitiesArray.splice(5,1,'Deadest Marshes')
    

    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata11();

function kata12 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata12';

    let newBestThing = bestThing.slice(14)

    newKataBody.textContent = newBestThing;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata12();

function Kata13 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata13';

    let newBestThing = bestThing.slice(-12)

    newKataBody.textContent = newBestThing;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

Kata13();

function kata14 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata14';

    let newBestThing = bestThing.slice(23, 38)

    newKataBody.textContent = newBestThing;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata14();

function kata15 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'kata15';

    let newBestThing = bestThing.substring(bestThing.length-12, bestThing.length);

    newKataBody.textContent = newBestThing;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata15();

function kata16 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'kata16';

    let newBestThing = bestThing.substring(23, 38);

    newKataBody.textContent = newBestThing;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata16();

function kata17 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata17';
    let newlotrCitiesArray = lotrCitiesArray.pop();

    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata17();

function kata18 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata18';
    lotrCitiesArray.push('Deadest Marshes')
    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata18();

function kata19 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata19';
    let newlotrCitiesArray = lotrCitiesArray.shift();

    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata19();

function kata20 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'Kata20';
    lotrCitiesArray.unshift('Mordor')
    newKataBody.textContent = lotrCitiesArray;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kata20();

function kataExtra01 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'kataExtra01';

    let arrbestThing = bestThing.split(' '); 
    for (let counter = 0; counter < arrbestThing.length; counter++){
        if (arrbestThing[counter] === 'only'){
            newKataBody.textContent = counter;
        }
    }

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kataExtra01();

function kataExtra02 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'kataExtra02';

    let arrbestThing = bestThing.split(' '); 
    newKataBody.textContent = (arrbestThing.length-1)

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kataExtra02();

function kataExtra03 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'kataExtra03';

    let conteudoNewKataBody = '';
    let arrbestThing = lotrCitiesArray; 
    for (let counter = 0; counter < arrbestThing.length; counter++){
        let palavraCheck = arrbestThing[counter].split('');
        for (let counter2 = 0; counter2 < palavraCheck.length; counter2++){
            palavraCheck[counter2]
            if (palavraCheck[counter2] === palavraCheck[counter2 + 1]){
                conteudoNewKataBody += counter;
            }
        }
    }

    newKataBody.textContent = conteudoNewKataBody;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kataExtra03();

function kataExtra04 (){
    const newDivKata = document.createElement('div');
    const newKataHeder = document.createElement('h2');
    const newKataBody = document.createElement('p');

    newKataHeder.textContent = 'kataExtra04';

    let conteudoNewKataBody = '';
    let arrbestThing = lotrCitiesArray; 
    for (let counter = 0; counter < arrbestThing.length; counter++){
        let palavraCheck = arrbestThing[counter].split('');
        for (let counter2 = palavraCheck.length-1; counter2 > palavraCheck.length-2; counter2--){
            palavraCheck[counter2]
            if (palavraCheck[counter2] === 'r'){
                if (palavraCheck[counter2] === 'o'){
                    conteudoNewKataBody += counter;
                }
            }
        }
    }

    newKataBody.textContent = conteudoNewKataBody;

    newDivKata.appendChild(newKataHeder);
    newDivKata.appendChild(newKataBody);

     return bodyRedident.appendChild(newDivKata);
}

kataExtra04();

