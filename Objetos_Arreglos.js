//Objetos
const usuario = {
    nombre: 'Diaz Dennis',
    correo: 'dennisdiaz407@gmail.com',
    educacion: 'Primicias de la Cultura de Quito',
    residencia: 'Quito-Ecuador',
    empleos: {
        MisEmpleos: 1,
        Preferencias: 2,
        Evaluaciones: false,
    },
    notificaciones: {
        todo: 12,
        empleosNuevos: 0,
        publicaciones: 0,
        menciones: 0
    },
    mensajes: 2
}

const Post = {
    nombreUsuario: 'Camila Sánchez',
    titulo: '6 Cursos gratuitos para dominar la IA en 2024',
    descripccion: 'Si aún no te has adentrado en el mundo de la IA Generativa, estás a tiempo Pero, \n ¿por dónde empezar sin gastar una fortuna en formación? \n Aquí te dejo 6 cursos gratuitos que puedes aprovechar desde hoy para llevar tus habilidades al siguiente nivel.',
    links: {
        link1: 'https://lnkd.in/eiWyJWqD',
        link2: 'https://lnkd.in/enY73rZn',
        link3: 'https://lnkd.in/ey7A5RzN',
        link4: 'https://lnkd.in/emNSaUYP',
        link5: 'https://lnkd.in/eRFCzHYE',
        link6: 'https://lnkd.in/evzESuvu',
    },
    reacciones: {
        reaccionesTotales: 552,
        reacRecomendar: 505,
        reacCelebrar: 15,
        reacInteresar: 18,
        reacApoyar: 6,
        reacEncantar: 8,
        reacGracia: 0
    }
}
let {nombreUsuario:nombre, reacciones:{reaccionesTotales:likes}, titulo} = Post
console.log(likes)
console.log(nombre)
console.log(titulo)

//Arreglos

const headerLinkedin = ['Inicio', 'Mi red', 'Empleos', 'Mensajes', 'Notificaiones', 'Yo', 'Para negocios']

const maestrias = [
    {
        nombre: 'Psicología',
        precio: 248,
        tipo: 'Distancia',
        tiempo: '9 semestres',
        jornada: 'Matutina'
    },
    {
        nombre: 'Finanzas',
        precio: 220,
        tipo: 'Distancia',
        tiempo: '8 semestres',
        jornada: 'Vespertina'
    },
    {
        nombre: 'Cyberseguridad',
        precio: 275,
        tipo: 'Presencial',
        tiempo: '9 semestres',
        jornada: 'Matutina'
    }
]

const nuevasFunciones= headerLinkedin.map((cab, index)=>{
    cabMayus=cab.toLocaleUpperCase()
    console.log(`${cabMayus} ${index+1}`)
})

maestrias.forEach(career => console.log(`Maestría en ${career.nombre} a $${career.precio}`))
