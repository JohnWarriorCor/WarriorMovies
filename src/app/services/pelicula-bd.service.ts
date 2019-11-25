import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'Forrest Gump',
      short: 'Forrest Gump',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Forrest Gump es un hombre sencillo con un coeficiente intelectual bajo pero buenas intenciones. Está atravesando la infancia con su mejor y única amiga Jenny. Su mamá le enseña los modos de vida y lo deja elegir su destino. Forrest se une al ejército para el servicio en Vietnam, encuentra nuevos amigos llamados Dan y Bubba, gana medallas, crea una famosa flota de pesca de camarones, inspira a la gente a trotar, comienza una locura de ping-pong, crea el smiley, escribe calcomanías y canciones, dona a la gente y se encuentra con el presidente varias veces. Sin embargo, todo esto es irrelevante para Forrest, que solo puede pensar en su amor de la infancia, Jenny Curran, que ha arruinado su vida. Aunque al final todo lo que quiere demostrar es que cualquiera puede amar a cualquiera.',
      img: 'assets/fg.jpg',
      fecha: '1994-07-23',
      trailer: 'bLvqoHBptjg',
      drive: '1gbvoxtalfSPUAR6Dp9HjyF9D3sHlc9QV/preview'
    },
    {
      idx : 1,
      titulo: 'Bohemian Rhapsody',
      short: 'Bohemian Rhapsody',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Bohemian Rhapsody es una celebración de Queen, su música y su extraordinario cantante Freddie Mercury. Freddie desafió los estereotipos y la convención destrozada para convertirse en uno de los artistas más queridos del planeta. La película traza el ascenso meteórico de la banda a través de sus canciones icónicas y su sonido revolucionario. Alcanzan un éxito sin igual, pero en un giro inesperado Freddie, rodeado de influencias más oscuras, rehuye a Queen en la búsqueda de su carrera en solitario. Habiendo sufrido mucho sin la colaboración de Queen, Freddie logra reunirse con sus compañeros de banda justo a tiempo para Live Aid. Mientras enfrenta valientemente un reciente diagnóstico de SIDA, Freddie lidera la banda en una de las mejores actuaciones en la historia de la música rock. Queen consolida un legado que continúa inspirando a extraños, soñadores y amantes de la música hasta nuestros días.',
      img: 'assets/br.jpg',
      fecha: '2018-10-31',
      trailer: 'mP0VHJYFOAU',
      drive: '1m5tWDL_RZ3vUOup1z5ToxAiynAIj20xM/preview'
    },
    {
      idx : 2,
      titulo: 'THE HUSTLE',
      short: 'Timadoras compulsivas',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Dos estafadoras, una de baja renta y la otra de clase alta, se unen para derrotar a los hombres que las han perjudicado.',
      img: 'assets/hus.jpg',
      fecha: '2019-05-10',
      trailer: 'ayaEM3mxdqM',
      drive: '1yhGIuQlWCVBwxB3C7BM-ZvKxdokWaTNW/preview'
    },
    {
      idx : 3,
      titulo: 'Overboard',
      short: 'Un mar de enredos',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Kate Sullivan es una madre soltera de tres hijas que trabaja en dos trabajos mientras estudia para ser enfermera. Le asignan limpiar alfombras en un yate propiedad del playboy mimado y arrogante Leonardo (Leo) Montenegro. Leo hace comentarios groseros hacia Kate y la despide sin paga cuando se niega a traerle comida. Cuando Kate grita su comportamiento, Leo la empuja fuera del bote junto con su equipo de limpieza. Mientras tanto, en México, las hermanas Magdalena y Sofía de Leo atienden a su padre enfermo. Furioso cuando Leo es anunciado como su sucesor para dirigir la empresa familiar, Magda decide visitarlo. Esa noche, Leo se desliza del yate y cae al océano sin ser visto. Se despierta en una playa con amnesia y sin recordar su identidad. Vaga por la ciudad y finalmente llega al hospital. Magda lo encuentra y lo deja allí sin reclamar después de enterarse de que tiene amnesia. Ella regresa a casa e informa falsamente que Leo ha muerto. Sofía sospecha que Magda está mintiendo ...',
      img: 'assets/ov.jpg',
      fecha: '2018-06-27',
      trailer: 'x5IJbZ5SyBI',
      drive: '1--7kI0oECmSsYR9G6janFP-yj9fV4lku/preview'
    },
    {
      idx : 4,
      titulo: 'coco',
      short: 'coco',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'A pesar de la desconcertante prohibición de música de su familia durante generaciones, Miguel sueña con convertirse en un músico consumado como su ídolo, Ernesto de la Cruz. Desesperado por demostrar su talento, Miguel se encuentra en la impresionante y colorida Tierra de los Muertos siguiendo una misteriosa cadena de eventos. En el camino, conoce al encantador embaucador Héctor, y juntos, emprenden un viaje extraordinario para descubrir la verdadera historia detrás de la historia familiar de Miguel.',
      img: 'assets/coco.jpg',
      fecha: '2017-12-01',
      trailer: 'awzWdtCezDo',
      drive: '1DBfPRW52x7llVeaneYEoBC6TdwKnwg5A/preview'
    },
    {
      idx : 5,
      titulo: 'Deadpool 2',
      short: 'Deadpool 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de perder a Vanessa (Morena Baccarin), el amor de su vida, el mercenario que rompe la cuarta pared, Wade Wilson, también conocido como Deadpool (Ryan Reynolds), debe reunir un equipo y proteger a un joven mutante, Russell Collins, también conocido como Firefist (Julian Dennison) de Cable (Josh Brolin), un cyborg peligroso y sin sentido del futuro, y también debe aprender la lección más importante de todas: ser parte de una familia nuevamente.',
      img: 'assets/dp2.jpg',
      fecha: '2018-05-18',
      trailer: 'D86RtevtfrA',
      drive: '1DmSaOFV0hQKQnIzM9h4IFXQt1cTV0loy/preview'
    },
    {
      idx : 6,
      titulo: 'Deadpool',
      short: 'Deadpool',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Esta es la historia de origen del ex operativo de las Fuerzas Especiales convertido en mercenario Wade Wilson, quien luego de ser sometido a un experimento deshonesto que lo deja con poderes curativos acelerados, adopta el alter ego Deadpool. Armado con sus nuevas habilidades y un sentido del humor oscuro y retorcido, Deadpool persigue al hombre que casi destruye su vida.',
      img: 'assets/dp1.jpg',
      fecha: '2016-02-19',
      trailer: '0JnRdfiUMa8',
      drive: '1ngzMlMK8yzuteBS4vJ8oy2gMV34TctdT/preview'
    },
    {
      idx : 7,
      titulo: 'A 2 metros de ti',
      short: 'a dos metros de ti',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Stella, de diecisiete años, pasa la mayor parte de su tiempo en el hospital como paciente con fibrosis quística. Su vida está llena de rutinas, límites y autocontrol, todo lo cual se pone a prueba cuando conoce a Will, un adolescente increíblemente encantador que tiene la misma enfermedad. Hay un coqueteo instantáneo, a través de restricciones que dictan que deben mantener una distancia segura entre ellos. A medida que su conexión se intensifica, también lo hace la tentación de tirar las reglas por la ventana y abrazar esa atracción. El amor no tiene límites',
      img: 'assets/2mt.jpg',
      fecha: '2019-09-13',
      trailer: 'cdZEItD8WX0',
      drive: '12GQtvFjGA50Nfw2KJKYLwFWudPgvLOdW/preview'
    },
    {
      idx : 8,
      titulo: 'what man want',
      short: '¿En qué piensan los hombres?',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Los agentes deportivos masculinos encerran a una mujer en su profesión, pero adquiere una ventaja inesperada sobre ellos cuando desarrolla la capacidad de escuchar los pensamientos de los hombres.',
      img: 'assets/wmw.jpg',
      fecha: '2019-02-08',
      trailer: 'HeoLiTirRp4',
      drive: '1z-FMwaa1jDGFE_U-9bcKd_LjGFpww3em/preview'
    },
    {
      idx : 9,
      titulo: 'Dumbo',
      short: 'Dumbo',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      fecha: '2019-03-29',
      trailer: '7NiYVoqBt-8',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview'
    },
    {
      idx : 10,
      titulo: 'Happy Death Day 2',
      short: 'Feliz día de tu muerte 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de haber sobrevivido a los hechos absurdos pero que ponen en peligro la vida en Feliz día de tu muerte (2017), la luchadora hermandad de mujeres, Tree Gelbman, se encuentra en el mismo dormitorio de la universidad, agradecida de estar viva. Sin embargo, esta vez, es el compañero de cuarto de Carter, Ryan, quien afirma que está reviviendo el mismo día paradójico una y otra vez, como un misterioso asesino paranoico con una máscara de cara de bebé de un solo diente con un gran cuchillo de cocina que se ha acostumbrado a asesinándolo En esas circunstancias, un valiente pero vano intento de enfrentar el desafío, una vez más, enviará a Tree de vuelta al punto de partida, atrapado en un ciclo de tiempo demasiado familiar y empapado de sangre. ¿Cuántas muertes separan a Tree de un cumpleaños verdaderamente feliz?',
      img: 'assets/hdd2.jpg',
      fecha: '2019-02-19',
      trailer: '_DxsjDpriX0',
      drive: '1ef8TwwSHSXnLiLNMttwG1VVvgxx2XIZP/preview'
    },
    {
      idx : 11,
      titulo: 'Happy Death Day',
      short: 'Feliz día de tu muerte',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Una adolescente, tratando de disfrutar su cumpleaños, pronto se da cuenta de que este es su último cumpleaños. Es decir, si ella puede descubrir quién es su asesino. Ella debe revivir ese día, una y otra vez, muriendo de una manera diferente cada vez. ¿Puede ella resolver su propio asesinato?',
      img: 'assets/hdd1.jpg',
      fecha: '2017-11-10',
      trailer: 'n4gaz7w1E5E',
      drive: '1Q8q6Y9EfsTezfY-nG_8UshVE5T9hlm3B/preview'
    },
    {
      idx : 12,
      titulo: 'Toy Story 4',
      short: 'Toy Story 4',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Woody, Buzz Lightyear y el resto de la pandilla se embarcan en un viaje por carretera con Bonnie y un nuevo juguete llamado Forky. El viaje aventurero se convierte en una reunión inesperada cuando el pequeño desvío de Woody lo lleva a su amigo Bo Peep, perdido hace mucho tiempo. Mientras Woody y Bo discuten los viejos tiempos, pronto comienzan a darse cuenta de que están separados por dos mundos cuando se trata de lo que quieren de la vida como un juguete.',
      img: 'assets/toy4.jpg',
      fecha: '2019-06-21',
      trailer: 'wmiIUN-7qhE',
      drive: '1FdkIicO8Sp8kFkH0sqZN1R2rYjNqxx_d/preview'
    },
    {
      idx : 13,
      titulo: 'Dectetive Pikachu',
      short: 'Pokémon: Detective Pikachu',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La historia comienza cuando el detective Harry Goodman desaparece misteriosamente, lo que lleva a su hijo Tim de 21 años a averiguar qué sucedió. Ayudando en la investigación está el antiguo compañero Pokémon de Harry, el Detective Pikachu: un súper detective adorable, hilarante y sabio que es un misterio incluso para sí mismo. Al descubrir que están equipados de manera única para comunicarse entre sí, Tim y Pikachu unen fuerzas en una emocionante aventura para desentrañar el misterio enredado. Persiguiendo pistas por las calles iluminadas con neón de Ryme City, una metrópolis moderna y extensa donde los humanos y los Pokémon viven codo con codo en un mundo hiperrealista de acción en vivo, se encuentran con un elenco diverso de personajes Pokémon y descubren un impactante trama que podría destruir esta coexistencia pacífica y amenazar a todo el universo Pokémon.',
      img: 'assets/pik.jpg',
      fecha: '2019-04-10',
      trailer: 'XzCj0lGfveU',
      drive: '1awgJctSr_9EhrHHqrl7Rx7HS6DefR3Yy/preview'
    },
    {
      idx : 14,
      titulo: 'El rey león',
      short: 'El rey león',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después del asesinato de su padre, un joven príncipe león huye de su reino solo para aprender el verdadero significado de responsabilidad y valentía.',
      img: 'assets/rl.jpg',
      fecha: '2019-07-19',
      trailer: '7TavVZMewpY',
      drive: '1VKoP_GHb2RqGxKRuiZfoPK33HIHAYJkz/preview'
    },
    {
      idx : 15,
      titulo: 'PETS 2',
      short: 'LA VIDA SECRETA DE TUS MASCOTAS',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Max enfrenta algunos cambios importantes después de que su dueña Katie se case y ahora tenga un hijo. En un viaje familiar al campo, Max conoce a un perro de granja llamado Rooster, y ambos intentan superar sus miedos. Mientras tanto, Gidget intenta rescatar el juguete favorito de Max de un apartamento lleno de gatos, y Snowball se embarca en una misión para liberar a un tigre blanco llamado Hu de un circo.',
      img: 'assets/pets2.jpg',
      fecha: '2019-06-07',
      trailer: 'mYocfuqu2A8',
      drive: '10cdi9GHKjH1Sp0KzK-0LTjM8htEjAInD/preview'
    },
    {
      idx : 16,
      titulo: 'Star Wars 8',
      short: 'Star Wars: Los últimos Jedi',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El Maestro Jedi en la clandestinidad Luke Skywalker intenta involuntariamente guiar al joven y esperanzado Rey en los caminos de la fuerza, mientras que Leia, ex princesa convertida en general, intenta alejar lo que queda de la Resistencia del despiadado tiránico tiroteo de la Primera Orden.',
      img: 'assets/sw8.jpg',
      fecha: '2017-12-14',
      trailer: 'Q0CbN8sfihY',
      drive: '18OlpXKHZsUqRGWNDC3ctIL7S1nw8Tdqj/preview'
    },
    {
      idx : 17,
      titulo: 'Hobbs & Shaw',
      short: 'Fast & Furious: Hobbs & Shaw',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El abogado Luke Hobbs y el marginado Deckard Shaw forman una alianza improbable cuando un villano cibernéticamente mejorado amenaza el futuro de la humanidad.',
      img: 'assets/FYF.jpg',
      fecha: '2019-07-01',
      trailer: 'EVH78PvQCTE',
      drive: '1R8MqgRsa9xfNhIo9JY7r4-3DlnurkT20/preview'
    },
    {
      idx : 18,
      titulo: 'John Wick 3',
      short: 'John Wick: Capítulo 3 - Parabellum',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En esta tercera entrega de la franquicia de acción alimentada con adrenalina, el experto asesino John Wick (Keanu Reeves) regresa con un precio de $ 14 millones en su cabeza y un ejército de asesinos de caza recompensas en su camino. Después de matar a un miembro del clan clandestino internacional de asesinos, la Mesa Alta, John Wick está excomulgado, pero los asesinos y sicarios más despiadados del mundo esperan su turno.',
      img: 'assets/jw3.jpg',
      fecha: '2019-04-31',
      trailer: 'EgrnoeE619o',
      drive: '1VEM7mJY0cfSUr4bnuklRcbeCCCCldHWk/preview'
    },
    {
      idx : 19,
      titulo: 'Dora',
      short: 'Dora y la ciudad perdida',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de pasar la mayor parte de su vida explorando la jungla con sus padres, nada podría preparar a Dora para su aventura más peligrosa: la escuela secundaria. Siempre la exploradora, Dora se encuentra rápidamente liderando a Boots, Diego, un misterioso habitante de la jungla y un grupo de adolescentes en una aventura de acción en vivo para salvar a sus padres y resolver el misterio imposible detrás de una civilización inca perdida.',
      img: 'assets/dora.jpg',
      fecha: '2019-08-30',
      trailer: 'gUTtJjV852c',
      drive: '1YzENQfYabjkCkicPFvzN73ctQW5RrNqb/preview'
    },
    {
      idx : 20,
      titulo: 'la dama y el vagabundo',
      short: 'la dama y el vagabundo',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'CGI y reinvención de acción real del clásico de Disney de 1955.',
      img: 'assets/ldv.jpg',
      fecha: '2019-11-12',
      trailer: 'A2ZDDU34gYw',
      drive: '19ndXArwWcP_JX-UxibIGrGpQ8UHgyyRK/preview'
    },
    {
      idx : 21,
      titulo: 'Bumblebee',
      short: 'Bumblebee',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En Cybertron, los Autobots, liderados por Optimus Prime, están a punto de perder la Gran Guerra Cybertroniana ante sus enemigos, los Decepticons, y comienzan a hacer preparativos para abandonar el planeta. Los Decepticons liderados por Shockwave, Soundwave y Starscream los emboscan durante la evacuación, y Optimus envía a un joven explorador, B-127, a la Tierra para establecer una base de operaciones donde los Autobots puedan reagruparse. El B-127 llega a la Tierra solo en 1987, aterriza de manera forzada en California e interrumpe un ejercicio de entrenamiento que realiza el Sector 7, una agencia secreta del gobierno que monitorea la actividad extraterrestre en la Tierra. El agente del sector 7, el coronel Jack Burns, presume que B-127 es un invasor hostil y ataca, conduciendo a B-127 al bosque, donde es emboscado por el Decepticon Blitzwing. Cuando B-127 se niega a revelar el paradero de Optimus, Blitzwing arranca rencorosamente su caja de voz y daña su núcleo de memoria. B-127 logra destruir Blitzwing antes de colapsar de sus heridas. Antes de entrar en estasis, ...',
      img: 'assets/bb.jpg',
      fecha: '2018-12-28',
      trailer: 'lcwmDAYt22k',
      drive: '1n5iONfl04dClBibO-kgpbYk-7CqY2hUR/preview'
    },
    {
      idx : 22,
      titulo: 'AMERICAN PIE 8',
      short: 'AMERICAN PIE: EL REENCUENTRO',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Ha pasado más de una década y la pandilla regresó a East Great Falls, Michigan, para el fin de semana. Descubrirán cómo se han desarrollado sus vidas a medida que se reúnen para su reunión de secundaria. ¿Cómo ha tratado la vida a Michelle, Jim, Heather, Oz, Kevin, Vicky, Finch, Stifler y la madre de Stifler? En el verano de 1999, fueron cuatro niños en una búsqueda para perder su virginidad. Ahora Kara es una linda estudiante de secundaria que busca al chico perfecto para perder su virginidad.',
      img: 'assets/amp8.jpg',
      fecha: '2012-04-04',
      trailer: 'DxBxqbsGlK0',
      drive: '1faLxvGMlS85QoFfi2WF65AP5G77ElKxm/preview'
    },
    {
      idx : 23,
      titulo: 'Belleza oculta',
      short: 'Belleza inesperada',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Cuando un exitoso ejecutivo de publicidad de Nueva York sufre una gran tragedia, se retira de la vida. Mientras sus amigos preocupados intentan desesperadamente volver a conectarse con él, él busca respuestas del universo escribiendo cartas a Amor, Tiempo y Muerte. Pero no es hasta que sus notas traen respuestas personales inesperadas que comienza a comprender cómo estas constantes se entrelazan en una vida plenamente vivida, y cómo incluso la pérdida más profunda puede revelar momentos de significado y belleza.',
      img: 'assets/bi.jpg',
      fecha: '2016-12-23',
      trailer: 'aYuELL1j5_E',
      drive: '1nOnaC2aQ6qKDMSzpvie9cz7NuFDHPA2f/preview'
    },
    {
      idx : 24,
      titulo: 'Ready Player One',
      short: 'Ready Player One',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el año 2045, el mundo real es un lugar duro. La única vez que Wade Watts (Tye Sheridan) realmente se siente vivo es cuando escapa al OASIS, un universo virtual inmersivo donde la mayoría de la humanidad pasa sus días. En el OASIS, puedes ir a cualquier parte, hacer cualquier cosa, ser cualquiera, los únicos límites son tu propia imaginación. El OASIS fue creado por el brillante y excéntrico James Halliday (Mark Rylance), quien dejó su inmensa fortuna y control total del Oasis al ganador de un concurso de tres partes que diseñó para encontrar un heredero digno. Cuando Wade conquista el primer desafío de la búsqueda del tesoro que dobla la realidad, él y sus amigos, también conocidos como High Five, son arrojados a un universo fantástico de descubrimiento y peligro para salvar al OASIS.',
      img: 'assets/rpo.jpg',
      fecha: '2018-03-29',
      trailer: 'cSp1dM2Vj48',
      drive: '1lKGPGdtKDgttnBBziYNWQjw0ul_JejT3/preview'
    },
    {
      idx : 25,
      titulo: 'Anabelle 3',
      short: 'Annabelle vuelve a casa',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Decididos a evitar que Annabelle causara más estragos, los demonólogos Ed y Lorraine Warren llevan la muñeca poseída a la sala de artefactos cerrada en su casa, colocándola "a salvo" detrás de un cristal sagrado y reclutando la bendición del sacerdote. Pero una noche impía de horror aguarda cuando Annabelle despierta a los espíritus malignos en la habitación, quienes se enfocan en un nuevo objetivo: Judy, la hija de diez años de los Warren, y sus amigas.',
      img: 'assets/an3.jpg',
      fecha: '2018-07-12',
      trailer: 'KUnKWjeQA9A',
      drive: '1bRx_qxJ0eJjmzp3d9XaUBJb8ULMkKVfW/preview'
    },
    {
      idx : 26,
      titulo: 'X-Men Fénix Oscura',
      short: 'X-Men Fénix Oscura',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Los X-Men. Protectores de la paz. Jean Gray es uno de los X-Men más queridos. Pero cuando una misión sale mal, Jean está expuesta a un poder oscuro y antiguo. Este poder ha destruido todo con lo que entra en contacto, hasta ella. Ahora que este poder se está volviendo inestable, lo libera con destrucción y enojo. Ahora que este poder extranjero la está consumiendo, y el mundo está amenazado, los X-Men tienen que enfrentar una verdad importante: deben salvar al mundo o a su amigo que lo amenaza.',
      img: 'assets/xmf.jpg',
      fecha: '2018-06-7',
      trailer: '1-q8C_c-nlM',
      drive: '1fAgYtObY_5sTzUQ5r6U1iacmVEoIkqcn/preview'
    },
    {
      idx : 27,
      titulo: 'Angry birds 2',
      short: 'Angry birds 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de salvar a Bird Island de una invasión total de cerdo verde en Angry Birds: La película (2016), el héroe local siempre irritable de la isla, Red, todavía se encuentra luchando con Pig Island. A medida que la guerra de broma entre cerdos y pájaros se desata, los enormes proyectiles helados que provienen de la isla de águila cubierta de hielo del tirano Zeta amenazan la seguridad de ambos paraísos, a menos que Red y el Rey Leonard acuerden formar una tregua difícil pero honesta. Ahora, Red, Bomb, Mighty Eagle, Chuck y su brillante hermana, Silver, tienen que unir fuerzas con el poderoso equipo porcino de Leonard para frustrar los audaces esquemas del megalómano Zeta para dominar el mundo. Sin embargo, ¿es rojo capaz de cambiar?',
      img: 'assets/ab2.jpg',
      fecha: '2018-07-23',
      trailer: 'RDj8Y2K0ODA',
      drive: '1yWxngJGh0OSgyWu0YwDAPcug-iRVQE8s/preview'
    },
    {
      idx : 28,
      titulo: 'Spiderman far home',
      short: 'Spider-Man: Lejos de casa',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Nuestro amigable vecindario Superhéroe decide unirse a sus mejores amigos Ned, MJ y el resto de la pandilla en unas vacaciones europeas. Sin embargo, el plan de Peter de dejar atrás a los súper heroicos durante algunas semanas se descarta rápidamente cuando acepta a regañadientes ayudar a Nick Fury a descubrir el misterio de varios ataques de criaturas elementales, creando estragos en todo el continente. ',
      img: 'assets/spfh.jpg',
      fecha: '2018-07-23',
      trailer: 'DYYtuKyMtY8',
      drive: '1RXSnobZTvAyRHGBZ2WFUIFBAvYNvRuJ8/preview'
    },
    {
      idx : 29,
      titulo: 'it capítulo 2',
      short: 'it capítulo 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Derrotado por miembros del Club de Perdedores, el malvado payaso Pennywise regresa 27 años después para aterrorizar a la ciudad de Derry, Maine, una vez más. Ahora adultos, los amigos de la infancia hace mucho tiempo que se separaron. Pero cuando la gente comienza a desaparecer, Mike Hanlon llama a los demás a casa para una última posición. Dañados por las cicatrices del pasado, los perdedores unidos deben conquistar sus miedos más profundos para destruir el Pennywise que cambia de forma, ahora más poderoso que nunca.',
      img: 'assets/it2.jpg',
      fecha: '2019-09-06',
      trailer: 'xhJ5P7Up3jA',
      drive: '1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB/preview'
    },
  ];
  getPeliculas(): Peliculas[] {
    return this.peliculas;
  }

  getPelicula( idx: string ) {
    return this.peliculas[idx];
  }
  buscarPeliculas( termino: string ): Peliculas[] {

    const peliculaArr: Peliculas[] = [];
    termino = termino.toLowerCase();

    for ( const pelicula of this.peliculas ) {

      const titulo = pelicula.short.toLowerCase();

      if ( titulo.indexOf( termino ) >= 0  ) {
        peliculaArr.push( pelicula );
      }

    }

    return peliculaArr;

  }
}
export interface Peliculas {
  idx?: number;
  short: string;
  titulo: string;
  sinopsis: string;
  img: string;
  fecha: string;
  trailer: string;
  drive: string;
}
