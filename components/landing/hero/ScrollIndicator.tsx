export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}
