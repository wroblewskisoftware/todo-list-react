import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Radosław Wróblewski"
      body={
        <>
          <p>
            Mam na imię Radek i mam 41 lat. Pochodzę z małej miejscowości{" "}
            <a
              rel="noreferrer noopener"
              target="_blanc"
              href="https://pl.wikipedia.org/wiki/Kutno"
              title="Otwórz w wikipedii"
            >
              Kutno
            </a>
            , leżącej w samym centrum Polski. Moja przygoda z programowaniem
            zaczęła się już w ubiegłym stuleciu, kiedy to rodzice kupili mi
            komputer{" "}
            <a
              rel="noreferrer noopener"
              target="_blanc"
              href="https://pl.wikipedia.org/wiki/Commodore_64"
              title="Otwórz w wikipedii"
            >
              <i lang="en">Commodore64</i>
            </a>
            . W tym samym okresie dostałem książkę dla dzieci na temat
            programowania w języku{" "}
            <a
              rel="noreferrer noopener"
              target="_blanc"
              href="https://pl.wikipedia.org/wiki/BASIC"
              title="Otwórz w wikipedii"
            >
              <i lang="en">BASIC</i>
            </a>
            . I tak to się zaczęło. Później zainteresowanie programowaniem
            zostało zapomniane, wraz z zamianą komputera na rolki.
            <br />
            Aż do teraz.
            <br />
            Kiedy zobaczyłem zaproszenie na live'a dotyczącego programowania
            pomyślałem sobie, że może warto spróbować. I w ten sposób zaczął się
            drugi etap mojej przygody. Mam nadzieję, że niedługo będę mógł
            wykorzystać nowo zdobyte umiejętności na rynku pracy.
          </p>
        </>
      }
    />
  </Container>
);

export default AuthorPage;
