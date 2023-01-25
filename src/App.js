import "./App.css"
import { Container } from "./Components/Container";
import { ContainerImg } from "./Components/ContainerImg";
import { ContainerProjets } from "./Components/ContainerProjets";
import { Header } from "./Components/Header";
import { Dados } from "./Components/Infos";
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
            <div className="divisoria"></div>
            <ContainerImg>
              <img 
                className="imagem"
                src="https://github.com/marcelo1080p.png"
              />
            </ContainerImg>
            <Dados>
              <h2>Hi, I'm <strong>Marcelo</strong></h2>
              <p>Frond-end Developer.</p>
            </Dados>
            
        </Container>

      </SectionMain>

      <SectionProject id="project">
        <h1 className="titulo">Projects</h1>
        <ContainerProjets>

        </ContainerProjets>
      </SectionProject>
    </div>
  );
}

export default App;
