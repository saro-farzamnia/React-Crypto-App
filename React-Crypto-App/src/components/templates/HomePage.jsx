import { useEffect, useState } from "react";
// import Search from "../module/Search";
import TableCoin from "../module/TableCoin";
// import Pagenation from "../module/Pagenation";
// import Chart from "../module/Chart";
import { getApi } from "../services/cryptoApi";

const HomePage = () => {
  const [coines, setCoines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch(getApi());
      const json = await res.json();
      setCoines(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Search currency={currency} setCurrency={setCurrency} /> */}
      <TableCoin coines={coines} isLoading={isLoading} setChart={setChart} />
      {/* <Pagenation page={page} setPage={setPage} /> */}
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
};

export default HomePage;
