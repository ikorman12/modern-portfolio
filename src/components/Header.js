import NavBar from "./NavBar";
import { Jumbotron, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Jumbotron>
        <h1 eventKey='1' href='#/home'>Igor Korman</h1>
        <nav>
          <NavBar />
        </nav>
      </Jumbotron>
    </header>
  );
};

export default Header;
