export type QuestionType = "capital-of" | "flag";

export interface Question {
  type?: QuestionType;
  flagSrc?: string;
  title: string;
  correctAnswer: string;
  possibleAnswers: string[];
}
