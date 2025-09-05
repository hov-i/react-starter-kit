import { BrowserRouter, Route, Routes } from "react-router-dom";
import QueryClientProvider from "@shared/providers/QueryClientProvider";
function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
