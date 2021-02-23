import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import NaviBar from "./Components/Navibar";
import NewsItem from "./Components/NewsItem";
import LoginForm from "./Components/LoginForm";
import { news as defaultNews } from "./data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewsThread } from "./Components/NewsThread";

function App() {
  const [news, setNews] = useState(defaultNews);

  return (
    <Router>
      <div className="App">
        <NaviBar></NaviBar>
        <Container>
          <Row>
            <Col xs={12}>
              <Switch>
                <Route
                  exact
                  path="/:category"
                  render={({ match }) => (
                    <NewsThread
                      category={match.params.category}
                      news={news}
                      setNews={setNews}
                    />
                  )}
                ></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
