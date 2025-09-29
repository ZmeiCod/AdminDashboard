import React from "react";
import { Chart, registerables } from "chart.js"; // Импортируйте Chart из chart.js

Chart.register(...registerables);

export default function Graph() {
  React.useEffect(() => {
    // Инициализация графика после монтирования компонента
    const ctx = document.getElementById("bar-chart-grouped").getContext("2d");
    new Chart(document.getElementById("bar-chart-grouped"), {
      type: "bar",
      data: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
          {
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 2478],
          },
          {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Population growth (millions)",
        },
      },
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="mb-3">
        <h3 className="fw-bold fs-4 my-3">График доходности</h3>
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div className="card-shadow">
              <div className="card border-0">
                <div className="card-body py-4">
                  <h6 className="mb-2 fw-bold">Общий доход</h6>
                  <p className="mb-2 fw-bold">418,672₽</p>
                  <div className="mb-0">
                    <span className="badge text-success me-2">+9.0%</span>
                    <span className=" fw-bold">С прошлого месяца</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 ">
            <div className="card-shadow">
              <div className="card border-0">
                <div className="card-body py-4">
                  <h6 className="mb-2 fw-bold">Ценность акций</h6>
                  <p className="mb-2 fw-bold">112,400₽</p>
                  <div className="mb-0">
                    <span className="badge text-success me-2">+17.3%</span>
                    <span className=" fw-bold">С прошлого месяца</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 ">
            <div className="card-shadow">
              <div className="card border-0">
                <div className="card-body py-4">
                  <h6 className="mb-2 fw-bold">Ориентируемый доход</h6>
                  <p className="mb-2 fw-bold">2,978,116₽</p>
                  <div className="mb-0">
                    <span className="badge text-success me-2">+43.0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="row">
          <div className="col-12 col-md-7">
          <h3 className="fw-bold fs-4 my-3">История транзакций</h3>
            <table className="table table-striped">
              <thead>
                <tr className="highlight">
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Покупка акций ВТБ</td>
                  <td>98,000₽</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Инвестиционный доход со вклада</td>
                  <td>17,700 ₽</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Кэшбек с покупок</td>
                  <td>7,200 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-5">
 
            <h3 className="fw-bold fs-4 my-3">Таблица роста</h3>
            <canvas id="bar-chart-grouped" width="800" height="450"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
