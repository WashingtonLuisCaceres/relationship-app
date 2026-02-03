export interface Phrase {
  id: number;
  content: string;
  category: 'comfort' | 'love' | 'motivation' | 'reminder';
}

export const phrases: Phrase[] = [
  // Confort - Para cuando está triste
  { id: 31, content: "No tienes que explicarme nada, solo sentir. Yo me quedo.", category: 'comfort' },
  { id: 32, content: "Aunque hoy duela, no estás sola ni un segundo.", category: 'comfort' },
  { id: 33, content: "Estoy orgulloso de ti incluso en tus días grises.", category: 'comfort' },
  { id: 34, content: "Si el mundo pesa demasiado, apóyate en mí.", category: 'comfort' },
  { id: 35, content: "No importa cuánto tardes, te espero con amor.", category: 'comfort' },

  // Amor - Expresiones de cariño
  { id: 36, content: "Amarte es lo más natural que me pasa.", category: 'love' },
  { id: 37, content: "Eres mi pensamiento favorito sin darme cuenta.", category: 'love' },
  { id: 38, content: "Si te pierdes, búscame: siempre voy a ser tu lugar.", category: 'love' },
  { id: 39, content: "Mi corazón te reconoce incluso con los ojos cerrados.", category: 'love' },
  { id: 40, content: "No sé cómo explicarlo, pero contigo todo tiene sentido.", category: 'love' },

  // Motivación - Para darle ánimo
  { id: 41, content: "No estás fallando, estás aprendiendo. Y lo haces increíble.", category: 'motivation' },
  { id: 42, content: "Incluso cuando dudas, sigues avanzando. Eso ya es fuerza.", category: 'motivation' },
  { id: 43, content: "Confía en el proceso, yo confío en ti.", category: 'motivation' },
  { id: 44, content: "No subestimes lo lejos que has llegado.", category: 'motivation' },
  { id: 45, content: "Paso a paso sigue siendo avanzar.", category: 'motivation' },

  // Recordatorios - Pequeños gestos
  { id: 46, content: "Respira. Todo puede esperar menos tú.", category: 'reminder' },
  { id: 47, content: "Este mensaje es solo para decirte que pienso en ti.", category: 'reminder' },
  { id: 48, content: "No olvides descansar, incluso los corazones fuertes lo necesitan.", category: 'reminder' },
  { id: 49, content: "Si hoy fue difícil, mañana te abrazo más fuerte.", category: 'reminder' },
  { id: 50, content: "Eres más amada de lo que imaginas, incluso ahora.", category: 'reminder' },
];

export const getRandomPhrase = (category?: Phrase['category']): Phrase => {
  const filtered = category
    ? phrases.filter(p => p.category === category)
    : phrases;
  return filtered[Math.floor(Math.random() * filtered.length)];
};

export const getComfortPhrase = (): Phrase => getRandomPhrase('comfort');
export const getLovePhrase = (): Phrase => getRandomPhrase('love');
