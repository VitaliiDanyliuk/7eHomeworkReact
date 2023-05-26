import React, { Component } from "react";
import Todo from "../Todo";
import TodoForm from "../TodoForm";
import Btn from "../btn";

import "./app.css";

export class App extends Component {
  state = {
    done: false,
    showInput: "show-input hide",
    id: 1,
    flag: true,
    idProduct: "",
    inputInfo: "",
    products: [],
  };
  
// Метод виводу першого інпута з кнопкою
  showComponent = () => {
    this.setState({
      done: !this.state.done
    });
  };

  // Метод зберігання змін
  saveСhanges = () => {
    if (this.state.inputInfo !== "") {
      if (this.state.flag === true) {
        this.setState((state) => {
          state.products.push({
            name: state.inputInfo,
            classCrossed: "product",
            edit: this.editProduct,
            done: this.doneProduct,
            remove: this.removeProduct,
          });
          return {
            ...state,
            showInput: "show-input  hide",
            inputInfo: "",
            id: state.products.length + 1,
          };
        });
      } else if (this.state.flag === false) {
        this.setState((state) => {
          state.products[state.idProduct].classCrossed = "product";
          state.products[state.idProduct].name = this.state.inputInfo;
          return {
            ...state,
            showInput: "show-input  hide",
            idProduct: "",
            inputInfo: "",
            flag: true,
          };
        });
      }
    } else {
      alert("Ви не вказали назву покупки");
      return;
    }
  };

  // Метод додавання продукту
  inputChange = (i) => {
    this.setState((state) => {
      return {
        ...state,
        inputInfo: i,
      };
    });
  };

  // Метод редагування продукту
  editProduct = (i) => {
    this.setState((state) => {
          return {
        ...state,
        idProduct: i,
        id: "",
        inputInfo: state.products[i].name,
        showInput: "show-input",
        flag: false,
      };
    });
  };

  // Метод продукт куплено
  doneProduct = (id) => {
    this.setState((state) => {
      state.products[id].classCrossed =
        state.products[id].classCrossed + " done";
      return {
        ...state,
      };
    });
  };

  // Метод видалення продукту
  removeProduct = (id) => {
    this.setState((state) => {
      state.products.splice(id, 1);
      return {
        ...state,
      };
    });
  };

  render() {
    const { done} = this.state
    return (
      <div className="app">
        <Btn
          value="додати ➕"
          className="btn-add"
          eventFN={this.showComponent}
        />
        { done && <div className="form">
           <TodoForm
            input={this.inputChange}
            value={this.state.inputInfo}
          />
          <Btn
            className="btn-save"
            value="зберегти 📀"
            eventFN={this.saveСhanges}
          />
        </div>}
        <div className="todo-item">
          <Todo arr={this.state.products} />
        </div>
      </div>
    );
  }
}
