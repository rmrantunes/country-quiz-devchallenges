import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import countries from "data/countries.json";
import languages from "data/languages.json";
import { QuestionGenerator } from "utils/question-generator";

import { Container } from "ui/components/Layout";
import { Modal } from "ui/components/Modal";
import { QuestionsProvider } from "ui/contexts/QuestionsContext";

const questionGenerator = new QuestionGenerator({ countries, languages });

export const getStaticProps = async () => {
  const questions = questionGenerator.generate(10);

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
