// data/data.js
const BIBLICAL_DATA = {
  // Versículos del día (rotación por día del año)
  versiculosDia: [
    { texto: 'Id por todo el mundo y predicad el evangelio a toda criatura.', ref: 'Marcos 16:15', cat: 'mision' },
    { texto: 'Recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo.', ref: 'Hechos 1:8', cat: 'poder' },
    { texto: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.', ref: 'Juan 3:16', cat: 'salvacion' },
    { texto: 'No me avergüenzo del evangelio, porque es poder de Dios para salvación.', ref: 'Romanos 1:16', cat: 'poder' },
    { texto: 'El fruto del justo es árbol de vida; y el que gana almas es sabio.', ref: 'Proverbios 11:30', cat: 'fruto' },
    { texto: 'La mies es mucha, mas los obreros pocos.', ref: 'Lucas 10:2', cat: 'mision' },
    { texto: 'Yo estoy con vosotros todos los días, hasta el fin del mundo.', ref: 'Mateo 28:20', cat: 'promesa' }
  ],

  // 50 citas bíblicas
  citas: [
    { n: '01', ref: 'Mateo 28:19', cat: 'mision', texto: 'Id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.', libro: 'Mateo' },
    { n: '02', ref: 'Juan 3:16', cat: 'salvacion', texto: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', libro: 'Juan' },
    { n: '03', ref: 'Hechos 1:8', cat: 'poder', texto: 'Recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.', libro: 'Hechos' },
    { n: '04', ref: 'Romanos 10:14', cat: 'mision', texto: '¿Cómo, pues, invocarán a aquel en el cual no han creído? ¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique?', libro: 'Romanos' },
    { n: '05', ref: 'Romanos 1:16', cat: 'poder', texto: 'No me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree.', libro: 'Romanos' },
    { n: '06', ref: 'Lucas 10:2', cat: 'mision', texto: 'La mies es mucha, mas los obreros pocos; rogad, pues, al Señor de la mies, que envíe obreros a su mies.', libro: 'Lucas' },
    { n: '07', ref: 'Romanos 10:13', cat: 'salvacion', texto: 'Todo aquel que invocare el nombre del Señor, será salvo.', libro: 'Romanos' },
    { n: '08', ref: 'Proverbios 11:30', cat: 'fruto', texto: 'El fruto del justo es árbol de vida; y el que gana almas es sabio.', libro: 'Proverbios' },
    { n: '09', ref: '2 Timoteo 4:2', cat: 'mision', texto: 'Predicad la palabra; que instes a tiempo y fuera de tiempo; redarguye, reprende, exhorta con toda paciencia y doctrina.', libro: '2 Timoteo' },
    { n: '10', ref: 'Romanos 10:17', cat: 'poder', texto: 'La fe es por el oír, y el oír, por la palabra de Dios.', libro: 'Romanos' },
    { n: '11', ref: 'Salmos 126:5-6', cat: 'fruto', texto: 'Los que sembraron con lágrimas, con regocijo segarán. Irá andando y llorando el que lleva la preciosa semilla; mas volverá a venir con regocijo, trayendo sus gavillas.', libro: 'Salmos' },
    { n: '12', ref: '1 Pedro 2:9', cat: 'mision', texto: 'Vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable.', libro: '1 Pedro' },
    { n: '13', ref: 'Juan 13:34', cat: 'amor', texto: 'Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis los unos a los otros.', libro: 'Juan' },
    { n: '14', ref: '2 Corintios 5:14', cat: 'amor', texto: 'El amor de Cristo nos constriñe, porque estamos convencidos de que uno murió por todos, luego todos murieron.', libro: '2 Corintios' },
    { n: '15', ref: 'Juan 13:35', cat: 'discipulado', texto: 'En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros.', libro: 'Juan' },
    { n: '16', ref: 'Lucas 9:23', cat: 'discipulado', texto: 'Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.', libro: 'Lucas' },
    { n: '17', ref: 'Juan 7:38', cat: 'poder', texto: 'El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva.', libro: 'Juan' },
    { n: '18', ref: 'Salmos 34:18', cat: 'salvacion', texto: 'Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.', libro: 'Salmos' },
    { n: '19', ref: 'Lucas 4:18', cat: 'mision', texto: 'El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres; me ha enviado a sanar a los quebrantados de corazón.', libro: 'Lucas' },
    { n: '20', ref: 'Mateo 28:20', cat: 'promesa', texto: 'Y he aquí, yo estoy con vosotros todos los días, hasta el fin del mundo.', libro: 'Mateo' },
    { n: '21', ref: 'Juan 3:36', cat: 'salvacion', texto: 'El que cree en el Hijo tiene vida eterna; pero el que rehúsa creer en el Hijo no verá la vida, sino que la ira de Dios está sobre él.', libro: 'Juan' },
    { n: '22', ref: '2 Corintios 5:20', cat: 'mision', texto: 'Así que, somos embajadores en nombre de Cristo, como si Dios rogase por medio de nosotros; os rogamos en nombre de Cristo: Reconciliaos con Dios.', libro: '2 Corintios' },
    { n: '23', ref: 'Colosenses 1:28', cat: 'discipulado', texto: 'A quien anunciamos, amonestando a todo hombre, y enseñando a todo hombre en toda sabiduría, a fin de presentar perfecto en Cristo Jesús a todo hombre.', libro: 'Colosenses' },
    { n: '24', ref: '2 Timoteo 2:3', cat: 'fruto', texto: 'Tú, pues, sufre penalidades como buen soldado de Jesucristo.', libro: '2 Timoteo' },
    { n: '25', ref: 'Hechos 13:47', cat: 'mision', texto: 'Porque así nos ha mandado el Señor, diciendo: Te he puesto para luz de los gentiles, a fin de que seas para salvación hasta lo último de la tierra.', libro: 'Hechos' },
    { n: '26', ref: '1 Juan 2:20', cat: 'poder', texto: 'Pero vosotros tenéis la unción del Santo, y conocéis todas las cosas.', libro: '1 Juan' },
    { n: '27', ref: 'Romanos 5:5', cat: 'amor', texto: 'La esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.', libro: 'Romanos' },
    { n: '28', ref: 'Juan 8:12', cat: 'discipulado', texto: 'El que me sigue no andará en tinieblas, sino que tendrá la luz de la vida.', libro: 'Juan' },
    { n: '29', ref: '1 Crónicas 16:23', cat: 'fruto', texto: 'Cantad a Jehová toda la tierra, proclamad de día en día su salvación.', libro: '1 Crónicas' },
    { n: '30', ref: 'Mateo 5:14-16', cat: 'mision', texto: 'Vosotros sois la luz del mundo. Una ciudad asentada sobre un monte no se puede esconder. Así alumbre vuestra luz delante de los hombres para que glorifiquen a vuestro Padre.', libro: 'Mateo' },
    { n: '31', ref: 'Isaías 52:7', cat: 'fruto', texto: '¡Cuán hermosos son sobre los montes los pies del que trae alegres nuevas, del que anuncia la paz, del que trae nuevas del bien!', libro: 'Isaías' },
    { n: '32', ref: 'Apocalipsis 7:9', cat: 'promesa', texto: 'Vi una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas, que estaban delante del trono y en la presencia del Cordero.', libro: 'Apocalipsis' },
    { n: '33', ref: 'Ezequiel 33:11', cat: 'salvacion', texto: 'Diles: Vivo yo, dice Jehová, que no quiero la muerte del impío, sino que se vuelva el impío de su camino y que viva.', libro: 'Ezequiel' },
    { n: '34', ref: '1 Timoteo 2:4', cat: 'salvacion', texto: 'El cual quiere que todos los hombres sean salvos y vengan al conocimiento de la verdad.', libro: '1 Timoteo' },
    { n: '35', ref: 'Mateo 9:37-38', cat: 'mision', texto: 'Entonces dijo a sus discípulos: A la verdad la mies es mucha, pero los obreros pocos. Rogad al Señor de la mies, que envíe obreros a su mies.', libro: 'Mateo' },
    { n: '36', ref: 'Efesios 6:15', cat: 'poder', texto: 'Y calzados los pies con el apresto del evangelio de la paz.', libro: 'Efesios' },
    { n: '37', ref: '2 Pedro 3:9', cat: 'promesa', texto: 'El Señor no retarda su promesa, según algunos la tienen por tardanza, sino que es paciente para con nosotros, no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento.', libro: '2 Pedro' },
    { n: '38', ref: 'Isaías 6:8', cat: 'mision', texto: 'Y oí la voz del Señor que decía: ¿A quién enviaré, y quién irá por nosotros? Entonces respondí yo: Heme aquí, envíame a mí.', libro: 'Isaías' },
    { n: '39', ref: 'Marcos 8:35', cat: 'discipulado', texto: 'Porque todo el que quiera salvar su vida, la perderá; y todo el que pierda su vida por causa de mí y del evangelio, la salvará.', libro: 'Marcos' },
    { n: '40', ref: 'Daniel 12:3', cat: 'fruto', texto: 'Los entendidos resplandecerán como el resplandor del firmamento; y los que enseñan la justicia a la multitud, como las estrellas a perpetua eternidad.', libro: 'Daniel' },
    { n: '41', ref: 'Juan 15:16', cat: 'fruto', texto: 'No me elegisteis vosotros a mí, sino que yo os elegí a vosotros, y os he puesto para que vayáis y llevéis fruto, y vuestro fruto permanezca.', libro: 'Juan' },
    { n: '42', ref: 'Gálatas 6:9', cat: 'promesa', texto: 'No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.', libro: 'Gálatas' },
    { n: '43', ref: 'Hechos 4:12', cat: 'salvacion', texto: 'Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.', libro: 'Hechos' },
    { n: '44', ref: '1 Corintios 9:16', cat: 'mision', texto: 'Pues si anuncio el evangelio, no tengo por qué gloriarme; porque me es impuesta necesidad; y ¡ay de mí si no anunciare el evangelio!', libro: '1 Corintios' },
    { n: '45', ref: 'Jeremías 1:7-8', cat: 'mision', texto: 'Irás a todo lo que te envíe, y dirás todo lo que te mande. No temas delante de ellos, porque contigo estoy para librarte, dice Jehová.', libro: 'Jeremías' },
    { n: '46', ref: 'Salmos 96:3', cat: 'fruto', texto: 'Proclamad entre las naciones su gloria, en todos los pueblos sus maravillas.', libro: 'Salmos' },
    { n: '47', ref: 'Romanos 8:37', cat: 'poder', texto: 'Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.', libro: 'Romanos' },
    { n: '48', ref: 'Isaías 55:11', cat: 'promesa', texto: 'Así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero y será prosperada en aquello para que la envié.', libro: 'Isaías' },
    { n: '49', ref: 'Hechos 2:47', cat: 'fruto', texto: 'Y el Señor añadía cada día a la iglesia los que habían de ser salvos.', libro: 'Hechos' },
    { n: '50', ref: 'Apocalipsis 22:17', cat: 'salvacion', texto: 'Y el Espíritu y la Esposa dicen: Ven. Y el que oye, diga: Ven. Y el que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente.', libro: 'Apocalipsis' }
  ],

  // Categorías
  categorias: {
    all: 'Todas',
    mision: 'Misión',
    salvacion: 'Salvación',
    poder: 'Poder',
    fruto: 'Fruto',
    amor: 'Amor',
    discipulado: 'Discipulado',
    promesa: 'Promesas'
  },

  // Misioneros
  misioneros: [
    { nombre: 'Pablo de Tarso', icono: '⚡', rol: 'Apóstol de los Gentiles', texto: 'Viajó más de 15,000 km predicando el evangelio desde Jerusalén hasta Roma. Fundó más de 14 iglesias en Asia Menor y Europa. Escribió 13 epístolas del NT.', verso: '1 Corintios 9:16', viajes: 3, iglesias: 14, epistolas: 13 },
    { nombre: 'Pedro', icono: '🐟', rol: 'Pilar de la Iglesia', texto: 'Pescador de Galilea llamado a ser pescador de hombres. Predicó en Pentecostés y 3,000 almas creyeron. Llevó el evangelio a Roma donde fue mártir.', verso: 'Hechos 2:41', viajes: 2, iglesias: 5, epistolas: 2 },
    { nombre: 'Felipe el Evangelista', icono: '🌟', rol: 'Evangelista de Samaria', texto: 'Fue el primero en llevar el evangelio a los samaritanos. Condujo al eunuco etíope al bautismo, abriendo el evangelio al continente africano.', verso: 'Hechos 8:26-40', viajes: 1, iglesias: 3, epistolas: 0 },
    { nombre: 'Bernabé', icono: '🤝', rol: 'Consolador y Enviado', texto: 'Llamado "Hijo de consolación". Compañero fiel de Pablo en el primer viaje misionero. Llevó el evangelio a Chipre y Asia Menor.', verso: 'Hechos 13:2', viajes: 2, iglesias: 6, epistolas: 0 },
    { nombre: 'Timoteo', icono: '🔥', rol: 'Pastor de Éfeso', texto: 'Hijo espiritual de Pablo. Condujo la iglesia en Éfeso durante años de persecución. Recibió dos epístolas pastorales con instrucción sobre la iglesia.', verso: '2 Timoteo 4:5', viajes: 4, iglesias: 1, epistolas: 0 },
    { nombre: 'Lidia de Filipos', icono: '🌹', rol: 'Primera Convertida de Europa', texto: 'Vendedora de púrpura que abrió su corazón y su casa al evangelio. Su conversión marcó la entrada del mensaje cristiano a Europa.', verso: 'Hechos 16:14-15', viajes: 0, iglesias: 1, epistolas: 0 }
  ],

  // Timeline
  timeline: [
    { fecha: '~700 a.C.', libro: 'Isaías 52:7', evento: 'La Profecía', texto: 'Cuán hermosos son los pies del que trae alegres nuevas, del que anuncia la paz.' },
    { fecha: '~760 a.C.', libro: 'Jonás 3:2', evento: 'Primer Llamado Misionero', texto: 'Levántate y ve a Nínive, la gran ciudad, y proclama en ella el mensaje que yo te diré.' },
    { fecha: '27 d.C.', libro: 'Mateo 4:17', evento: 'Jesús Comienza a Predicar', texto: 'Arrepentíos, porque el reino de los cielos se ha acercado.' },
    { fecha: '27 d.C.', libro: 'Marcos 3:14', evento: 'Doce Apóstoles Enviados', texto: 'Estableció a doce, para que estuviesen con él, y para enviarlos a predicar.' },
    { fecha: '30 d.C.', libro: 'Mateo 28:19', evento: 'La Gran Comisión', texto: 'Id, y haced discípulos a todas las naciones.' },
    { fecha: '33 d.C.', libro: 'Hechos 2:41', evento: 'Pentecostés · 3,000 Almas', texto: 'Así que, los que recibieron su palabra fueron bautizados; y se añadieron aquel día como tres mil personas.' },
    { fecha: '35 d.C.', libro: 'Hechos 8:4', evento: 'Esparcimiento de la Iglesia', texto: 'Pero los que fueron esparcidos iban por todas partes anunciando el evangelio.' },
    { fecha: '46 d.C.', libro: 'Hechos 13:2', evento: 'Primer Viaje de Pablo', texto: 'Apartadme a Bernabé y a Saulo para la obra a que los he llamado.' },
    { fecha: '58 d.C.', libro: 'Romanos 15:20', evento: 'Pablo Llega a Roma', texto: 'Me esforcé a predicar el evangelio, no donde Cristo ya hubiese sido nombrado.' },
    { fecha: '95 d.C.', libro: 'Apocalipsis 14:6', evento: 'El Evangelio Eterno', texto: 'Vi volar por en medio del cielo a otro ángel, que tenía el evangelio eterno para predicarlo a los moradores de la tierra.' }
  ],

  // Profecías
  profecias: [
    { ref: 'Isaías 52:7', texto: '¡Cuán hermosos son sobre los montes los pies del que trae alegres nuevas!', tipo: 'Mensajero', icono: '👣', cumplimiento: 'Lucas 4:18' },
    { ref: 'Joel 2:28', texto: 'Derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas.', tipo: 'Espíritu', icono: '🔥', cumplimiento: 'Hechos 2:16-17' },
    { ref: 'Malaquías 1:11', texto: 'Desde donde el sol nace hasta donde se pone, será grande mi nombre entre las naciones.', tipo: 'Global', icono: '🌍', cumplimiento: 'Apocalipsis 7:9' },
    { ref: 'Salmos 22:27', texto: 'Se acordarán y se convertirán a Jehová todos los confines de la tierra.', tipo: 'Universal', icono: '🌐', cumplimiento: 'Hechos 13:47' },
    { ref: 'Génesis 12:3', texto: 'En ti serán benditas todas las familias de la tierra.', tipo: 'Pacto', icono: '⭐', cumplimiento: 'Gálatas 3:8' },
    { ref: 'Isaías 49:6', texto: 'Te di por luz de las naciones, para que seas mi salvación hasta lo último de la tierra.', tipo: 'Misión', icono: '💡', cumplimiento: 'Hechos 13:47' }
  ],

  // Ciudades para el mapa
  ciudades: [
    { nombre: 'Jerusalén', x: 505, y: 175, tipo: 'origen', dato: 'Pentecostés: 3,000 convertidos' },
    { nombre: 'Antioquía', x: 540, y: 148, tipo: 'mision', dato: 'Base del primer viaje misionero' },
    { nombre: 'Roma', x: 380, y: 135, tipo: 'mision', dato: 'Fin del viaje de Pablo' },
    { nombre: 'Éfeso', x: 460, y: 148, tipo: 'mision', dato: 'Centro de Asia Menor' },
    { nombre: 'Corinto', x: 415, y: 158, tipo: 'mision', dato: 'Iglesia fundada por Pablo' },
    { nombre: 'Alejandría', x: 455, y: 188, tipo: 'mision', dato: 'Centro teológico de África' },
    { nombre: 'Damasco', x: 530, y: 162, tipo: 'mision', dato: 'Conversión de Pablo' },
    { nombre: 'Filipos', x: 430, y: 140, tipo: 'mision', dato: 'Primera iglesia de Europa' },
    { nombre: 'Tesalónica', x: 425, y: 142, tipo: 'mision', dato: 'Iglesia macedónica' },
    { nombre: 'Atenas', x: 418, y: 155, tipo: 'mision', dato: 'Areópago: discurso de Pablo' }
  ],

  // Versículos typewriter
  typewriter: [
    { texto: 'Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.', ref: 'Mateo 5:14' },
    { texto: 'Estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros.', ref: '1 Pedro 3:15' },
    { texto: 'El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres.', ref: 'Lucas 4:18' },
    { texto: 'Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras y glorifiquen a vuestro Padre que está en los cielos.', ref: 'Mateo 5:16' },
    { texto: 'He aquí que no se ha acortado la mano de Jehová para salvar, ni se ha agravado su oído para oír.', ref: 'Isaías 59:1' },
    { texto: 'Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.', ref: 'Lucas 19:10' },
    { texto: 'No me elegisteis vosotros a mí, sino que yo os elegí a vosotros, y os he puesto para que vayáis y llevéis fruto.', ref: 'Juan 15:16' },
    { texto: '¡Ay de mí si no anunciare el evangelio!', ref: '1 Corintios 9:16' }
  ],

  // Estadísticas
  estadisticas: [
    { num: 27, etiqueta: 'Libros del NT', verso: '2 Timoteo 3:16', simbolo: '📜' },
    { num: 12, etiqueta: 'Apóstoles', verso: 'Marcos 6:7', simbolo: '✦' },
    { num: 3000, etiqueta: 'Almas en Pentecostés', verso: 'Hechos 2:41', simbolo: '🕊' },
    { num: 33, etiqueta: 'Años de ministerio', verso: 'Lucas 3:23', simbolo: '✟' },
    { num: 50, etiqueta: 'Versículos en esta web', verso: 'Josué 1:8', simbolo: '📖' },
    { num: 14, etiqueta: 'Epístolas de Pablo', verso: 'Romanos 1:1', simbolo: '✉' }
  ],

  // Devocionales por día
  devocionales: [
    { titulo: 'Domingo — Día de Adoración', icono: '☀️', texto: 'Alabad a Jehová, naciones todas; pueblos todos, alabadle. Porque ha engrandecido sobre nosotros su misericordia.', ref: 'Salmos 117:1-2', reflexion: 'Hoy es el día de reunirnos como cuerpo y proclamar juntos la grandeza de Dios ante el mundo.' },
    { titulo: 'Lunes — Nuevo Comienzo', icono: '🌱', texto: 'Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana.', ref: 'Lamentaciones 3:22-23', reflexion: 'Cada semana comienza con misericordias nuevas. Sal hoy y lleva esa esperanza a alguien que la necesita.' },
    { titulo: 'Martes — Fuerza en la Obra', icono: '⚡', texto: 'Todo lo puedo en Cristo que me fortalece.', ref: 'Filipenses 4:13', reflexion: 'No evangelizamos con nuestra propia fuerza. Es Cristo en nosotros quien obra lo que parece imposible.' },
    { titulo: 'Miércoles — Perseverancia', icono: '🔥', texto: 'No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.', ref: 'Gálatas 6:9', reflexion: 'A mitad de semana, recuerda que tu labor no es en vano. El fruto viene en su tiempo.' },
    { titulo: 'Jueves — La Palabra Obra', icono: '📖', texto: 'Así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero.', ref: 'Isaías 55:11', reflexion: 'Cuando compartes la Palabra, puedes confiar en que Dios la usa para sus propósitos, aunque no lo veas.' },
    { titulo: 'Viernes — Cruz y Gloria', icono: '✟', texto: 'Mas lejos esté de mí gloriarme, sino en la cruz de nuestro Señor Jesucristo.', ref: 'Gálatas 6:14', reflexion: 'El evangelio es siempre la Cruz. No hay otro mensaje que tenga el poder de transformar vidas eternas.' },
    { titulo: 'Sábado — Preparación', icono: '🌅', texto: 'Apareja tu obra fuera, y ten listo en el campo; después edificarás tu casa.', ref: 'Proverbios 24:27', reflexion: 'El descanso y la preparación son parte de la Gran Comisión. Recarga hoy para testificar mañana.' }
  ],

  // Iglesias del Apocalipsis
  iglesiasAp: [
    { nombre: 'Éfeso', cap: '2:1-7', caracter: 'Laboriosa pero sin primer amor', mensaje: 'Recuerda de dónde has caído; arrepiéntete.', icono: '🕯️', color: '#8b6914' },
    { nombre: 'Esmirna', cap: '2:8-11', caracter: 'Perseguida y fiel', mensaje: 'Sé fiel hasta la muerte, y yo te daré la corona de vida.', icono: '👑', color: '#4a7c9e' },
    { nombre: 'Pérgamo', cap: '2:12-17', caracter: 'Firme pero tolerante al error', mensaje: 'Arrepiéntete de las doctrinas equivocadas.', icono: '⚔️', color: '#7a3c3c' },
    { nombre: 'Tiatira', cap: '2:18-29', caracter: 'Amor y fe, pero toleraba a Jezabel', mensaje: 'Retenéd lo que tenéis hasta que yo venga.', icono: '🌸', color: '#6a4c93' },
    { nombre: 'Sardis', cap: '3:1-6', caracter: 'Con nombre de viva pero muerta', mensaje: 'Fortalece las cosas que están a punto de morir.', icono: '💀', color: '#3d6b4f' },
    { nombre: 'Filadelfia', cap: '3:7-13', caracter: 'Fiel con poca fuerza', mensaje: 'He puesto delante de ti una puerta abierta.', icono: '🚪', color: '#8a6a28' },
    { nombre: 'Laodicea', cap: '3:14-22', caracter: 'Tibia, ni fría ni caliente', mensaje: 'Sé fervoroso y arrepiéntete. Estoy a la puerta.', icono: '🌡️', color: '#8b3a1a' }
  ],

  // Libros del NT
  librosNT: [
    { libro: 'Mateo', cap: 28, verso: 'Haced discípulos a todas las naciones.' },
    { libro: 'Marcos', cap: 16, verso: 'Predicad el evangelio a toda criatura.' },
    { libro: 'Lucas', cap: 24, verso: 'Se predicará arrepentimiento y perdón en su nombre.' },
    { libro: 'Juan', cap: 20, verso: 'Como me envió el Padre, así también yo os envío.' },
    { libro: 'Hechos', cap: 1, verso: 'Me seréis testigos hasta lo último de la tierra.' },
    { libro: 'Romanos', cap: 1, verso: 'No me avergüenzo del evangelio, es poder de Dios.' },
    { libro: '1 Corintios', cap: 9, verso: '¡Ay de mí si no anunciare el evangelio!' },
    { libro: '2 Corintios', cap: 5, verso: 'Somos embajadores en nombre de Cristo.' },
    { libro: 'Gálatas', cap: 1, verso: 'Si alguno os predicare distinto evangelio, sea anatema.' },
    { libro: 'Efesios', cap: 6, verso: 'Calzados con el apresto del evangelio de la paz.' },
    { libro: 'Filipenses', cap: 1, verso: 'Para mí el vivir es Cristo, y el morir es ganancia.' },
    { libro: 'Colosenses', cap: 1, verso: 'A fin de presentar perfecto en Cristo a todo hombre.' },
    { libro: '1 Tesalonicenses', cap: 1, verso: 'Fuisteis ejemplo a todos los creyentes de Macedonia.' },
    { libro: '2 Timoteo', cap: 4, verso: 'Haz obra de evangelista, cumple tu ministerio.' },
    { libro: 'Apocalipsis', cap: 14, verso: 'El evangelio eterno para predicarlo a los moradores.' }
  ],

  // Testimonios históricos
  testimonios: [
    { nombre: 'William Carey', titulo: 'Padre de las Misiones Modernas', frase: '"Espera grandes cosas de Dios; intenta grandes cosas para Dios."', periodo: '1761–1834', pais: '🇮🇳 India' },
    { nombre: 'Hudson Taylor', titulo: 'Misionero en China', frase: '"Dios no ha llamado a los exitosos, sino a los fieles."', periodo: '1832–1905', pais: '🇨🇳 China' },
    { nombre: 'Amy Carmichael', titulo: 'Misionera en la India', frase: '"Puedes darles sin amar, pero no puedes amar sin dar."', periodo: '1867–1951', pais: '🇮🇳 India' },
    { nombre: 'Jim Elliot', titulo: 'Mártir en Ecuador', frase: '"No es necio el que da lo que no puede guardar para ganar lo que no puede perder."', periodo: '1927–1956', pais: '🇪🇨 Ecuador' },
    { nombre: 'Gladys Aylward', titulo: 'Misionera en China', frase: '"No soy grande, pero Dios y yo somos una mayoría."', periodo: '1902–1970', pais: '🇨🇳 China' },
    { nombre: 'D.L. Moody', titulo: 'Evangelista Americano', frase: '"El mundo todavía no ha visto lo que Dios puede hacer con un hombre que se entrega completamente a Él."', periodo: '1837–1899', pais: '🇺🇸 EE.UU.' }
  ],

  // Países
  paisesData: {
    total_paises: 195,
    alcanzados: 183,
    traducciones: 3589,
    iglesias: 2500000,
    creyentes_mill: 2400
  },

  // Quiz
  quiz: [
    { pregunta: '¿En qué libro está escrita La Gran Comisión?', opciones: ['Lucas 10:2', 'Mateo 28:19', 'Hechos 2:41', 'Juan 3:16'], correcta: 1 },
    { pregunta: '¿Cuántas almas creyeron en Pentecostés?', opciones: ['500', '1,000', '3,000', '5,000'], correcta: 2 },
    { pregunta: '¿Qué apóstol predicó el sermón de Pentecostés?', opciones: ['Juan', 'Pablo', 'Pedro', 'Felipe'], correcta: 2 },
    { pregunta: '"El que gana almas es sabio." ¿Dónde está esta cita?', opciones: ['Isaías 52:7', 'Proverbios 11:30', 'Daniel 12:3', 'Romanos 10:14'], correcta: 1 },
    { pregunta: '¿A quién se llama "Apóstol de los Gentiles"?', opciones: ['Pedro', 'Bernabé', 'Pablo', 'Timoteo'], correcta: 2 },
    { pregunta: '¿Qué ciudad fue base del primer viaje misionero de Pablo?', opciones: ['Jerusalén', 'Roma', 'Antioquía', 'Corinto'], correcta: 2 },
    { pregunta: '"Yo soy el camino, la verdad y la vida." (Juan)', opciones: ['10:10', '14:6', '3:16', '8:12'], correcta: 1 },
    { pregunta: '¿Cuántos libros tiene el Nuevo Testamento?', opciones: ['24', '27', '29', '39'], correcta: 1 },
    { pregunta: '¿Quién bautizó al eunuco etíope?', opciones: ['Pedro', 'Pablo', 'Felipe', 'Bernabé'], correcta: 2 },
    { pregunta: '"La fe es por el oír, y el oír por la palabra de Dios." ¿De dónde?', opciones: ['Efesios 2:8', 'Hebreos 11:1', 'Romanos 10:17', 'Juan 3:36'], correcta: 2 },
    { pregunta: '¿En qué ciudad fue convertida Lidia, la primera convertida de Europa?', opciones: ['Atenas', 'Tesalónica', 'Filipos', 'Corinto'], correcta: 2 },
    { pregunta: '¿Cuántos viajes misioneros registra el libro de los Hechos de Pablo?', opciones: ['2', '3', '4', '5'], correcta: 1 }
  ],

  // Galería
  gallery: [
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', caption: 'El camino del testigo', cat: 'mision' },
    { src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80', caption: 'Luz que no puede esconderse', cat: 'luz' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', caption: 'Las naciones esperan', cat: 'mundo' },
    { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', caption: 'Sembrar en la oscuridad', cat: 'fe' },
    { src: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80', caption: 'La mies es mucha', cat: 'fruto' },
    { src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80', caption: 'Hasta lo último de la tierra', cat: 'mision' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', caption: 'La creación proclama su gloria', cat: 'creacion' },
    { src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&q=80', caption: 'Iglesias en todo el mundo', cat: 'iglesia' },
    { src: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80', caption: 'Oración que mueve montañas', cat: 'oracion' }
  ],

  // Promesas eternas
  promesasEternas: [
    { texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.', ref: 'Jeremías 29:11', color_from: '#1a0a00', color_to: '#3d1f00', icono: '🌟' },
    { texto: 'Y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo.', ref: 'Mateo 28:20', color_from: '#001a1a', color_to: '#003d3d', icono: '✟' },
    { texto: 'No me elegisteis vosotros a mí, sino que yo os elegí a vosotros, y os he puesto para que vayáis y llevéis fruto, y vuestro fruto permanezca.', ref: 'Juan 15:16', color_from: '#0a001a', color_to: '#1f0033', icono: '🍇' }
  ],

  // Versículos extra (20)
  citasExtra: [
    { n: 'E1', ref: 'Josué 1:9', cat: 'promesa', texto: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.' },
    { n: 'E2', ref: 'Mateo 10:7', cat: 'mision', texto: 'Y yendo, predicad, diciendo: El reino de los cielos se ha acercado.' },
    { n: 'E3', ref: 'Marcos 1:17', cat: 'discipulado', texto: 'Venid en pos de mí, y haré que seáis pescadores de hombres.' },
    { n: 'E4', ref: 'Juan 4:35', cat: 'fruto', texto: '¿No decís vosotros: Aún faltan cuatro meses para que llegue la siega? He aquí os digo: Alzad vuestros ojos y mirad los campos, porque ya están blancos para la siega.' },
    { n: 'E5', ref: 'Hechos 5:42', cat: 'mision', texto: 'Y todos los días, en el templo y por las casas, no cesaban de enseñar y predicar a Jesucristo.' },
    { n: 'E6', ref: 'Hechos 17:6', cat: 'poder', texto: 'Estos que trastornan el mundo entero también han venido acá.' },
    { n: 'E7', ref: 'Romanos 15:13', cat: 'promesa', texto: 'Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.' },
    { n: 'E8', ref: '1 Corintios 1:17', cat: 'mision', texto: 'Pues no me envió Cristo a bautizar, sino a predicar el evangelio; no con sabiduría de palabras, para que no se haga vana la cruz de Cristo.' },
    { n: 'E9', ref: '1 Corintios 2:2', cat: 'poder', texto: 'Pues me propuse no saber entre vosotros cosa alguna sino a Jesucristo, y a éste crucificado.' },
    { n: 'E10', ref: '2 Corintios 4:5', cat: 'mision', texto: 'Porque no nos predicamos a nosotros mismos, sino a Jesucristo como Señor.' },
    { n: 'E11', ref: '2 Corintios 4:7', cat: 'poder', texto: 'Pero tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros.' },
    { n: 'E12', ref: 'Efesios 2:10', cat: 'discipulado', texto: 'Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.' },
    { n: 'E13', ref: 'Filipenses 2:15', cat: 'mision', texto: 'Para que seáis irreprensibles y sencillos, hijos de Dios sin mancha en medio de una generación maligna, en medio de la cual resplandecéis como luminares en el mundo.' },
    { n: 'E14', ref: 'Colosenses 4:5-6', cat: 'discipulado', texto: 'Andad sabiamente para con los de afuera, redimiendo el tiempo. Sea vuestra palabra siempre con gracia, sazonada con sal.' },
    { n: 'E15', ref: '1 Tesalonicenses 2:8', cat: 'amor', texto: 'Tan grande es nuestro afecto por vosotros, que hubiéramos querido entregaros no sólo el evangelio de Dios, sino también nuestras propias vidas.' },
    { n: 'E16', ref: '2 Timoteo 1:8', cat: 'poder', texto: 'Por tanto, no te avergüences de dar testimonio de nuestro Señor, ni de mí, preso suyo, sino participa de las aflicciones por el evangelio según el poder de Dios.' },
    { n: 'E17', ref: 'Hebreos 4:12', cat: 'poder', texto: 'Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; penetra hasta partir el alma y el espíritu.' },
    { n: 'E18', ref: 'Santiago 5:20', cat: 'fruto', texto: 'Sepa que el que haga volver al pecador del error de su camino, salvará de muerte un alma, y cubrirá multitud de pecados.' },
    { n: 'E19', ref: '1 Juan 4:19', cat: 'amor', texto: 'Nosotros le amamos a él, porque él nos amó primero.' },
    { n: 'E20', ref: 'Judas 1:23', cat: 'mision', texto: 'A otros salvad, arrebatándolos del fuego; y de otros tened misericordia con temor.' }
  ]
};

// Funciones helper globales
window.BIBLICAL_DATA = BIBLICAL_DATA;

window.getVersiculoDelDia = function() {
  var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  var idx = dayOfYear % BIBLICAL_DATA.versiculosDia.length;
  return BIBLICAL_DATA.versiculosDia[idx];
};

window.getDevocionalDelDia = function() {
  var dia = new Date().getDay();
  return BIBLICAL_DATA.devocionales[dia];
};

window.getVersoAleatorio = function() {
  var todas = BIBLICAL_DATA.citas.concat(BIBLICAL_DATA.citasExtra);
  return todas[Math.floor(Math.random() * todas.length)];
};
