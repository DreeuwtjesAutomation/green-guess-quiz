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
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <header className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Plant Identification Quiz
          </h1>
          <p className="text-muted-foreground">
            Test your botanical knowledge
          </p>
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

        <footer className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            Learn to identify plants from around the world
          </p>
        </footer>
      </div>
    </div>
  );
}
