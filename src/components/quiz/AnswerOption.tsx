import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  correctAnswer: string;
  onSelect: (option: string) => void;
  disabled: boolean;
}

export function AnswerOption({
  option,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  correctAnswer,
  onSelect,
  disabled,
}: AnswerOptionProps) {
  const isCorrectAnswer = option === correctAnswer;
  
  const getOptionStyles = () => {
    if (!showFeedback) {
      return cn(
        "border-border bg-card hover:border-primary/50 hover:bg-secondary/50",
        isSelected && "border-primary bg-secondary"
      );
    }
    
    if (isCorrectAnswer) {
      return "border-success bg-success/5";
    }
    
    if (isSelected && !isCorrect) {
      return "border-destructive bg-destructive/5";
    }
    
    return "border-border bg-card opacity-40";
  };

  return (
    <button
      onClick={() => onSelect(option)}
      disabled={disabled}
      className={cn(
        "w-full px-5 py-4 rounded-xl border text-left transition-all duration-200",
        "flex items-center gap-4 group opacity-0 animate-slide-up",
        getOptionStyles(),
        !disabled && "hover:shadow-soft active:scale-[0.99] cursor-pointer",
        disabled && "cursor-default"
      )}
      style={{ animationDelay: `${index * 80 + 200}ms` }}
    >
      <span
        className={cn(
          "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0",
          "transition-all duration-200",
          !showFeedback && "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
          showFeedback && isCorrectAnswer && "bg-success text-success-foreground",
          showFeedback && isSelected && !isCorrect && "bg-destructive text-destructive-foreground",
          showFeedback && !isCorrectAnswer && !isSelected && "bg-muted text-muted-foreground"
        )}
      >
        {showFeedback && isCorrectAnswer ? (
          <Check className="h-4 w-4" strokeWidth={2.5} />
        ) : showFeedback && isSelected && !isCorrect ? (
          <X className="h-4 w-4" strokeWidth={2.5} />
        ) : (
          String.fromCharCode(65 + index)
        )}
      </span>
      <span className={cn(
        "flex-1 font-medium",
        showFeedback && isCorrectAnswer && "text-success",
        showFeedback && isSelected && !isCorrect && "text-destructive"
      )}>
        <span className="italic">{option}</span>
      </span>
    </button>
  );
}
