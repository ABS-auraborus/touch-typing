import React from "react";
import Container from "../components/Container";
import SelectionLine from "../sections/Training/SelectionLine";
import TextHolder from "../sections/Training/TextHolder";

const TrainingPage = () => {
  return (
    <main className="pt-10">
      <Container>
        <SelectionLine />
        <TextHolder />
      </Container>
    </main>
  );
};

export default TrainingPage;
