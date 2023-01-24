import "./App.css"
import { Container } from "./Components/Container";
import { ContainerImg } from "./Components/ContainerImg";
import { Header } from "./Components/Header";
import { SectionMain } from "./Components/SectionMain";
import { SectionProject } from "./Components/SectionProject";

function App() {

  const projetos = [
    {
      nome: '',
      tecnologias: '',
      link: '',
      imgs: '',
    }
  ]



  return (
    <div className="App">
      <Header>
        <ul>
          <a id="#home">Home</a>
          <a id="#project">Project</a>
          <a>About</a>
        </ul>
      </Header>
      <SectionMain id="home">
        <Container>
            <ContainerImg>
              <img 
                className="imagem"
                src="https://github.com/marcelo1080p.png"
              />
            </ContainerImg>
        </Container>
        <Container>

        </Container>
      </SectionMain>

      <SectionProject id="project">
        <h1>Hello 2</h1>
      </SectionProject>
    </div>
  );
}

export default App;
