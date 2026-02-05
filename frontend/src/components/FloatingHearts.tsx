import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
  emoji: string;
  duration: number;
}

const HEART_EMOJIS = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝', '🩷', '🤍', '💜', '🧡', '💛'];

export function FloatingHearts({ trigger }: { trigger: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (trigger === 0) return;

    // Crear más corazones distribuidos en toda la pantalla
    const newHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      left: 5 + Math.random() * 90, // 5% a 95% del ancho
      delay: Math.random() * 0.8, // Delay escalonado
      size: 1.2 + Math.random() * 1.2, // Tamaños variados
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      duration: 3 + Math.random() * 2, // Duraciones variadas 3-5s
    }));

    setHearts(prev => [...prev, ...newHearts]);

    // Limpiar corazones después de la animación
    const timeout = setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 6000);

    return () => clearTimeout(timeout);
  }, [trigger]);

  if (hearts.length === 0) return null;

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
