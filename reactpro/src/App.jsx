import FetchAPI from "./FetchApi";
import FetchApi from "./FetchApi";
import Hide from "./Practice/Hide";
import Practice from "./Practice/Pract1";
import Search from "./Practice/Search";
import Movebt from "./Practice/moveble";
import Todo from "./Todo/Todo";
import Users from "./UseState";
import UseEffectPrac from "./Useeffect/UseeffectPrac";

import Caculator from "./components/Calculator";

import Form from "./components/Form";

import MultInput from "./components/MultInput";
import PracForm from "./components/PracticeForm";
import SearchData from "./components/fetch";
import Fdata from "./components/fetch";
import { ErrorBoundary } from "react-error-boundery";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        fallback={<div>Something went wrong, please try again later.</div>}
      >
        <Suspense fallback={<div>Loading.....</div>}>
          <SearchData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
