import { Button } from "@/components/ui/button";
import { RotateCcw, Trophy } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function QuizResults({ score, totalQuestions, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage === 100) return "Perfect score! You're a true botanist.";
    if (percentage >= 80) return "Excellent! You really know your plants.";
    if (percentage >= 60) return "Good job! Keep learning.";
    if (percentage >= 40) return "Not bad! Room to grow.";
    return "Keep exploring the botanical world!";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center opacity-0 animate-fade-in">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Trophy className="h-10 w-10 text-primary" strokeWidth={1.5} />
      </div>

      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
        Quiz Complete
      </h2>
      
      <p className="text-muted-foreground mb-8 max-w-xs">
        {getMessage()}
      </p>

      <div className="bg-card rounded-2xl px-12 py-8 mb-8 shadow-card">
        <p className="text-5xl font-heading text-primary mb-1">
          {score}/{totalQuestions}
        </p>
        <p className="text-sm text-muted-foreground">
          {percentage}% correct
        </p>
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="gap-2 rounded-full px-8"
      >
        <RotateCcw className="h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
}
