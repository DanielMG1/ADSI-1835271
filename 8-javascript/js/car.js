// Vars Atributes
var brand       = document.getElementById('brand');
var reference   = document.getElementById('reference');
var cc          = document.getElementById('cc');
var model       = document.getElementById('model');
var color       = document.getElementById('color');

// Vars cars
var path        = document.getElementById('path');
var vehicle     = document.getElementById('vehicle');

var btn_on      = document.getElementById('btn-on');
var btn_off     = document.getElementById('btn-off');
var btn_stop    = document.getElementById('btn-stop');
var btn_forw    = document.getElementById('btn-forw');
var btn_back    = document.getElementById('btn-back');

// Vars logic
var engineOn = false;
var stopeOn = true;

//vars sounds
var start       = document.getElementById('start');
var stop        = document.getElementById('stop');
var marcha      = document.getElementById('marcha');

var car = {
    // Atributos
    brand: 'Jeep',
    reference: 'Wranger',
    cc: 6.2,
    model: 2020,
    color: 'Orange',
    image: 'imgs/jeep.png',


    // Metodos
    info: function() {
        brand.innerHTML     = this.brand;
        reference.innerHTML = this.reference;
        cc.innerHTML        = this.cc + " cc";
        model.innerHTML     = this.model;
        color.innerHTML     = this.color;
        vehicle.style.backgroundImage = "url("+this.image+")";

        //console.log(this.brand);
    },
    on: function() {
        if(engineOn == false) {
            vehicle.classList.add('on');
            start.play();
            engineOn =true;
            stopeOn =true;
            console.log('on');
        } else {
            alert("No permitido");
        }
        
    },
    off: function() {
        if(stopeOn == true && stopeOn == true) {
            vehicle.classList.remove('on');
            engineOn = false;
            stopeOn = false;
            path.classList.remove('forward')
            path.classList.remove('backward')
            console.log('off');
        } else {
            alert("No permitido");
        }
        
    },
    stop: function() {
        if(engineOn == true && stopeOn == false) {
            path.classList.add('stop');
            path.classList.remove('forward')
            path.classList.remove('backward')
            stop.play();
            stopeOn = true;
            console.log('stop');
        } else {
            alert("No permitido");
        }
        
    },
    forw: function() {
        if(engineOn == true) {
            path.classList.remove('stop');
            path.classList.remove('backward')
            path.classList.add('forward');
            marcha.play();
            stopeOn = false;
            console.log('forward');
        }   else {
            alert("No permitido");
        }
        
    },
    back: function() {
        if(engineOn == true) {
            path.classList.remove('stop');
            path.classList.remove('forward')
            path.classList.add('backward');
            marcha.play();
            console.log('backward');
        } else {
            alert("No permitido");
        }
    },

};

car.info();

btn_on.onclick = function() {
    car.on();
}
btn_off.onclick = function() {
    car.off();
}
btn_stop.onclick = function() {
    car.stop();
}
btn_forw.onclick = function() {
    car.forw();
}
btn_back.onclick = function() {
    car.back();
}

