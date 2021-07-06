import { generateQuiz } from "country-quiz-generator";
import { InferGetServerSidePropsType } from "next";
import Center from "components/Center";
import Container from "components/Container";
import Footer from "components/Footer";

import { Modal } from "components/Modal";
import useQuiz from "store/useQuiz";

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
  useQuiz.setState({
    questions: props.questions,
    currentQuestion: props.questions[0],
  }); 

  return (
    <Container>
      <Center>
        <Modal />
      </Center>
      <Footer />
    </Container>
  );
}
