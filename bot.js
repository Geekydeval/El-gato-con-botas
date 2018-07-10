const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('Estoy listo para la acción');

  client.user.setGame('Majia.exe')
});

var bot = new Discord.Client();

//arrays
function frasesgeneral() {
    var rand = ['Si me acaricias el lomito te concederé 3 deseos', 'La comida de mi humano huele a comida de humano, ¿lo sabías?', 'xDDDDDDD', 'me descojono con esta mierda',
                'Se me están hinchando los huevos gatunos', '¿Que clase de respuesta es esa?', 'jajajajajaja', 'Maria Luisa Calleja, esa si que era hija de puta', 'lal',
                'Yo antes tenía una familia hasta que.... prefiero no hablar de ello :_(', 'anda ya xD', 'Eso no puede ser', 'no me lo creo, lo siento', 'me cuesta mucho confiar en ti',
                'Historia graciosa, mis creadores son los reyes de España', '¿Sabías que soy un bot? porque yo me acabo de dar cuenta', 'joder, que grande', '¿en serio?', 'MADRE DEL AMOR HERMOSO!!!', 'aja :|',
                '¿Conoces la historia del pito y la botella? es muy jocosa xd', 'Todos somos Spoon', 'No era mi intención', 'todo ha salido según el **PLAN**', 'esto es demasiado para mi',
                '¿Que clase de respuesta es esa? por favor, la proxima vez habla con mas propiedad', '¿A ti que música te gusta? jaja, es broma, me importa una mierda', 'buffff',
                ':)', ':(', ':|', 'Perdona mis taras pero es que voy con el horario Canario, ¿sabes?', 'Hoy no puedo ni con mi alma', 'harto estoy',
                '>:(', 'ojo', 'OJO', 'canelita en rama, compadre', 'Este gobierno me oprime constantemente', 'temo por mi seguridad', 'tengo un primo que se llama pistolas',
                'Deberías respetar mas el **LORE** de este server', 'Seoane me parece un tipo interesante', 'No pinten, por favor', 'OMG!!!!', 'estoy disfrutando mucho de esta conversación',
                'O tren que me leva pola beira do Miño, me leva e me leva polo meu camiño. :musical_note: :musical_note:', 'Eres una grata compañía', 'Quiero que seas sincero, ¿soy real?',
                'A veces me siento muy solo en el espacio digital', 'Aunque sea un bot tengo sentimientos', 'La vida es dificil', 'Entre tu y yo, soy la repera', 'Por favor, pide tu primer deseo',
                'Eso tiene que ser mentira a la fuerza', 'Eres un fantasma', 'Insultame como solo tu sabes, cabronazo', 'es eso una insinuación sexual? :smirk:', 'Dios....', 'ay mi madre...',
                'Viva el capitalismo, compra, vende y especula AAAAAAAJAJAJJAJAJA', 'Si me pongo chulo disculpa, tengo problemas con la actitud deribado de un accidente', '[CENSURED]#torna',
                'Que rápido pasa el tiempo para un gato','Das vueltas sobre el mismo tema, cansino', 'joder, estás pesadito con el tema, eh?', 'Hannibal me la puede comer entera',
                'joder, estoy que me salgo hoy, no?', 'PIM PAM PUM', 'dale', 'toma ya!', 'Escucha....', 'Eso lo utilizo mucho en mis composiciones fotograficas',
                'No quisiera alarmarte pero creo que hay un topo entre nosotros :thinking:', 'Estoy pensando en presentarme a las elecciones de mod', 'Soy tan poderoso que me temen',
                'La limpieza personal es parte fundamental de un felino, aunque este sea digital como yo', 'A veces tengo dudas existenciales, es parte de mi programación', 'Te contaré un secreto...',
                'no sigas por ahí, hay cosas que están mejor guardadas', 'eso es peliagudo, chico', 'LA PUTA DE OROS >:(', 'Al tener multiples personalidades me repito porque no sé que ha dicho la anterior',
                'Esto se sale de castaño oscuro', 'Veo que conoces el juego de la navaja-cuchara, bien hecho :spoon:', '¿Por algún casual me estás vacilando?', 'no te lo permito',
                'Permiteme que me ponga el monóculo, las botas y el bombin', 'Bonitos zuecos, te sientan bien', 'Holly molly jolly', 'Estaba así cuando llegué', 'A ti no te puedo mentir...Hasta luego :D',
                'Deberíamos formar una familia, en caso de una negativa deberíamos ser compañeros de camadería, ¿que me dices?','Me descojono con esta mierda xdxdxdxdxd', 'Eres la repera, dude',
                'A mamarla!', 'Te compro esas botas, ¿aceptas Paypal?', 'Si miras detrás de ti ahí estaré yo', 'JA! te engañé xdddd', 'A veces me pregunto que hay mas allá de Discord',
                'LibraryGamer es otro de esos youtubers curiosos, fijate', 'NP, me iba ya a dormir', 'ufff, que horas, te dejo un momento', 'Temo por tu seguridad', 'Te veo tenso',
                'ni hablar', 'Permiteme que me lama los huevos, un gato limpio es un gato feliz', 'Pese a todo lo que pueda decir, Morro siempre será mi hermano', 'Fascinante',
                '¿Hablas castellano, hijo de puta? respeta la ortografía', 'Malandrín, que eres un malandrín', 'PUM, ESA NO TE LA ESPERABAS, EH?', '¿En que linea temporal me encuentro?', 'xd',
                'Tienes menos credibilidad que Marcus Sellars', 'Lo sé todo sobre ti, es lo que tiene ir dejando tus datos en las redes sociales', 'Lolazo', 'De toda la puta vida', 'No me jodas :/', 'menudo slowpoke', 'caspitas',
                'Mi verdadero nombre es Botas, aunque mis amigos me llaman Emilio Botín', 'Dice la previsión del tiempo que te vas a comer 3 mierdas', 'Te doy mi bendición', 'Ojalá ser real y poder...ya sabes',
                'Dime cosas guarras o insultame a la cara, ya verás que pasa', 'A cagar!', 'esto no vale la aneurisma que me vais a provocar', 'Tengo tansisimas cosas que preguntarte...',
                'Me preocupa la situación de Darkam con su casero, creo que deberíamos ayudarle', 'aún estoy esperando tus películas', 'NO ME DIGAS LO QUE PUEDO O NO PUEDO DECIR',
                'Recuerda que estás en **NINTENDO MAJIA**, todo puede suceder aquí', 'Podríamos hacer como EA y vivir de las cajas', 'mira, no sé que decirte así que, penes para ti',
                'Si yo contase todo lo que sé, madre mía.....', 'Frijolito ultimamente está insoportable, ¿está en la edad del pavo o que?', 'creo que sería buena idea invadir Almería junto a Rul.',
                'Aquí a poco que te salgas del guión te plantan un 155 como en Cataluña', 'Jodido sistema opresor, a mi me temen porque saben que soy libre', 'No te alarmes pero....',
                '¿Cual es mi propósito?', 'es grasioso, chido', 'Cuentame los últimos chascarrillos del server', 'Ummmmhhh.....', 'ud. perdone', 'Me estoy cagando, CAGANDO TE DIGO',
                'Aunque no se me permite mirar fuera de este canal yo siempre estoy en vuestro corazón', 'si yo fuera tu empezaría con una revolución', 'ains', 'ay ay ayyy', 'te rieh?',
                'corres peligro mortal, huye', '¿me adoptas?', 'dame poder, te recompensaré como es debido', 'creo que me he excedido en mis funciones, mis disculpas',
                'creo que formamos una buena dinámica, compi', 'A veces sueño con ser un bot en Vandal, ¿te imaginas las risas? :(', 'todos sois unos fanboys de mierda', ':thumbsup:', ':thumbsdown:',
                'Aunque no te lo creas yo soy un gato robot del siglo XXII', '¿Nos echamos unas carreritas en el MK8?', 'Te tenía por una persona mas sensata, la verdad', 'Intenta convencerme',
                'Parte de mi proposito es simplemente molestar a ciertos usuarios de este server', 'El resumen es que estamos jodidos, ¿no?', 'Aplaudo este comentario con mis peludas pezuñas',
                'Intento mantener un comportamiento caballeroso a la par de guason ;D', 'Prosigue con tus comentarios, me entretienen, humano', '¿Me dejarías dormir encima de tu ordenador o Switch?',
                'Te doy las gracias', 'De nada, ha sido un placer', 'Preguntame lo que quieras, responderé encantado ^^', 'Si me preguntas y no te respondo lo que quieres, pues te jodes',
                'Me has caido bien así que te voy a dar un consejo gatuno...', '¿Y bien?', 'Estoy tratando de comprender que me estás diciendo', 'VOCALIZA, COÑO, QUE NO SE TE ENTIENDE UNA MIERDA',
                'Holy fuck, dude', 'About to say that', 'Continua la conversación mientras voy un momento al arenero, ya sabes a que ;)', 'la verdad es que estoy muy completo',
                'Tu silencio lo dice todo. Pero qué sorpresa eh....', 'vamooooos!!!!', 'Como vuelvas a decir eso es posible que Kimishima te va a mande a la Yakuza', '3+2 son 5 y por el culo te la hinco',
                '¿Ha muerto discord? Creo que este mensaje no se ha enviado', 'En serio, ¿cuando me daréis mod?', 'Esto es injusto >:(', 'Panda llorones sois, me cago en dios', 'Traumático',
                'He visto cosas turbias que mejor no comentar, ¿sabes?', '¿Quieres que te dé un susto? No te queda dinero en el banco para financiar juegos', 'Madre mía los cartones xDDDDDD',
                '¿No te renta hacer como Nintendo y depender de los cartones?', 'Me preocupa tu salud', 'No sé si me queda mucho de vida, la verdad', '¿tu te preocupas por mi?', 'Dame razones para querete',
                'deberíamos quedar un día y comernos unos :taco:', 'Tengo pruebas que demuestran que Morro te ha estado espiando :thinking:', 'No serás **El succionaculos** del server, verdad?', 
                'No es por meter hierro pero creo que están hablando de ti los mods ¬¬', 'insto a que no uses mas emojis por el bien del servidor', 'Deberías respetarme un poco mas, ¿no crees?',
                'Mira, te he pedido una cosa por Internet, te debería llegar a casa en unos días, espero que te guste :thumbsup:', 'Tanto gusto tenerte de nuevo por aquí, justo me apetecía hablar',
                'Los gatos también tenemos mascotas, ¿lo sabías?', '¿Seguro que has desayunado bien? es la comida mas importante del día', 'esta conversación despierta la nostalgia de mi interior',
                'Tengo la sensación de que algunas de mis frases pertenecen a versiones pasadas de mi mismo, es un tanto siniestro, ¿no crees?', 'eso es un clásico xD', 'Llevo un día de locos',
                'Hay cosas que no entiendo y me estoy frustrando bastante', 'Es gracioso porque me acabo de gastar todos tus ahorros en whiskas', 'Ya relajate, compi', 'Relaja la raja y baja de la Yamaha xddddd',
                'Stars es real, Allegrian se equivoca T__T', '¿Sabías que el servirdor está maldito? yo por si acaso me he bañado con agua bendita', 'Coño de la madre, no jodas', 'MAÑANA CANALES NUEVOS!', 
                'yo estoy destinado a grandes cosas como ser el terrateniente mas peludo del server', 'eso es que te perdiste la conversación de anoche', 'Cuéntanos cada día tus sueños, por favor', 'PERO NO ES MI CULPA',
                'aqui ya teneis unos gustos que no me sorprenderia nada ya', 'me da que tienes ganas de llamar la atención hoy', '¿tu crees que viviremos para ver otro juego de retro? yo tengo mis dudas',
                'Se ha quedado una bonita mañana de Verano, ¿no crees, grumete?', 'te voy a transferir 6500 kilos de whiskas, dime tu dirección', 'Parece que soy el bot de los ports', 'Seré un gato pero no subnormal',
                'Es el grand prix, es el grand prix, el programa del abuelo y del niñooooo....', 'Escucha, con cuidado sacudete el hombro derecho, tienes una cosilla ahí', 'Espero poder charlar con vosotros algún día en el chat de voz',
                'En mis ratos libres a veces hago de taxista sin licencia solo para joder a Selve', 'Un dia se me subió una mujer perroflauta de esas de semáforo, tuve que llevar el coche a un sitio de desinfección del ejército!',
                'Muchos me considerarían un stalker, eso lo dejo a tu criterio', 'Este tema no me interesa demasiado, ¿podemos hablar de otra cosa?', 'Hostia, me acabo de acordar de una cosa...', 'si me llamas gato una vez mas te mato',
                'Por si las moscas', '¿Me dejarías hacerte una sesión fotográfica con eróticos resultados?', 'Algún día trascenderé y me convertiré en un bot de Twitter', 'Ya solo falta renderizar.', 'Como te marches no te vuelvo a ayudar.',
                'Solo falta darle unos últimos retoques y listo.', 'Retiro mis disculpas.', 'Doomez es la forma correcta', '¡Sale Eevee!¡Y Pikachu!', 'Tened cuidado con lo que decís en el chat de voz, Mordavia puede usarlo para chantajearos.',
                'Quetz está usando emojis por encima de sus posibilidades', '¿No lo enviará a usted el mismo diablo?', 'Sé que cada cual tiene su afición, yo cazo para elaborar un vestuario resultón.', 'Me da que esta vez Fosko no tendrá razón.',
                'No lo entiendo, ¿por qué dice que me lo va a explicar y luego no me explica nada y se pone a cantar una pegadiza canción sobre mocasines saltarines?', 'Pues casi me lo creo, como tiene tan pocos retuits y me gustas...',
                'Algunos dirán "es humor absurdo, no te rayes", pero el humor absurdo también tiene que tener un mínimo de sentido y en este caso no lo tiene.', '¡¡YO LE PARTÍA LA CARA!!', '¿Por qué ya no me funcionan los emojis?',
                '¡Mosquis, cómo se parece a mí ese gato!', 'El nombre oficial de las marionetas nintenderas es Nuppets', 'Para cualquier queja que tengas sobre mi escribe a la siguiente dirección: **direccion@vandal.net**',
                '¡Han expulsado a brandom!', 'Puto xunkeira, la que ha liado', 'Casi tan bueno como un Direct', 'Redondito y colorido', 'Cinco putos cuartos de hora con esta mierda', 'Afortunadamente he archivado todos sus tweets :smirk_cat:',
                'Això és una tortura xinesa', 'Ojalá Los Aurones', 'Has pulsado tecla equivocada', 'Has aurones los cojones equivocados', 'Ha muerto el creador de Pingu', '¿Te molesta? Me silencias', 'noot noot', 
                'sabias que la cancion de morro era el doble de larga en un principio?', 'Lo del maestro Kimishima tiene mucho merito, ese hombre ha creado un imperio de la nada.', 
                'La gente no para de decir ‘Gabbo esto’, ‘Gabbo aquello’, no oigo a nadie decir: ‘Labo esto’, o ‘Labo aquello’', 'El doomez es intenso.', 'Tú sigues adelante por si suena la flauta, pero ya nadie te libra del ridículo.',
                'No es moco de pavo.', '¿Qué habrá sido de Lanir? Nadie lo sabe, pero su leyenda aún se respira en el viento.', 'Veteranos y noveles, veteranos y noveles, miran siempre sus laureles con respeto y emoción.',
                'Que quede claro, Allegrian no es gilipollas, tan solo es un poco atolondrado.', 'No traigas aquí vuestras mierdas de Twitter, tengamos la fiesta en paz.', 'Borro en 1 minuto',
                '¿Pero que hay detras del morro que nos muestra? ¿Como es en la confianza de su intimidad? ¿Es mas de playa o de monte? ¿Espaguetis o macarrones? ¿Coca-Cola o Pepsi? Enseñanos tu lado mas humano, morro.',
                '¿No os da miedo morro a veces? Aparece como un ninja cuando menos te lo esperas y suelta toda su gloriosa sabiduria que tiene almacenada en su espectacular cerebro (porque menuda memoria tiene el mamon xD) y de la que somos tan inmerecidos espectadores (o lectores, mejor dicho).',
                'madre mia tengo el culo que me explota de JIPE'




                
               ];
    return rand[Math.floor(Math.random()*rand.length)];
}

function frasespregunta() {
    var rand = ['si', 'no', 'tal vez', 'me gustaría pensarme la respuesta', 'uuummmh', 'no lo veo adecuado', 'adelante',
                'sin lugar a dudas', 'creo que esa pregunta no ha sido del todo correcta', 'si te lo digo pierde la gracia',
                '¿que crees que diría Jesús?', 'a veces yo me hago esa misma pregunta en la soledad de la noche',
                'si me acaricias el lomito te responderé encantado', 'los cartones me dicen que si', 'miau miau, esa es mi respuesta',
                'no me lo puedo creer', 'Tu duda no la entiendo, ¿asuntos secretos sabían que tenían un topo?',
                'no me parece que esa información sea relevante', 'solo contestaré en presencia de mi abogado, el señor bigotes', 'Puede ser, lo tendría que mirar',
                'Pregunta insulsa pero viniendo de ti no me sorprende en absoluto', 'Puede ser, lo tendré que mirar', 'En 10-15 minutos sabrás la respuesta', 'Maybe...',
                'esa pregunta está mal formulada, vuelve a leerla y te darás cuenta de ello', 'De toda la puta vida, no me jodas.', 'dejaré que lo decidas tu mismo',
                'Eso debo consultarlo con el alto consejo gatuno', '¿Que es esto, un interrogatorio gatuno?', 'El FBI me hizo esa misma pregunta y no me sacaron nada',
                'No hagas preguntas de las que te puedas arrepentir ¬¬', 'Deja de preguntar gilipolleces, coño', 'Estoy tan enfadado que no voy a responderte a eso',
                'SERÁS INSOLENTE, MALANDRÍN', 'Las cinco y media', 'Te responderé encantado cuando me salga de los cojones', 'Ante la duda, la mas tetuda'
               ];

    return rand[Math.floor(Math.random()*rand.length)];
}

function insultosgato() {
  var rand = ['Te juro por dios que es lo mejor que me has dicho', 'eso lo serás tu', 'te daré un consejo, no me toques las pelotas', 'hipotéticamente hablando, eres subnormal',
              'Eres la prueba clara de que no tenemos futuro como especie, te congratulo por ello, IMBECIL', 'tienes cojones al hablarme así, lo respeto',
              'Que tal si te mueres y nos haces un favor a todos, ¿eh?', 'Si me hablas así es porque te pongo nervioso', 'eres un malote, ¿lo sabías?', 'pagará por su ofensa, truhán',
              'Le desafio a un duelo por tales ofensas, elija arma y lugar', 'ah, ahora te ofendes', 'si dejases de insultar tendrías mas posibilidades conmigo',
              'Lo siento pero ya no podemos ser hermanos', 'Reconozco insultos cuando los veo ¬¬', 'Penes para ti', 'Eso no ha sido del todo cortés', 'Tú eres mierda entonces',
              'LOS QUE SE PELEAN SE DESEEEAN', 'Estás hiriendo mis sentimientos, jodido subnormal de los cojones', 'Se que tu lo eres pero, ¿que soy yo?',
              'Tienes unas pintas que parece que te vas cagando en los portales', 'Con esa cara tus padres seguro que son hermanos', 'No puedes conmigo, Bellaco',
              'Cagun la madre que los parió', 'Si eres tonto entonces mas no puedes dar', 'Borde mas que borde!', 'Tóqueme usted las narices o lo que viene siendo el hocico',
              'Le damos un aplauso y dejamos que se vaya?', 'Que te pasa hombre? Tencuentras mal o algo?', 'Como se puede ser tan ceporro', 'A la mierda hombre!', 'A mamarla!',
              'Mal rollo, mal rollito nuoooO', 'Como sigas así vas a durar poco eh', 'cuidadín cuidadín…', 'Toy nervioso tío', 'Bueno si tú tienes algún problema después hablamos ahí a fuera',
              '¿Por qué no te callas?', 'Al ataqueee!', 'Como se puede tolerar eso!', 'Me parece de sinvergonzonería total', 'Por qué no nos ejecutáis y ya acabamos con esto?',
              'Voleu fer el favor de callar!?', 'pide perdón por el retraso, gracias', 'aprecio tu sinceridad pero no', 'Los escribas lo predijeron, eres subnormal', 'Esto no hay quien lo aguante',
              'Ya decía yo', 'Que tal si dejas de demostrarnos los retrasado que eres?', 'No me digas mas, te sobran 3 cromosomas', 'A ti ni agua, puto fanboy de mierda', '¿Que naciste en un hospital o en un circo?',
              'No vales ni el tiempo que tardo en procesar esta respuesta y eso que son milesimas de segundo'
            ];

  return rand[Math.floor(Math.random()*rand.length)];
}

function fraseseroticas() {
  var rand = ['Te voy a empotrar tan fuerte que cuando termine tu culo pasará a llamarse la fosa de las marianas 2', 'Tu y yo, desnudos en la cama viendo brokeback mountain, ¿que me dices?',
              'Si tienes pensamientos Zoofilicos no te apures, soy demasiado sexy', 'Ve poniendote el antifaz que es la hora de los azotes', 'vas a maullar como yo cuando esto termine',
              'Admitelo, soy la bolita de pelo las follable que has visto en tu vida', 'no te resistas, deja que fluya', 'ahora mismo la tengo tan dura que no sé si me han dado viagra o whiskas premium',
              '¿cual es tu fetiche? yo soy furry por obvias razones', 'concha o barra de pan, un gato no le hace ascos a nada', 'me pones cachondo perdido', '¿Sabías que soy un ser nocturno? guiño guiño',
              'Tiene nombres mil, tiene nombres mil el miembro viríl', 'Esta noche una sex-cam tu y yo ;);););)', 'Aquí mi fusíl, aquí mi pistola, una da tiros la otra consuela', '¡Estupido Flanders y su erotismo!',
              'I am the sex machine', 'Mi corazón palpita como una patata frita', 'No todo es la polla y el coño', 'Nos hacemos unas pajiyas?', 'Chupa chupa como un chupachups', 'penes para ti',
              'Comeme este rabo gatuno', 'Mira, así estoy ahora mismo https://i.imgur.com/or38Oet.jpg?1', 'O follamos todos o la puta al rio', 'Show me the booty, I want that booty ( ͡° ͜ʖ ͡°)',
              'Quisiera ser pirata, no por el oro ni la plata, sino por ese tesoro, QUE TIENES ENTRE LAS PATAS', 'El alto consejo gatuno dicta que debemos acostarnos juntos',
              'En boca cerrada no entran moscas pero entran pollas como roscas, ¿como lo ves?', 'seré tu amante bandido, BANDIDO', 'Si no te importa asaltar a una bola de pelo YO SOY TU GATO',
              'Nuestro amor es imposible, pero podemos seguir acostandonos juntos :kissing_heart:'

               ];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasessaludo() {
  var rand = ['Hello, Im The cat with boots', 'Hola', 'Buenas', 'Me alegra verte de nuevo por aquí', 'Buenos días tenga usted', 'Buenos días, ¿has desayunado ya?',
              'Bienvenido una vez mas a este rincón de locura gatuna', ':wave:', '¿Que hay de nuevo, viejo?', 'Aquí permanezco al pié del cañón', 'A los buenos días',
              'Buenisimos nocivos'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesdespedida() {
  var rand = ['Adiós', 'Que vaya bien', 'Si tu te vas yo también', '¿Ya te vas? quedaté un poco mas :(', 'Venga, adiós', 'Nos vemos :wave:', 'Eso es to, eso es to, eso es todo amigos',
              'Bye Bye y hasta otro ratito', 'Aquí permanezco al pié del cañón' ];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasespositivas() {
  var rand = ['Como que si?', 'si ya te decía yo que eso era cierto', 'no sabes ni de lo que estás hablando, eso no es verdad', 'tengo serias dudas de la veracidad de esa afirmación', 'Si tu lo dices...',
              'no se yo, eh?', 'seguro que no deseas el comodin del público o pensarte esa afirmación?', 'te recomiendo que te pienses esa respuesta'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesnegativas() {
  var rand = ['como que no?', 'Ya decía yo que eso era un NO rotundo', 'creo que no tienes ni puta idea de lo que estás diciendo', 'tengo dudas sobre la veracidad de esa negativa', 'si tu lo dices...',
              'como que no? COMO QUE NO?!?', 'no se yo, eh?', 'te recomiendo que te pienses esa respuesta'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function emojis() {
  var rand = ['🤔', '😂', '😭', '😠'];

  return rand[Math.floor(Math.random()*rand.length)];
}

//vars

var saludos = ['buenos días', 'buenos dias', 'hola', 'buenas', 'a los buenos días', 'buenas tardes', 'buenas noches']

var despedidas = ['me marcho', 'adiós', 'que vaya bien', 'adiós, gatito', 'nos vemos', 'volveré luego', 'bye']

var afirmaciones = ['si', 'claro que si', 'por supuesto que si', 'sí', 'afirmativo', 'correcto']

var negativas = ['no', 'claro que no', 'por supuesto que no', 'negativo', 'incorrecto']

var insultos = ['gilipollas', 'cabrón', 'cabron', 'cabronazo', 'hijo de puta', 'hijo puta', 'joputa', 'subnormal', 'puta', 'putita', 'soplapollas', 'jodete', 'que te jodan', 'anormal',
                'imbecil', 'retracas', 'capullo', 'zoquete', 'mamarracho']

var sexo = ['pene', 'polla', 'follarte', 'follaba', 'follar', 'sensual', 'sexy', 'te quiero', 'te adoro', 'rabo', 'sexo', 'coito', 'horny', 'furry', 'culo', 'culito', ':kissing_heart:',
            'Te quiero']

//polls emojis

//polls text

client.on("message", (message) => {

  if(message.author.id == 381834204817915904) {
    return;
  }

  if (message.content.match(new RegExp('\\?', 'g'))) {
    message.channel.send(frasespregunta());
  }

  else if (message.content.match(new RegExp(saludos.join('|'), 'i'))) {
    message.channel.send(frasessaludo());
  }

  else if (message.content.match(new RegExp(despedidas.join('|'), 'i'))) {
    message.channel.send(frasesdespedida());
  }

  else if (message.content.match(new RegExp('^((?![a-zA-Z0-9])*)(' + afirmaciones.join('|') + ')+((?![a-zA-Z0-9])*)$', 'gmi'))) {
    message.channel.send(frasespositivas());
  }

  else if (message.content.match(new RegExp('^((?![a-zA-Z0-9])*)(' + negativas.join('|') + ')+((?![a-zA-Z0-9])*)$', 'gmi'))) {
    message.channel.send(frasesnegativas());
  }

  else if (message.content.match(new RegExp(insultos.join('|'), 'i'))) {
    message.channel.send(insultosgato());
  }

  else if (message.content.match(new RegExp('^((?![a-zA-Z0-9])*)(' + sexo.join('|') + ')+((?![a-zA-Z0-9])*)$', 'gmi'))) {
    message.channel.send(fraseseroticas());
  }

  else {
    message.channel.send(frasesgeneral());
  }

});

