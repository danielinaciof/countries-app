
import { CountriesTable } from './components/CountriesTable';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './styles/global.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <CountriesTable />
      </main>

    </>


  );
}

export default App;
