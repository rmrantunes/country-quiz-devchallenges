import { generateQuiz } from "country-quiz-generator";
import { InferGetServerSidePropsType } from "next";
import Center from "ui/components/Center";
import Container from "ui/components/Container";
import Footer from "ui/components/Footer";

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
    <Container>
      <Center>
        <QuestionsProvider questions={props.questions}>
          <Modal />
        </QuestionsProvider>
      </Center>
      <Footer />
    </Container>
  );
}
