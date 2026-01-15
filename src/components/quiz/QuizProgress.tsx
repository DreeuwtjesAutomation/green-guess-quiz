import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, score }: QuizProgressProps) {
  const progressPercentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full space-y-3 opacity-0 animate-fade-in">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground font-medium">
          {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="font-semibold text-primary">
          {score} {score === 1 ? 'point' : 'points'}
        </span>
      </div>
      <Progress value={progressPercentage} variant="botanical" />
    </div>
  );
}
