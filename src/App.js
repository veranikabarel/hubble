import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import content from './content';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ffffff",
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={item} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
