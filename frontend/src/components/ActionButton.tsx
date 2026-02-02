interface ActionButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  disabled?: boolean;
}

export function ActionButton({ onClick, variant, children, disabled }: ActionButtonProps) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
