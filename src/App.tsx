import { Flex } from "@chakra-ui/react";
import "./App";
import { AppRoutes } from "./routes";
import "./styles.css";

function App() {
  return (
    <Flex flexDirection="column" width="80%"  marginX="auto" >
      <AppRoutes />
    </Flex>
  );
}

export default App;
