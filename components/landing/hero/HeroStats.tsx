import { Sparkles } from "lucide-react";

export function HeroStats() {
  return (
    <>
      <div className="absolute top-8 -left-8 bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 shadow-lg animate-float-slow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium">Lightning Fast</div>
            <div className="text-2xl font-bold text-primary">2x Faster</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 -right-8 bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg animate-float-delayed">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Live Preview</span>
        </div>
      </div>
    </>
  );
}
