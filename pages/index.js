import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={ db.bg }>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Wolverine Imortal</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatibus?</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatibus?</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl='https://github.com/melquiadesmario' />
      </QuizContainer>
    </QuizBackground>
  );
}
