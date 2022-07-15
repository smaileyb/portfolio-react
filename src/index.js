// Fiz algumas alterações no projeto original - alterando o ReactDOM.render por indicação da própria biblioteca
// import ReactDOM from 'react-dom'
// ReactDOM.render(<App />, document.querySelector("#root"))
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.querySelector("#root")
const root = createRoot(container)

root.render(<App />)
