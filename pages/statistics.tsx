import type { NextPage } from "next";
import { withAuth } from "@auth/middlewares/with-auth";
import { useEffect, useState } from "react";
import { Statistic } from "@statistics/domain";

export const getServerSideProps = withAuth();

const Statistics: NextPage = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  useEffect(() => {
    let importedCsv;

    try {
      importedCsv = JSON.parse(localStorage.getItem("importedCsv") ?? "[]");
    } catch (error) {
      importedCsv = [];
    }

    setStatistics(importedCsv.statistics);
  }, []);

  return (
    <div>
      <h1>Estátisticas</h1>
      <figure>
        <table>
          <caption></caption>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Total</th>
              <th scope="col">Compra</th>
              <th scope="col">Monstros por nível</th>
              <th scope="col">Pontos por caça</th>
            </tr>
          </thead>
          <tbody>
            {statistics.length > 0 &&
              statistics.map((statistic) => (
                <tr key={statistic.name}>
                  <td>{statistic.name}</td>
                  <td>{statistic.total}</td>
                  <td>{statistic.purchase}</td>
                  <td>{Object.values(statistic.huntedMonsters).join("/")}</td>
                  <td>{statistic.pointsPerHunt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </figure>
    </div>
  );
};

export default Statistics;
