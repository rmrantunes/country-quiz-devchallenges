import create from "zustand";
import { generateQuiz, Question } from "country-quiz-generator";

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
    const newQuestions = generateQuiz(10);

    set((state) => ({
      ...state,
      questions: newQuestions,
      currentQuestion: newQuestions[0],
      hasSessionFinished: false,
      userAnswersLog: [],
    }));
  },

  setSelectedAnswer(answer) {
    set((state) => ({
      ...state,
      selectedAnswer: answer,
    }));
  },

  submitAnswer() {
    set((state) => {
      const selectedAnswer = state.selectedAnswer;
      const currentQuestion = state.questions[state.questionIndex];

      if (!selectedAnswer) return { ...state };

      const { correctAnswer } = currentQuestion;
      const isSelectedAnswerCorrect = selectedAnswer === correctAnswer;

      return {
        userAnswersLog: [...state.userAnswersLog, isSelectedAnswerCorrect],
        isSubmitted: true,
      };
    });
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
        : { hasSessionFinished: true, questionIndex: 0 }),
    }));
  },

  getCorrectAnswersAmount: () => get().userAnswersLog.filter(Boolean).length,
  getProgress: () => (get().questionIndex / 10) * 100,
}));

export default useQuiz;
