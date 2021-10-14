/* 
Una tienda de venta de celulares necesita un sistema para mostrar las particularidades de cada celular. Al cliente le interesaron 
3 celulares, cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram. Cada celular debe 
poder prender, reiniciar, tomar fotos y grabar. 
 */

class Phones {
    constructor (color, weight, size, ram, cr) {
        this.color = color
        this.weight = weight
        this.size = size
        this.camera_resolution = cr
        this.RAM = ram
        this.on = false
    }
    press_power_button() {
        if (this.on == false) {
            alert("Celular prendido")
            this.on = true
        } else {
            alert("Celular apagado")
            this.on = false
        }
    }
    restart() {
        if (this.on == true) {
            alert("Reiniciar celular")
        } else {
            alert("El celular esta apagado")
        }
    }
    take_photo() {
        alert(`Fotografia tomada con una resolucon de ${this.camera_resolution}`)
    }
    record_a_viedeo(){
        alert(`Grabando video con una resolucion de ${this.camera_resolution}`)
    }
    mobile_information(){
        return `
        Color: ${this.color} <br>
        Peso: ${this.weight} <br>
        Tamaño: ${this.size} <br>
        Resolucion de camara: ${this.camera_resolution} <br>
        Memoria ram: ${this.RAM}`
    }
}

class Top_range extends Phones{
    constructor (color, weight, size, ram, cr,fa) {
        super(color, weight, size, ram, cr)
        this.frontal_camera = fa
    }
    record_video_HD() {
        alert("Estas grabando un video en 4K @60fps")
    }
    facial_recognition() {
        alert("Inicializando FaceID")
    }
    top_range_info() {
        return this.mobile_information() + `Resolucion de camara frontal: ${this.frontal_camera}`
    }
} 


phone1 = new Phones ("Gris espacial", "174 gr", "5.8'", "3 GB", "Cámara dual de 12 Mpx")
phone2 = new Phones ("Rosa", "194 gr", "6.1'", "4 GB", "Cámara dual de 12 Mpx")
phone3 = new Phones ("Blanco", "164 gr", "6.1'", "4 GB", "Cámara dual de 12 Mpx") 
phone4 = new Top_range("Azul pacífico", "189 gr", "OLED de 6,1'", "6 GB", "LiDAR 12 MP", "12 megapíxeles ")
phone5 = new Top_range("Grafito", "148 gr", "OLED de 6,1'", "5 GB", "LiDAR 12 MP", "7 MP")

/* 
phone1.press_power_button()
phone1.take_photo()
phone1.record_a_viedeo()
phone1.restart()
phone1.press_power_button()
 */

//console.log(phone5.mobile_information())

document.getElementById("card1").innerHTML = `${"iPhone X <br>" + phone1.mobile_information()}`
document.getElementById("card2").innerHTML =  `${"iPhone 11 <br>" + phone2.mobile_information()}`
document.getElementById("card3").innerHTML =  `${"iPhone 12 <br>" + phone3.mobile_information()}`
document.getElementById("card4").innerHTML =  `${"iPhone 12 pro <br>" + phone4.mobile_information()}`
document.getElementById("card5").innerHTML =  `${"iPhone 12 pro max <br>" + phone5.mobile_information()}`
