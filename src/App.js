import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import KeepSmallestStates from "./components/KeepSmallestStates";
import ArticleView from "./components/ArticleView";
import ContainerModal from "./components/ContainerModal";
import ListWithMore from "./components/ListWithMore";
import ToggleButtonExample from "./components/ToggleButtonExample";
import KeyboardEvent from "./components/KeyboardEvent";
import FormWithHooks from "./components/FormWithHooks";

const routes = [
  ["KeepSmallestStates", KeepSmallestStates],
  ["ArticleView", ArticleView],
  ["ContainerModal", ContainerModal],
  ["ListWithMore", ListWithMore],
  ["ToggleButtonExample", ToggleButtonExample],
  ["KeyboardEvent", KeyboardEvent],
  ["FormWithHooks", FormWithHooks]
];
const Empty = () => "";
export default function App() {
  return (
    <Router>
      <div className="app">
        <Empty />
        <ul className="sider">
          {routes.map(([label]) => (
            <li key={label}>
              <Link to={`/${label.replace(" ", "/")}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div id="pageContainer" className="page-container">
          <Switch>
            {routes.map(([label, Component, additionalRoute = ""]) => (
              <Route
                key={label}
                path={`/${label.replace(" ", "/")}${additionalRoute}`}
              >
                <Component />
              </Route>
            ))}
            <Route path="/" exact>
              <h1>Welcome!</h1>
            </Route>
            <Route path="*">Page not found.</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
