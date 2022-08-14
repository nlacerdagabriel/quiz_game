import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { QuizPage } from "../pages/QuizPage"

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
      </Switch>
    </BrowserRouter>
  )
}