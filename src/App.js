
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
        <Navbar title="Shopie" home="Docx"/>
        <div className="container ">
        <Textarea heading="Enter your Text "/>

        </div>
    </>
  );
}

export default App;
