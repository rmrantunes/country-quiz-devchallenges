import { generateQuiz } from "country-quiz-generator";
import { InferGetServerSidePropsType } from "next";

import { Container } from "ui/components/Layout";
import { Modal } from "ui/components/Modal";
import { QuestionsProvider } from "ui/contexts/QuestionsContext";

export const getServerSideProps = async () => {
  const questions = generateQuiz(10);

  return {
    props: {
      questions,
    },
  };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
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
