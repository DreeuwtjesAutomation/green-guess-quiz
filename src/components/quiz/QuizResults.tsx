import { Button } from "@/components/ui/button";
import { Leaf, RotateCcw, Trophy, Star } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function QuizResults({ score, totalQuestions, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage === 100) return "Perfect! You're a true botanist!";
    if (percentage >= 80) return "Excellent! You really know your plants!";
    if (percentage >= 60) return "Good job! Keep learning about plants!";
    if (percentage >= 40) return "Not bad! There's more to discover!";
    return "Keep exploring the botanical world!";
  };

  const getStars = () => {
    if (percentage >= 80) return 3;
    if (percentage >= 50) return 2;
    return 1;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
          <Trophy className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute -top-2 -right-2 flex gap-1">
          {Array.from({ length: getStars() }).map((_, i) => (
            <Star key={i} className="h-6 w-6 text-accent fill-accent animate-scale-in" style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>
      </div>

      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Quiz Complete!
      </h2>
      
      <p className="text-lg text-muted-foreground mb-6 flex items-center gap-2">
        <Leaf className="h-5 w-5 text-primary" />
        {getMessage()}
      </p>

      <div className="bg-card border border-border rounded-xl p-8 mb-8 shadow-lg">
        <p className="text-6xl font-heading font-bold text-primary mb-2">
          {score}/{totalQuestions}
        </p>
        <p className="text-muted-foreground">
          {percentage}% correct
        </p>
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="gap-2 text-lg px-8"
      >
        <RotateCcw className="h-5 w-5" />
        Play Again
      </Button>
    </div>
  );
}
