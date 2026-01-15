import { useState, useCallback, useMemo } from "react";
import { QuizProgress } from "./QuizProgress";
import { QuizCard } from "./QuizCard";
import { QuizResults } from "./QuizResults";
import { getShuffledQuestions } from "@/data/plantQuizData";
import { Leaf } from "lucide-react";

export function Quiz() {
  const [questions, setQuestions] = useState(() => getShuffledQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex],
    [questions, currentQuestionIndex]
  );

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex + 1 >= questions.length) {
      setIsComplete(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setQuestions(getShuffledQuestions());
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsComplete(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-md mx-auto px-5 py-8">
        <header className="text-center mb-10 opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Leaf className="h-5 w-5" strokeWidth={2} />
            <span className="text-sm font-semibold uppercase tracking-wider">Plant Quiz</span>
          </div>
          <h1 className="font-heading text-2xl md:text-3xl text-foreground">
            Name That Plant
          </h1>
        </header>

        {isComplete ? (
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        ) : (
          <div className="space-y-8">
            <QuizProgress
              currentQuestion={currentQuestionIndex}
              totalQuestions={questions.length}
              score={score}
            />
            <QuizCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          </div>
        )}
      </div>
    </div>
  );
}
