import { Box} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
import Navbar from "./Components/Navbar"
import { useColorModeValue } from "./Components/ui/color-mode"
function App() {


  return (
    <>
      <Box  >
        {<Navbar/>}
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create" element={<CreatePage/>} />
          </Routes>
      </Box>
    </>
  )
}

export default App
