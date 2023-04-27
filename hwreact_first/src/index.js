import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Products() {
  return (
    <table>
      <caption>Знаки зодіаку</caption>
      <tr>
        <th>Назва</th>
        <th>Дата</th>
      </tr>
      <tbody>
        <tr>
          <td>Овен</td>
          <td>21 березня – 19 квітня</td>
        </tr>
        <tr>
          <td>Телець</td>
          <td>20 квітня – 20 травня</td>
        </tr>
        <tr>
          <td>Близнюки</td>
          <td>21 травня – 21 червня</td>
        </tr>
        <tr>
          <td>Рак</td>
          <td>22 червня – 22 липня</td>
        </tr>
        <tr>
          <td>Лев</td>
          <td>23 липня – 22 серпня</td>
        </tr>
        <tr>
          <td>Діва</td>
          <td>23 серпня – 22 вересня</td>
        </tr>
        <tr>
          <td>Терези</td>
          <td>23 вересня – 22 жовтня</td>
        </tr>
        <tr>
          <td>Скорпіон</td>
          <td>23 жовтня – 21 листопада</td>
        </tr>
        <tr>
          <td>Стрілець</td>
          <td>22 листопада – 21 грудня</td>
        </tr>
        <tr>
          <td>Козоріг</td>
          <td>22 грудня – 19 січня</td>
        </tr>
        <tr>
          <td>Водолій</td>
          <td>20 січня – 18 лютого</td>
        </tr>
        <tr>
          <td>Риби</td>
          <td>19 лютого – 20 березня</td>
        </tr>
      </tbody>
    </table>
  );
}

ReactDOM.render(<Products></Products>, document.querySelector("#one"));
