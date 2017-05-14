window.onload  = function (){
    document.getElementById("focusMe").focus();
}

var spans1 = document.getElementById('Span1').getElementsByTagName('p');
var spans2 = document.getElementById('Span2').getElementsByTagName('p');

var bands20171 = ["A Lethal Smile","Anthrax","Asphyx","Dark Tranquility","Ereb Altor","Gloryhammer","Gluttony","Grave","Grid","Hyperion","Krisiun"];
var bands20172 = ["Mesolimbic","Nekrodelirium","Pain","Purgatorium","The Raven Age","Scar Symmetry","Tragederia","Umeå Pop-& Rockkör","Vintersorg","Wolf"];

var bands20161 = ["Achilles","Battle Beast","Cut Up","Defiatory","Destruction","Ebrietor","Ensiferum","Eterno","Firespawn","Forgetting the Memories","Helvegen","Holy Moses"]

var bands20162 = ["Hypertension","In This Grey","Moloken","Naglfar","Oro","Raised Fist","Ramin Kuntopolku","Raubtier","Satyricon","Skeleton Birth","Vanity Insanity"]

var bands20151 = ["Apocalypse Orchestra","At The Gates","Baptism","Binary Creed","Candlemass","Constructions","Deathbreed","Finntroll","Grand Magus","Hardcore Superstar","Helldorado","Mesolimbic","Midnight Cane"]

var bands20152 = ["Night","Port Noir","Rawhide","Revolver Dogs","Rotten Sound","The Duskfall","The Haunted","Utofolket","Vampire","Vanity BLVD","Walking With Strangers","Watain"]

var bands20141 = ["Avatarium","Axenstar","Belphegor","Besserbitch","Bombus","Civil War","Cursed 13","Dogface","Enemy Within","Enforcer","F.K.Ü","Hatebreed"]

var bands20142 = ["Hypocrisy","Immaculate","Man.Machine.Industry","Monoscream","Mörbultad","Napalm Death","Random Agnostic","Raubtier","Skull Fist","The Sanity Decadence","Thyrfing","Vanderbuyst"]

var bands20131 = ["Aeon","Always War","Amorphis","Anaal Nathrakh","Assaultery","Aura Noir","Chaos in Order","Corroded","Daemonicus","Entombed","Extrakt","Festering Remains","Grand Nation","Griftefrid"]

var bands20132 = ["Lahey","Maiden Norway","Mayhem","Miseration","Naglfar","Rage Invest","Seventribe","Sodom","Structural Disorder","Supernaut","Tankard","Vengha","Zonoria"]
function his2017() {
    
    for(var i = 0; i < spans1.length; i++) {
        if(i < 11){spans1[i].innerHTML = bands20171[i];}
        else {spans1[i].innerHTML = " ";}
}
     for(var i = 0; i < spans2.length; i++) {
        if(i < 10){spans2[i].innerHTML = bands20172[i];}
        else {spans2[i].innerHTML = " ";}

}
}

function his2016() {
    
     for(var i = 0; i < spans1.length; i++) {
        if(i < 12){spans1[i].innerHTML = bands20161[i];}
        else {spans1[i].innerHTML = " ";}
}
     for(var i = 0; i < spans2.length; i++) {
        if(i < 11){spans2[i].innerHTML = bands20162[i];}
        else {spans2[i].innerHTML = " ";}

}
}

function his2015() {
    
     for(var i = 0; i < spans1.length; i++) {
        if(i < 13){spans1[i].innerHTML = bands20151[i];}
        else {spans1[i].innerHTML = " ";}
}
     for(var i = 0; i < spans2.length; i++) {
        if(i < 12){spans2[i].innerHTML = bands20152[i];}
        else {spans2[i].innerHTML = " ";}

}
}

function his2014() {
    
     for(var i = 0; i < spans1.length; i++) {
        if(i < 12){spans1[i].innerHTML = bands20141[i];}
        else {spans1[i].innerHTML = " ";}
}
     for(var i = 0; i < spans2.length; i++) {
        if(i < 11){spans2[i].innerHTML = bands20142[i];}
        else {spans2[i].innerHTML = " ";}

}
}

function his2013() {
    
     for(var i = 0; i < spans1.length; i++) {
        if(i < 12){spans1[i].innerHTML = bands20131[i];}
        else {spans1[i].innerHTML = " ";}
}
     for(var i = 0; i < spans2.length; i++) {
        if(i < 11){spans2[i].innerHTML = bands20132[i];}
        else {spans2[i].innerHTML = " ";}

}
}