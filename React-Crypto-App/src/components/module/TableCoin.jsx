// import LoaderPage from "./LoaderPage";
import styles from "./TableCoin.module.css";
import TableRow from "./TableRow";

const TableCoin = ({ coines, isLoading, setChart }) => {
  return (
    <div>
      <div className={styles.container}>
        {isLoading ? (
          // <LoaderPage />
          <h1>loading</h1>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coines.map((coin) => (
                <TableRow coin={coin} key={coin.id} setChart={setChart} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableCoin;
