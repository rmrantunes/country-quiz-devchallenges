import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import countries from "data/countries.json";
import languages from "data/languages.json";
import continents from "data/continents.json";

import { Container } from "ui/components/Layout";
import { Modal } from "ui/components/Modal";
import { QuestionsProvider } from "ui/contexts/QuestionsContext";
import { QuestionGenerator } from "utils/question-generator";
const questionGenerator = new QuestionGenerator({ countries, languages });

export const getStaticProps = async () => {
  const questions = [
    questionGenerator.capitalOf(),
    questionGenerator.flagOf(),
    questionGenerator.languageOf(),
  ];

  return {
    props: {
      questions,
    },
  };
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div className="min-h-screen bg-blue-400">
      <Container>
        <QuestionsProvider questions={props.questions}>
          <Modal />
        </QuestionsProvider>
      </Container>
    </div>
  );
}
