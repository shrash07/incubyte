import Heading from "./components/heading";
import Solver from "./components/solver";

function App() {
  return (
    <div
      className={`bg-black text-white flex flex-col gap-5 w-full h-[100vh] justify-center items-center`}
    >
      <Heading title={"Incubyte Assignment"} />
      <Solver />
    </div>
  );
}

export default App;
