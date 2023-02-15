import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
