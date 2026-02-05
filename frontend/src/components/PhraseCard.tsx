import type { Phrase } from '../data/phrases';

interface PhraseCardProps {
  phrase: Phrase | null;
  isVisible: boolean;
}

const categoryEmojis: Record<Phrase['category'], string[]> = {
  comfort: ['🤗', '🫂', '💝', '🌸', '🦋', '🌈', '☁️', '🧸'],
  love: ['💕', '💖', '💗', '❤️', '💓', '💞', '🥰', '😍', '💘', '💑'],
  motivation: ['✨', '🌟', '💪', '🔥', '⭐', '🚀', '🌻', '🎯', '💫'],
  reminder: ['💭', '🌷', '🌺', '💐', '🌹', '☀️', '🦢', '🍀', '🎀'],
};

const getRandomEmoji = (category: Phrase['category']): string => {
  const emojis = categoryEmojis[category];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export function PhraseCard({ phrase, isVisible }: PhraseCardProps) {
  if (!phrase || !isVisible) return null;

  const emoji = getRandomEmoji(phrase.category);

  return (
    <div className="glass-card p-8 mx-4 max-w-md animate-bounce-in shimmer">
      <div className="text-5xl mb-4 text-center animate-heartbeat">
        {emoji}
      </div>
      <p className="text-xl text-center text-text-dark leading-relaxed font-medium animate-fade-in">
        {phrase.content}
      </p>
      <div className="mt-4 flex justify-center gap-1 opacity-30">
        <span className="text-xs">{'♥'.repeat(3)}</span>
      </div>
    </div>
  );
}
