/* Crea un sistema para regstrar los alumnos que esten presentes y ausentes en clases. Pasados los 30 dias
mostrar la situacion de los alumnos. Numero total de presencias, ausencias o si el alumno quedo libre por inasistencias. Se puede tener un 
maximo de 10% de ausencia por semestre, si se tiene mas, el alumno esta reprobado. */

let number_students = prompt("¿Cuantos alumnos son en la clase? ")
let total_students = []

for (i = 0; i < number_students; i++) {
    total_students[i] = [prompt("Nombre del alumno:" + (i + 1)), 0]
}


const take_attendance = (name, p) => {
    let presence = prompt(name)
    if (presence == "P" || presence == "p") {
        total_students[p][1] ++
    }
}



for (i = 0; i < 30; i++) {
    for (student in total_students) {
        take_attendance(total_students[student][0], student)
    }
}

for (student in total_students) {
    let result = `${total_students[student][0]} :<br>
    Presentes: <b> ${total_students[student][1]} </b> <br>
    Ausentes: <b> ${30 - (total_students[student][1])}</b> `  
    if (30 - total_students[student][1] > 18) {
        result += "<b style = 'color:tomato'> Alumno reprobado por inasistencias </b> <br> <br>"        
    } else {
        result += "<br> <br>"
    }
    document.write(result)
}    
        