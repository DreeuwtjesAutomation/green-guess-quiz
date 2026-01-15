import { Progress } from "@/components/ui/progress";
import { Leaf } from "lucide-react";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, score }: QuizProgressProps) {
  const progressPercentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full space-y-4 animate-fade-in">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Leaf className="h-4 w-4 text-primary" />
          <span className="font-medium">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
        </div>
        <div className="flex items-center gap-2 font-medium text-primary">
          <span>Score: {score}</span>
        </div>
      </div>
      <Progress value={progressPercentage} variant="botanical" className="h-2" />
    </div>
  );
}
