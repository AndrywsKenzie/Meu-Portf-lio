// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
const myMail = "andryws.gseixas@gmail.com"

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou um Desenvolvedor Full Stack sempre em busca de mais conhecimento,
              participei de diversos projetos resolvendo problemas de alto nível
              e desenvolvendo hard e soft skills continuamente.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos" title="Realizações">
                Projetos
              </Button>
              <Button
                as="a"
                href="#tecnologias"
                type="btLink"
                color="grey5"
                title="O que aprendi"
              >
                Tecnologias
              </Button>
              <Button as="a" href="#sobreMim" title="Sobre mim">
                Sobre Mim
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses e novos projetos, estou disposto a trocar
                algumas ideias por lá também ou através do email <a href="mailto:${emailAddress}" title="Contato email">profissional</a>.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>

          <StackSection>
            <HeaderContent id="sobreMim">
              <Text as="h1" type="heading1">
                Sobre Mim{" "}
                <div>
                  <hr />
                </div>
              </Text>
              <Text type="body1" color="grey6">
                <p style={{ color: "blue" }}>
                  Sou um amante da tecnologia na qual tenho estudado com todo
                  afinco nos últimos 15 meses em busca de aprendizado e
                  utilização no mercado web full stack.
                </p>
              </Text>
              <div>
                <hr />
              </div>
            </HeaderContent>
          </StackSection>
        </Container>
      </ProjectsArea>
    </main>
  );
};
