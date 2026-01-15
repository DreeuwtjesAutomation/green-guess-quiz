import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Leaf } from "lucide-react";

interface FeedbackMessageProps {
  isCorrect: boolean;
  correctAnswer: string;
}

export function FeedbackMessage({ isCorrect, correctAnswer }: FeedbackMessageProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-4 rounded-lg animate-fade-in",
        isCorrect ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30"
      )}
    >
      {isCorrect ? (
        <>
          <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
          <div>
            <p className="font-semibold text-success">Correct!</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Leaf className="h-3 w-3" />
              <span className="italic">{correctAnswer}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
          <div>
            <p className="font-semibold text-destructive">Not quite!</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              The correct answer is: <span className="italic font-medium">{correctAnswer}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
