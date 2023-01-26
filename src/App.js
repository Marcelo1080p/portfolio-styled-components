import "./App.css"
import { BtnTecs } from "./Components/btnTecs";
import { Cards } from "./Components/Cards";
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
      nome: 'Gradient generator',
      linkGitHub: 'https://github.com/Marcelo1080p/gerador-de-gradient',
      tecnologias: ["ReactJs", "Js"],
      imgs: '././gradient_img.png',
    },
    {
      nome: 'Gradient generator',
      linkGitHub: 'https://github.com/Marcelo1080p/gerador-de-gradient',
      tecnologias: ['ReactJs'],
      imgs: '././gradient_img.png',
    },
    {
      nome: 'Gradient generator',
      linkGitHub: 'https://github.com/Marcelo1080p/gerador-de-gradient',
      tecnologias: ['ReactJs'],
      imgs: '././gradient_img.png',
    }
  ]



  return (
    <div className="App">
      <Header>
        <ul>
          <a href="#home">Home</a>
          <a href="#project">Project</a>
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
          {projetos.map((projeto) => (
            <Cards>
              <img className="imgProject" src={projeto.imgs}/>
              <h2>{projeto.nome}</h2>
              <p className="tecs">
                tecnologias usadas: {projeto.tecnologias.map((tec) => (
                  <BtnTecs>{tec}</BtnTecs>
                ))}
              </p>
            </Cards>
            
          ))}
        </ContainerProjets>
      </SectionProject>
    </div>
  );
}

export default App;
