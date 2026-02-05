import { useState, useCallback } from 'react';
import { PhraseCard } from './components/PhraseCard';
import { ActionButton } from './components/ActionButton';
import { HeartIcon } from './components/HeartIcon';
import { PhotoGallery } from './components/PhotoGallery';
import { FloatingHearts } from './components/FloatingHearts';
import type { Phrase } from './data/phrases';
import { getRandomPhrase, getComfortPhrase } from './data/phrases';
import './index.css';

function App() {
  const [currentPhrase, setCurrentPhrase] = useState<Phrase | null>(null);
  const [showPhrase, setShowPhrase] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [heartTrigger, setHeartTrigger] = useState(0);

  const triggerHearts = () => setHeartTrigger(prev => prev + 1);

  const handleHugRequest = useCallback(() => {
    setShowPhrase(false);
    setTimeout(() => {
      setCurrentPhrase(getRandomPhrase());
      setShowPhrase(true);
      triggerHearts();
    }, 100);
  }, []);

  const handleSadRequest = useCallback(() => {
    setShowPhrase(false);
    setTimeout(() => {
      setCurrentPhrase(getComfortPhrase());
      setShowPhrase(true);
      triggerHearts();
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
      triggerHearts();
    }, 100);
  }, [currentPhrase?.category]);

  return (
    <>
      <FloatingHearts trigger={heartTrigger} />
      {showGallery && <PhotoGallery onClose={() => setShowGallery(false)} />}

      <main className="flex-1 flex flex-col items-center justify-center p-4 gap-8">
        {/* Header */}
        <header className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HeartIcon className="text-coral animate-heartbeat" size={32} />
            <h1 className="text-3xl font-bold text-text-dark">Mica</h1>
            <HeartIcon className="text-coral animate-heartbeat" size={32} />
          </div>
          <p className="text-text-dark/70 text-sm">Un abrazo cuando lo necesites</p>
        </header>

        {/* Phrase display area */}
        <div className="flex-1 flex items-center justify-center min-h-[200px]">
          {showPhrase ? (
            <PhraseCard phrase={currentPhrase} isVisible={showPhrase} />
          ) : (
            <div className="text-center text-text-dark/50 animate-fade-in">
              <HeartIcon className="mx-auto mb-4 text-coral/30 animate-float" size={64} />
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

        {/* Gallery button */}
        <button
          onClick={() => setShowGallery(true)}
          className="flex items-center gap-2 text-text-dark/60 hover:text-text-dark transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">Nuestros Recuerdos</span>
        </button>

        {/* Footer */}
        <footer className="text-center text-xs text-text-dark/40 pb-4">
          Hecho con amor para ti 💕
        </footer>
      </main>
    </>
  );
}

export default App;
