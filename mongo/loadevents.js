db = db.getSiblingDB('trubbi_test')
db.events_test.drop()
db.events_test.insertMany(
[
{
    url_image: 'https://picsum.photos/150?random=11', 
    title: 'Barak en Tecnópolis', 
    street: 'AVENIDA CONSTITUYENTES 2220',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'MUSICA',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'TECNOPOLIS'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Fuego y Poder', 
    street: 'AVENIDA SAN MARTIN 1627',
    neighbourhood: 'FLORIDA',
    date: '01-05-2022', 
    time_start: '12:00',    
    time_end: '18:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'ARTES_ESCENICAS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'MUNICIPALIDAD DE VICENTE LOPEZ'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'ITF-TAO instructors course', 
    street: 'ZUFRIATEGUI 2021',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'OTROS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'PLATENSE'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'La milonga del rio', 
    street: 'EL RÍO Y MELO',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'OTROS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'BERTOLT'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Por la vuelta', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '11-05-2022', 
    time_start: '12:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'FERIA_Y_CONFERENCIAS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'siga la vaca'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Proteccion centro', 
    street: 'CLUB DEFENSORES DE OLIVOS',
    neighbourhood: 'OLIVOS',
    date: '21-05-2022', 
    time_start: '12:00',    
    time_end: '14:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'OTROS',
    indoor: true,
    capacity: 100,
    active: true,
    free: true,
    provider: 'DEFENSORES DE OLIVOS'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Día de la Primavera', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'FAMILIA_Y_NIÑOS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'MUNICIPALIDAD DE VICENTE LOPEZ'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Congreso de psicología', 
    street: 'GASPAR CAMPOS 861',
    neighbourhood: 'VICENTE LOPEZ',
    date: '11-06-2022', 
    time_start: '09:00',    
    time_end: '15:00', 
    description: '',
    cathegory: 'FERIAS_Y_CONFERENCIAS',
    indoor: true,
    capacity: 500,
    active: true,
    free: true,
    provider: 'RAGIO'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Taller de RCP', 
    street: 'REMEDIOS DE ESCALADA 1411',
    neighbourhood: 'FLORIDA',
    date: '09-05-2022', 
    time_start: '16:30',    
    time_end: '18:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'OTROS',
    indoor: true,
    capacity: 100,
    active: true,
    free: true,
    provider: 'CRUZ ROJA'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'ARTES VISUALES', 
    street: 'GASPAR CAMPOS 861',
    neighbourhood: 'VICENTE LOPEZ',
    date: '01-07-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'ARTE_Y_CULTURA',
    indoor: false,
    capacity: 500,
    active: true,
    free: true,
    provider: 'RAGIO'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Circuito de estaciones', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-07-2022', 
    time_start: '07:30',    
    time_end: '12:00', 
    description: '',
    cathegory: 'Banda en vivo y ... Leer más',
    indoor: false,
    capacity: 5000,
    active: true,
    free: false,
    provider: 'SPORT CLUB'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Fuegos artificiales', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-08-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'FAMILIA_Y_NIÑOS',
    indoor: false,
    capacity: 1000,
    active: true,
    free: true,
    provider: 'FOOD TRUCKS'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Teatro de la calle', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '15:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'ARTES_ESCENICAS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'BERTOLT'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Stand Up', 
    street: 'PEDRO GOYENA 3231',
    neighbourhood: 'OLIVOS',
    date: '01-06-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'ARTE_Y_CULTURA',
    indoor: true,
    capacity: 400,
    active: true,
    free: false,
    provider: 'BERTOLT'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Bandas en vivo', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '28-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'MUSICA',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'MUNICIPALIDAD DE VICENTE LOPEZ'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Día del niño', 
    street: 'AVENIDA SAN MARTIN 1627',
    neighbourhood: 'FLORIDA',
    date: '15-06-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Banda en vivo y ... Leer más',
    cathegory: 'FAMILIA_Y_NIÑOS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'MUNICIPALIDAD DE VICENTE LOPEZ'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Actividades infantiles', 
    street: '',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Obra de teatro cómica... leer más..',
    cathegory: 'FAMILIA_Y_NIÑOS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'MUNICIPALIDAD DE VICENTE LOPEZ'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Tini Stoessel', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LOPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Obra de teatro cómica... leer más..',
    cathegory: 'MUSICA',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'TICKETEK'
},
{
    url_image: 'https://picsum.photos/150?random=', 
    title: 'Inmaduros', 
    street: 'PASEO DE LA COSTA',
    neighbourhood: 'VICENTE LÓPEZ',
    date: '21-05-2022', 
    time_start: '19:30',    
    time_end: '00:00', 
    description: 'Obra de teatro cómica... leer más...',
    cathegory: 'ARTES_ESCENICAS',
    indoor: false,
    capacity: 2000,
    active: true,
    free: true,
    provider: 'TICKETEK'

}
]
)