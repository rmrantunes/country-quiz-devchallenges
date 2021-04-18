// export type QuestionType = "capital-of" | "flag" | "language";

export enum QuestionType {
  CAPITAL_OF = "capital-of",
  FLAG = "flag",
  LANGUAGE_OF = "language-of",
}

export interface Question {
  type?: QuestionType;
  flagSrc?: string;
  title: string;
  correctAnswer: string;
  possibleAnswers: string[];
}
