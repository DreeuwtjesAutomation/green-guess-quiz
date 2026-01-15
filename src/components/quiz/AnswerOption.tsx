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

const optionLabels = ["A", "B", "C", "D"];

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
        "border-border bg-card hover:border-primary hover:bg-secondary/50",
        isSelected && "border-primary bg-secondary"
      );
    }
    
    if (isCorrectAnswer) {
      return "border-success bg-success/10 text-success";
    }
    
    if (isSelected && !isCorrect) {
      return "border-destructive bg-destructive/10 text-destructive";
    }
    
    return "border-border bg-card opacity-50";
  };

  return (
    <button
      onClick={() => onSelect(option)}
      disabled={disabled}
      className={cn(
        "w-full p-4 rounded-lg border-2 text-left transition-all duration-300",
        "flex items-center gap-4 group",
        "animate-slide-up",
        getOptionStyles(),
        !disabled && "hover:shadow-md cursor-pointer",
        disabled && "cursor-default"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
          "border-2 transition-colors duration-300",
          !showFeedback && "border-border bg-muted text-muted-foreground group-hover:border-primary group-hover:text-primary",
          showFeedback && isCorrectAnswer && "border-success bg-success text-success-foreground",
          showFeedback && isSelected && !isCorrect && "border-destructive bg-destructive text-destructive-foreground",
          showFeedback && !isCorrectAnswer && !isSelected && "border-border bg-muted text-muted-foreground"
        )}
      >
        {showFeedback && isCorrectAnswer ? (
          <Check className="h-4 w-4" />
        ) : showFeedback && isSelected && !isCorrect ? (
          <X className="h-4 w-4" />
        ) : (
          optionLabels[index]
        )}
      </span>
      <span className={cn(
        "flex-1 font-medium italic",
        showFeedback && isCorrectAnswer && "text-success",
        showFeedback && isSelected && !isCorrect && "text-destructive"
      )}>
        {option}
      </span>
    </button>
  );
}
