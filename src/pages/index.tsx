import { generateQuiz } from "country-quiz-generator";
import { InferGetServerSidePropsType } from "next";
import Center from "components/Center";
import Container from "components/Container";
import Footer from "components/Footer";

import { Modal } from "components/Modal";
import { QuestionsProvider } from "contexts/QuestionsContext";

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
