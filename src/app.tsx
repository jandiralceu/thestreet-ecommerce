import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/store";
import { AnimatedRoutes } from "./routes";


function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(checkUserSession());
  }, [dispath]);

  return (
    <Suspense fallback={<></>}>
      <AnimatedRoutes />
    </Suspense>
  );
}

export default App;
