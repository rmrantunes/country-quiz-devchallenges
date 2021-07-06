import create from "zustand";
import { generateQuiz, Question } from "country-quiz-generator";
import { useMemo } from "react";

interface QuizState {
  questions: Question[];
  questionIndex: number;
  currentQuestion: Question;
  goToNextQuestion(): void;
  isSubmitted: boolean;
  selectedAnswer: string;
  setSelectedAnswer(answer: string): void;
  userAnswersLog: boolean[];
  submitAnswer(): void;
  hasSessionFinished: boolean;
  startNewSession(): void;
  getProgress(): number;
  getCorrectAnswersAmount(): number;
}

const useQuiz = create<QuizState>((set, get) => ({
  questions: [],
  questionIndex: 0,
  selectedAnswer: "",
  isSubmitted: false,
  userAnswersLog: [],
  hasSessionFinished: false,
  currentQuestion: undefined,

  startNewSession() {
    set((state) => ({
      ...state,
      questions: generateQuiz(10),
      hasSessionFinished: false,
      userAnswersLog: [],
      questionIndex: 0,
    }));
  },

  setSelectedAnswer(answer) {
    set((state) => ({
      ...state,
      selectedAnswer: answer,
    }));
  },

  submitAnswer() {
    const selectedAnswer = get().selectedAnswer;
    const currentQuestion = get().questions[get().questionIndex];

    if (!selectedAnswer) return;
    const { correctAnswer } = currentQuestion;
    const isSelectedAnswerCorrect = selectedAnswer === correctAnswer;
    set((state) => ({
      userAnswersLog: [...state.userAnswersLog, isSelectedAnswerCorrect],
      isSubmitted: true,
    }));
  },

  goToNextQuestion() {
    set((state) => ({
      ...state,
      isSubmitted: false,
      selectedAnswer: "",
      ...(state.questions[state.questionIndex + 1] !== undefined
        ? {
            questionIndex: state.questionIndex + 1,
            currentQuestion: state.questions[state.questionIndex + 1],
          }
        : { hasSessionFinished: true }),
    }));
  },

  getCorrectAnswersAmount: () => get().userAnswersLog.filter(Boolean).length,
  getProgress: () => (get().questionIndex / 10) * 100,
}));

export default useQuiz;
