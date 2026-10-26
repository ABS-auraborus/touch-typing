import Container from "../components/Container";
import AppPurpose from "../sections/Home/AppPurpose";
import UsefulTo from "../sections/Home/UsefulTo";

export default function HomePage() {
  return (
    <main className="pt-21 bg-dark-blue-main text-white">
      <Container>
        <AppPurpose />
        <UsefulTo />
      </Container>
    </main>
  );
}
