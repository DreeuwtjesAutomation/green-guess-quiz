import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface FeedbackMessageProps {
  isCorrect: boolean;
  correctAnswer: string;
}

export function FeedbackMessage({ isCorrect, correctAnswer }: FeedbackMessageProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-5 py-4 rounded-xl opacity-0 animate-fade-in",
        isCorrect ? "bg-success/10" : "bg-destructive/10"
      )}
    >
      {isCorrect ? (
        <>
          <CheckCircle2 className="h-5 w-5 text-success shrink-0" strokeWidth={2} />
          <div>
            <p className="font-semibold text-success text-sm">Correct!</p>
            <p className="text-sm text-muted-foreground">
              <span className="italic">{correctAnswer}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <XCircle className="h-5 w-5 text-destructive shrink-0" strokeWidth={2} />
          <div>
            <p className="font-semibold text-destructive text-sm">Not quite</p>
            <p className="text-sm text-muted-foreground">
              Correct: <span className="italic font-medium">{correctAnswer}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
