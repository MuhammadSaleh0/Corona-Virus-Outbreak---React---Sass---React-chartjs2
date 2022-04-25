import { useCallback, useEffect, useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import Statistics from './components/Statistics';
import FlattenCurve from './components/FlattenCurve';
import DoughnutChart from './components/Charts/Doughnut';
import NavButtoms from './components/NavButtoms';
import Countries from './components/Countries';
import UsaStates from './components/US-Casses';
import PieCharts from './components/Charts/pieCharts';
import LineCharts from './components/Charts/LineCharts';
import InputSearch from './components/Search/InputSearch';
import FilterdCountry from './components/Search/FilterdCountry';

function App() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(
          'https://disease.sh/v3/covid-19/countries'
        );
        if (!response.ok) {
          throw new Error('failed to Load Data!');
        }
        const dataFetched = await response.json();
        setData(dataFetched);
        setFilteredData(dataFetched);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const [showWorld, setShowWorld] = useState(true);
  const [showUS, setShowUS] = useState(false);
  const [showPie, setshowPie] = useState(false);

  const ShowWorldHnadler = useCallback(() => {
    setShowWorld(true);
    setShowUS(false);
    setshowPie(false);
  }, []);
  const ShowUSHnadler = useCallback(() => {
    setShowUS(true);
    setShowWorld(false);
    setshowPie(false);
  }, []);
  const ShowPieGraphHnadler = useCallback(() => {
    setshowPie(true);
    setShowWorld(false);
    setShowUS(false);
  }, []);
  const ShowLineGraphHnadler = useCallback(() => {
    setShowWorld(false);
    setShowUS(false);
    setshowPie(false);
  }, []);

  const [isFiltered, setFiltered] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const searchTextHandler = useCallback(
    (text) => {
      setFilteredData((prevstate) =>
        prevstate.filter((e) =>
          e.country.toUpperCase().startsWith(text.toUpperCase())
        )
      );
      setFiltered(true);
      if (text.length === 0) {
        setFiltered(false);
        setFilteredData(data);
      }
    },
    [data]
  );

  return (
    <div className="App">
      <MainHeader />
      <Statistics />
      <FlattenCurve />
      <DoughnutChart />
      <InputSearch searchText={searchTextHandler} />
      {isFiltered && <FilterdCountry data={filteredData} />}
      <NavButtoms
        onShowWorld={ShowWorldHnadler}
        onShowUS={ShowUSHnadler}
        onShowPieGraph={ShowPieGraphHnadler}
        onShowLineGraph={ShowLineGraphHnadler}
      />
      {showWorld && <Countries countriesData={data} />}
      {showUS && <UsaStates />}
      {showPie && <PieCharts data={data} />}
      {!showWorld && !showUS && !showPie && <LineCharts data={data} />}
      <img
        src={
          'https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg'
        }
        alt="dcs"
      ></img>
    </div>
  );
}

export default App;
