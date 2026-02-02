import { useState, useCallback } from 'react';
import { PhraseCard } from './components/PhraseCard';
import { ActionButton } from './components/ActionButton';
import { HeartIcon } from './components/HeartIcon';
import type { Phrase } from './data/phrases';
import { getRandomPhrase, getComfortPhrase } from './data/phrases';
import './index.css';

function App() {
  const [currentPhrase, setCurrentPhrase] = useState<Phrase | null>(null);
  const [showPhrase, setShowPhrase] = useState(false);

  const handleHugRequest = useCallback(() => {
    setShowPhrase(false);
    setTimeout(() => {
      setCurrentPhrase(getRandomPhrase());
      setShowPhrase(true);
    }, 100);
  }, []);

  const handleSadRequest = useCallback(() => {
    setShowPhrase(false);
    setTimeout(() => {
      setCurrentPhrase(getComfortPhrase());
      setShowPhrase(true);
    }, 100);
  }, []);

  const handleNewPhrase = useCallback(() => {
    setShowPhrase(false);
    setTimeout(() => {
      const newPhrase = currentPhrase?.category === 'comfort'
        ? getComfortPhrase()
        : getRandomPhrase();
      setCurrentPhrase(newPhrase);
      setShowPhrase(true);
    }, 100);
  }, [currentPhrase?.category]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 gap-8">
      {/* Header */}
      <header className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HeartIcon className="text-coral animate-pulse-soft" size={32} />
          <h1 className="text-3xl font-bold text-text-dark">Mica</h1>
          <HeartIcon className="text-coral animate-pulse-soft" size={32} />
        </div>
        <p className="text-text-dark/70 text-sm">Un abrazo cuando lo necesites</p>
      </header>

      {/* Phrase display area */}
      <div className="flex-1 flex items-center justify-center min-h-[200px]">
        {showPhrase ? (
          <PhraseCard phrase={currentPhrase} isVisible={showPhrase} />
        ) : (
          <div className="text-center text-text-dark/50 animate-fade-in">
            <HeartIcon className="mx-auto mb-4 text-coral/30" size={64} />
            <p>Toca un botón para recibir amor</p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs mb-8">
        {!showPhrase ? (
          <>
            <ActionButton onClick={handleHugRequest} variant="primary">
              Dame un abrazo
            </ActionButton>
            <ActionButton onClick={handleSadRequest} variant="secondary">
              Estoy bajón
            </ActionButton>
          </>
        ) : (
          <>
            <ActionButton onClick={handleNewPhrase} variant="primary">
              Otro más
            </ActionButton>
            <ActionButton onClick={() => setShowPhrase(false)} variant="secondary">
              Volver
            </ActionButton>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-text-dark/40 pb-4">
        Hecho con amor para ti
      </footer>
    </main>
  );
}

export default App;
