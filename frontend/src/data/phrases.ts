export interface Phrase {
  id: number;
  content: string;
  category: 'comfort' | 'love' | 'motivation' | 'reminder';
}

export const phrases: Phrase[] = [
  // ═══════════════════════════════════════════════════════════
  // CONFORT - Para cuando está triste (25 frases)
  // ═══════════════════════════════════════════════════════════
  { id: 1, content: "No tienes que explicarme nada, solo sentir. Yo me quedo.", category: 'comfort' },
  { id: 2, content: "Aunque hoy duela, no estás sola ni un segundo.", category: 'comfort' },
  { id: 3, content: "Estoy orgulloso de ti incluso en tus días grises.", category: 'comfort' },
  { id: 4, content: "Si el mundo pesa demasiado, apóyate en mí.", category: 'comfort' },
  { id: 5, content: "No importa cuánto tardes, te espero con amor.", category: 'comfort' },
  { id: 6, content: "Llorar no es debilidad, es dejar salir lo que pesa.", category: 'comfort' },
  { id: 7, content: "Hoy puedes no estar bien, y eso está bien.", category: 'comfort' },
  { id: 8, content: "No tienes que ser fuerte todo el tiempo, yo te sostengo.", category: 'comfort' },
  { id: 9, content: "Tu tristeza también merece espacio, no la escondas de mí.", category: 'comfort' },
  { id: 10, content: "Si necesitas silencio, me quedo en silencio contigo.", category: 'comfort' },
  { id: 11, content: "No voy a intentar arreglarlo, solo quiero acompañarte.", category: 'comfort' },
  { id: 12, content: "Incluso en tus días más difíciles, sigues siendo mi persona favorita.", category: 'comfort' },
  { id: 13, content: "No tienes que fingir conmigo. Muéstrame todo, lo bueno y lo feo.", category: 'comfort' },
  { id: 14, content: "Si hoy no puedes con todo, yo puedo con lo que tú no.", category: 'comfort' },
  { id: 15, content: "Tu corazón merece descansar, déjame cuidarlo un rato.", category: 'comfort' },
  { id: 16, content: "No estás rota, solo estás cansada. Y eso tiene solución.", category: 'comfort' },
  { id: 17, content: "Cada lágrima tuya me importa, no las derrames sola.", category: 'comfort' },
  { id: 18, content: "No tengo todas las respuestas, pero tengo todo mi amor para darte.", category: 'comfort' },
  { id: 19, content: "Mañana puede ser mejor, pero hoy te abrazo así.", category: 'comfort' },
  { id: 20, content: "No tienes que entender todo ahora, solo respira.", category: 'comfort' },
  { id: 21, content: "Tu dolor no me asusta, me acerca más a ti.", category: 'comfort' },
  { id: 22, content: "Está bien no tener ganas de nada, yo tengo ganas de estar contigo.", category: 'comfort' },
  { id: 23, content: "No voy a ningún lado, especialmente cuando más me necesitas.", category: 'comfort' },
  { id: 24, content: "Puedes contarme lo que sea, mi amor no tiene condiciones.", category: 'comfort' },
  { id: 25, content: "Si el día fue duro, la noche es para abrazarte.", category: 'comfort' },

  // ═══════════════════════════════════════════════════════════
  // AMOR - Expresiones de cariño (35 frases)
  // ═══════════════════════════════════════════════════════════
  { id: 26, content: "Amarte es lo más natural que me pasa.", category: 'love' },
  { id: 27, content: "Eres mi pensamiento favorito sin darme cuenta.", category: 'love' },
  { id: 28, content: "Si te pierdes, búscame: siempre voy a ser tu lugar.", category: 'love' },
  { id: 29, content: "Mi corazón te reconoce incluso con los ojos cerrados.", category: 'love' },
  { id: 30, content: "No sé cómo explicarlo, pero contigo todo tiene sentido.", category: 'love' },
  { id: 31, content: "Me gustas cuando ríes, cuando lloras, cuando duermes. Siempre.", category: 'love' },
  { id: 32, content: "Cada día encuentro una razón nueva para quererte más.", category: 'love' },
  { id: 33, content: "Eres el plot twist más bonito de mi vida.", category: 'love' },
  { id: 34, content: "Contigo aprendí que el amor no se busca, aparece.", category: 'love' },
  { id: 35, content: "Mi lugar favorito es donde sea que estés tú.", category: 'love' },
  { id: 36, content: "Te quiero en todas tus versiones, incluso las que no te gustan.", category: 'love' },
  { id: 37, content: "Eres la persona que quiero ver primero cada mañana.", category: 'love' },
  { id: 38, content: "No necesito que seas perfecta, solo necesito que seas tú.", category: 'love' },
  { id: 39, content: "Contigo los días normales se sienten especiales.", category: 'love' },
  { id: 40, content: "Mi corazón late diferente cuando pienso en ti.", category: 'love' },
  { id: 41, content: "Eres mi persona favorita para hacer nada juntos.", category: 'love' },
  { id: 42, content: "No sé qué hice para merecerte, pero lo haría de nuevo.", category: 'love' },
  { id: 43, content: "Cada momento contigo es mi momento favorito.", category: 'love' },
  { id: 44, content: "Te elijo hoy, mañana, y todos los días después.", category: 'love' },
  { id: 45, content: "Eres el hogar al que siempre quiero volver.", category: 'love' },
  { id: 46, content: "Mi vida antes de ti era buena, pero contigo es increíble.", category: 'love' },
  { id: 47, content: "No me canso de mirarte, eres mi vista favorita.", category: 'love' },
  { id: 48, content: "Contigo aprendí que el amor puede ser tranquilo y emocionante a la vez.", category: 'love' },
  { id: 49, content: "Eres la razón por la que creo en las cosas bonitas.", category: 'love' },
  { id: 50, content: "Mi parte favorita del día es cuando estoy contigo.", category: 'love' },
  { id: 51, content: "Te quiero con todo lo que soy y lo que me falta por ser.", category: 'love' },
  { id: 52, content: "Eres mi calma en medio del caos.", category: 'love' },
  { id: 53, content: "No sabía que me hacías falta hasta que llegaste.", category: 'love' },
  { id: 54, content: "Contigo descubrí que el amor no pesa, sostiene.", category: 'love' },
  { id: 55, content: "Eres la mejor decisión que he tomado sin pensarlo.", category: 'love' },
  { id: 56, content: "Mi felicidad tiene tu nombre.", category: 'love' },
  { id: 57, content: "Te miro y pienso: qué suerte la mía.", category: 'love' },
  { id: 58, content: "Eres todo lo que no sabía que necesitaba.", category: 'love' },
  { id: 59, content: "Contigo el tiempo pasa diferente, más bonito.", category: 'love' },
  { id: 60, content: "No te cambio por nada ni por nadie.", category: 'love' },

  // ═══════════════════════════════════════════════════════════
  // MOTIVACIÓN - Para darle ánimo (25 frases)
  // ═══════════════════════════════════════════════════════════
  { id: 61, content: "No estás fallando, estás aprendiendo. Y lo haces increíble.", category: 'motivation' },
  { id: 62, content: "Incluso cuando dudas, sigues avanzando. Eso ya es fuerza.", category: 'motivation' },
  { id: 63, content: "Confía en el proceso, yo confío en ti.", category: 'motivation' },
  { id: 64, content: "No subestimes lo lejos que has llegado.", category: 'motivation' },
  { id: 65, content: "Paso a paso sigue siendo avanzar.", category: 'motivation' },
  { id: 66, content: "Eres más capaz de lo que crees, yo lo veo todos los días.", category: 'motivation' },
  { id: 67, content: "No tienes que tenerlo todo resuelto hoy.", category: 'motivation' },
  { id: 68, content: "Cada pequeño logro tuyo me llena de orgullo.", category: 'motivation' },
  { id: 69, content: "Si hoy no puedes correr, camina. Si no puedes caminar, descansa.", category: 'motivation' },
  { id: 70, content: "Tu mejor esfuerzo siempre es suficiente.", category: 'motivation' },
  { id: 71, content: "No compares tu capítulo 1 con el capítulo 20 de otros.", category: 'motivation' },
  { id: 72, content: "Tienes permiso de ir a tu propio ritmo.", category: 'motivation' },
  { id: 73, content: "Los días difíciles te hacen más fuerte, aunque no lo sientas.", category: 'motivation' },
  { id: 74, content: "Creo en ti incluso cuando tú no puedes.", category: 'motivation' },
  { id: 75, content: "Tus sueños valen la pena, no los abandones.", category: 'motivation' },
  { id: 76, content: "El progreso no siempre se ve, pero siempre cuenta.", category: 'motivation' },
  { id: 77, content: "Hoy puede ser difícil, pero tú eres más.", category: 'motivation' },
  { id: 78, content: "No te rindas, lo mejor está por venir.", category: 'motivation' },
  { id: 79, content: "Cada intento te acerca más a donde quieres estar.", category: 'motivation' },
  { id: 80, content: "Tu determinación me inspira más de lo que sabes.", category: 'motivation' },
  { id: 81, content: "No necesitas ser la mejor, solo tu mejor versión de hoy.", category: 'motivation' },
  { id: 82, content: "Los obstáculos son parte del camino, no el final.", category: 'motivation' },
  { id: 83, content: "Tienes todo lo necesario dentro de ti para lograrlo.", category: 'motivation' },
  { id: 84, content: "Sigue adelante, estoy orgulloso de cada paso que das.", category: 'motivation' },
  { id: 85, content: "Tu esfuerzo no pasa desapercibido, yo lo noto todo.", category: 'motivation' },

  // ═══════════════════════════════════════════════════════════
  // RECORDATORIOS - Pequeños gestos de amor (35 frases)
  // ═══════════════════════════════════════════════════════════
  { id: 86, content: "Respira. Todo puede esperar menos tú.", category: 'reminder' },
  { id: 87, content: "Este mensaje es solo para decirte que pienso en ti.", category: 'reminder' },
  { id: 88, content: "No olvides descansar, incluso los corazones fuertes lo necesitan.", category: 'reminder' },
  { id: 89, content: "Si hoy fue difícil, mañana te abrazo más fuerte.", category: 'reminder' },
  { id: 90, content: "Eres más amada de lo que imaginas, incluso ahora.", category: 'reminder' },
  { id: 91, content: "¿Ya comiste? Tu bienestar me importa.", category: 'reminder' },
  { id: 92, content: "Recuerda beber agua, hasta tu cuerpo merece amor.", category: 'reminder' },
  { id: 93, content: "Hoy pensé en ti... como todos los días.", category: 'reminder' },
  { id: 94, content: "Si nadie te lo dijo hoy: estás haciendo un gran trabajo.", category: 'reminder' },
  { id: 95, content: "Tu sonrisa ilumina mi día, aunque no la vea.", category: 'reminder' },
  { id: 96, content: "Eres importante. Punto. Sin condiciones.", category: 'reminder' },
  { id: 97, content: "Mereces todas las cosas bonitas que deseas.", category: 'reminder' },
  { id: 98, content: "Hoy es un buen día para quererte un poco más.", category: 'reminder' },
  { id: 99, content: "No olvides que siempre estaré de tu lado.", category: 'reminder' },
  { id: 100, content: "Tu felicidad también es mi prioridad.", category: 'reminder' },
  { id: 101, content: "Recuerda: eres suficiente tal como eres.", category: 'reminder' },
  { id: 102, content: "Permítete un momento de paz, te lo mereces.", category: 'reminder' },
  { id: 103, content: "Eres mi primera opción, siempre.", category: 'reminder' },
  { id: 104, content: "No tienes que hacer nada para ganarte mi amor, ya lo tienes.", category: 'reminder' },
  { id: 105, content: "Espero que tu día sea tan bonito como tú.", category: 'reminder' },
  { id: 106, content: "Recuerda que puedes contar conmigo para todo.", category: 'reminder' },
  { id: 107, content: "Te mando un abrazo virtual hasta que pueda darte uno real.", category: 'reminder' },
  { id: 108, content: "Eres la mejor parte de mis días.", category: 'reminder' },
  { id: 109, content: "Cuídate como yo te cuidaría si estuviera ahí.", category: 'reminder' },
  { id: 110, content: "No importa lo que pase, estamos juntos en esto.", category: 'reminder' },
  { id: 111, content: "Tu paz mental es más importante que cualquier tarea.", category: 'reminder' },
  { id: 112, content: "Recuerda respirar profundo cuando todo se sienta intenso.", category: 'reminder' },
  { id: 113, content: "Eres amada, valorada y apreciada. Siempre.", category: 'reminder' },
  { id: 114, content: "Hoy es un buen día simplemente porque existes.", category: 'reminder' },
  { id: 115, content: "No tienes que demostrar nada a nadie.", category: 'reminder' },
  { id: 116, content: "Tu bienestar es mi bienestar.", category: 'reminder' },
  { id: 117, content: "Recuerda que mereces amor sin esfuerzo.", category: 'reminder' },
  { id: 118, content: "Estoy aquí, en los buenos y en los no tan buenos.", category: 'reminder' },
  { id: 119, content: "Nunca dudes de lo especial que eres para mí.", category: 'reminder' },
  { id: 120, content: "Que este mensaje te recuerde que alguien te ama mucho.", category: 'reminder' },
];

// Función para obtener frase aleatoria sin repetir la anterior
let lastPhraseId: number | null = null;

export const getRandomPhrase = (category?: Phrase['category']): Phrase => {
  const filtered = category
    ? phrases.filter(p => p.category === category)
    : phrases;

  let randomPhrase: Phrase;
  do {
    randomPhrase = filtered[Math.floor(Math.random() * filtered.length)];
  } while (randomPhrase.id === lastPhraseId && filtered.length > 1);

  lastPhraseId = randomPhrase.id;
  return randomPhrase;
};

export const getComfortPhrase = (): Phrase => getRandomPhrase('comfort');
export const getLovePhrase = (): Phrase => getRandomPhrase('love');
export const getMotivationPhrase = (): Phrase => getRandomPhrase('motivation');
export const getReminderPhrase = (): Phrase => getRandomPhrase('reminder');
