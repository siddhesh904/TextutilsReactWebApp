import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "Siddheshwar" aboutText = "About Us Sid" Home = "HomeAgain"/>
      {/* get Defualt things */}
      <TextForm title = "Enter the Text Here:" />
    </>
  );
}


export default App;

