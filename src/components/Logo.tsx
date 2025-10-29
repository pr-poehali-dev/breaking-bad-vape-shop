const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  return (
    <div className={`${sizes[size]} bg-primary border-2 border-primary flex items-center justify-center font-bold`}>
      <span className="text-primary-foreground tracking-tight">Heis</span>
    </div>
  );
};

export default Logo;
