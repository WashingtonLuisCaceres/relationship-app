import type { Phrase } from '../data/phrases';

interface PhraseCardProps {
  phrase: Phrase | null;
  isVisible: boolean;
}

const categoryEmoji: Record<Phrase['category'], string> = {
  comfort: '🤗',
  love: '💕',
  motivation: '✨',
  reminder: '💭',
};

export function PhraseCard({ phrase, isVisible }: PhraseCardProps) {
  if (!phrase || !isVisible) return null;

  return (
    <div className="glass-card p-8 mx-4 max-w-md animate-slide-up">
      <div className="text-4xl mb-4 text-center animate-float">
        {categoryEmoji[phrase.category]}
      </div>
      <p className="text-xl text-center text-text-dark leading-relaxed font-medium">
        {phrase.content}
      </p>
    </div>
  );
}
