import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PlantImage } from "./PlantImage";
import { AnswerOption } from "./AnswerOption";
import { FeedbackMessage } from "./FeedbackMessage";
import { ArrowRight } from "lucide-react";
import type { PlantQuestion } from "@/data/plantQuizData";

interface QuizCardProps {
  question: PlantQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export function QuizCard({ question, onAnswer, onNext }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = useCallback((option: string) => {
    if (showFeedback) return;
    
    setSelectedAnswer(option);
    const correct = option === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    onAnswer(correct);
  }, [showFeedback, question.correctAnswer, onAnswer]);

  const handleNext = useCallback(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    onNext();
  }, [onNext]);

  return (
    <div className="space-y-8 animate-fade-in">
      <PlantImage imageUrl={question.imageUrl} alt="Mystery plant to identify" />
      
      <div className="space-y-3">
        <h3 className="text-center font-heading text-xl text-muted-foreground mb-6">
          What is this plant?
        </h3>
        {question.options.map((option, index) => (
          <AnswerOption
            key={option}
            option={option}
            index={index}
            isSelected={selectedAnswer === option}
            isCorrect={isCorrect}
            showFeedback={showFeedback}
            correctAnswer={question.correctAnswer}
            onSelect={handleSelect}
            disabled={showFeedback}
          />
        ))}
      </div>

      {showFeedback && (
        <div className="space-y-4">
          <FeedbackMessage isCorrect={isCorrect} correctAnswer={question.correctAnswer} />
          <Button
            onClick={handleNext}
            className="w-full gap-2"
            size="lg"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
