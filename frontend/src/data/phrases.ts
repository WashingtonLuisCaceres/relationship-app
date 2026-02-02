export interface Phrase {
  id: number;
  content: string;
  category: 'comfort' | 'love' | 'motivation' | 'reminder';
}

export const phrases: Phrase[] = [
  // Confort - Para cuando está triste
  { id: 1, content: "Está bien no estar bien. Estoy aquí contigo, siempre.", category: 'comfort' },
  { id: 2, content: "Tus sentimientos son válidos. No tienes que ser fuerte todo el tiempo.", category: 'comfort' },
  { id: 3, content: "Este momento difícil pasará, pero mi amor por ti no.", category: 'comfort' },
  { id: 4, content: "Respira profundo. Yo te sostengo aunque no esté físicamente ahí.", category: 'comfort' },
  { id: 5, content: "No tienes que cargar todo sola. Déjame ser tu refugio.", category: 'comfort' },
  { id: 6, content: "Llorar no es debilidad, es valentía de sentir.", category: 'comfort' },
  { id: 7, content: "Mereces todo el tiempo que necesites para sanar.", category: 'comfort' },

  // Amor - Expresiones de cariño
  { id: 8, content: "Eres mi persona favorita en todos los universos posibles.", category: 'love' },
  { id: 9, content: "Cada día me enamoro más de ti, y eso que ya te amo infinito.", category: 'love' },
  { id: 10, content: "Tu sonrisa es mi lugar seguro.", category: 'love' },
  { id: 11, content: "Gracias por elegirme cada día.", category: 'love' },
  { id: 12, content: "Contigo aprendí que el amor no se busca, se encuentra.", category: 'love' },
  { id: 13, content: "Eres el plot twist más bonito de mi vida.", category: 'love' },
  { id: 14, content: "Mi definición de hogar cambió cuando te conocí.", category: 'love' },
  { id: 15, content: "No necesito wifi cuando estoy contigo, tú eres mi conexión favorita.", category: 'love' },

  // Motivación - Para darle ánimo
  { id: 16, content: "Puedes con esto y con todo. Eres más fuerte de lo que crees.", category: 'motivation' },
  { id: 17, content: "Hoy es un buen día para ser increíble. Y tú ya lo eres.", category: 'motivation' },
  { id: 18, content: "Tu esfuerzo importa, aunque no siempre veas los resultados de inmediato.", category: 'motivation' },
  { id: 19, content: "No te compares con nadie. Tu camino es único y hermoso.", category: 'motivation' },
  { id: 20, content: "Cada pequeño paso cuenta. Sigue adelante, amor.", category: 'motivation' },
  { id: 21, content: "El mundo necesita tu luz. No la apagues.", category: 'motivation' },
  { id: 22, content: "Confío en ti más de lo que te imaginas.", category: 'motivation' },

  // Recordatorios - Pequeños gestos
  { id: 23, content: "¿Ya tomaste agua hoy? Hidrátate, bonita.", category: 'reminder' },
  { id: 24, content: "Recuerda: eres amada, valiosa e irreemplazable.", category: 'reminder' },
  { id: 25, content: "Si lees esto, te debo un abrazo. Cóbralo pronto.", category: 'reminder' },
  { id: 26, content: "Pase lo que pase, estamos juntos en esto.", category: 'reminder' },
  { id: 27, content: "Te extraño. Así, random. Solo quería que lo supieras.", category: 'reminder' },
  { id: 28, content: "Este es tu recordatorio de que alguien te ama muchísimo.", category: 'reminder' },
  { id: 29, content: "Cuando dudes de ti, recuerda cómo te veo yo.", category: 'reminder' },
  { id: 30, content: "Eres suficiente. Exactamente como eres hoy.", category: 'reminder' },
];

export const getRandomPhrase = (category?: Phrase['category']): Phrase => {
  const filtered = category
    ? phrases.filter(p => p.category === category)
    : phrases;
  return filtered[Math.floor(Math.random() * filtered.length)];
};

export const getComfortPhrase = (): Phrase => getRandomPhrase('comfort');
export const getLovePhrase = (): Phrase => getRandomPhrase('love');
