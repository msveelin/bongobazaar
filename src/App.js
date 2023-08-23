import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap";
import Row from "react-bootstrap";
import Col from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateProduct from "./components/createProduct.component";
import EditProduct from "./components/editProduct.component";
import ProductList from "./components/productList.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/createProduct"}>E-COMMERCE</Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/createProduct"}>Add Product</Link>
                </Nav>
                <Nav>
                  <Link to={"/editProduct"}>Edit Product</Link>
                </Nav>
                <Nav>
                  <Link to={"/productList"}>Product List</Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    Component={(props) => <CreateProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/createProduct"
                    component={(props) => <CreateProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/editProduct"
                    component={(props) => <EditProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/productList"
                    component={(props) => <ProductList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
