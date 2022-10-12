import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./style.css";
import robotImage from "./imgg.png";
import { Button } from "react-bootstrap";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Hey Recruiter!',
      trigger: '1',
  }, {
      id: '1',
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [
          { value: 1, label: 'Schedule Interview' },
          { value: 2, label: 'View upcoming Interview' },

      ],
      end: true
  }
];

const theme = {
  background: 'rgba(0, 128, 128, 0.298)',
  headerBgColor: 'teal',
  headerFontSize: '20px',
  botBubbleColor: 'teal',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: 'rgba(0, 96, 128, 0.846)',
  userFontColor: 'white',
};

const config = {
  floating: true,
};

const Home = () => {
  useDocumentTitle("Interview Platform");
  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 entry">
          <h1>
           Welcome to <span>Interview Schduler</span>
          </h1>
          <h4>
          Schedule meetings in one click for free. Ridiculously easy,<br></br><span> free online meeting scheduler </span> for your inbox
          </h4>
          <Button className="btn btn-sm stylebutton">
            Take a tour
          </Button>
          <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>

        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 entryImg">
          <img
            className="title-image"
            id="robot"
            src={robotImage}
            alt="robot"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
