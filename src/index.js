import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    // name: "Focaccia",
    // ingredients: "Bread with italian olive oil and rosemary",
    name: "فوکاچا",
    ingredients: "نان  فوکاچا با روغن زیتون ایتالیایی و رزماری",
    price: 160,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    // name: "Pizza Margherita",
    // ingredients: "Tomato and mozarella",
    name: "پیتزا مارگاریتا",
    ingredients: "گوجه و پنیر موزارلا",
    price: 210,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    // name: "Pizzas Spinaci"
    // ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    name: "پیتزا اسفناج",
    ingredients: "گوجه، پنیر موزارلا، اسفناج و پنیر ریکوتا",
    price: 212,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    // name: "Pizzas Funghi",
    // ingredients: "Tomato, mozarella, mushrooms, and onion",
    name: "پیتزا قارچ",
    ingredients: "گوجه، پنیر موزارلا، قارچ و پیاز",
    price: 212,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    // name: "Pizza Salamino",
    // ingredients: "Tomato, mozarella, and pepperoni",
    name: "پیتزا پپرونی",
    ingredients: "گوجه، پنیر موزارلا و پپرونی",
    price: 215,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    // name: "Pizza Prosciutto",
    // ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    name: "پیتزا پروشوتو",
    ingredients: "گوجه، پنیر موزارلا، ژامبون، آراگولا و پنیر بوراتا",
    price: 218,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      {/* <h1 style={style}>Fast React Pizza Co.</h1> */}
      <h1 style={style}>پیتزا ایتالیایی</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      {/* <h2>Our menu</h2> */}
      <h2>منوی رستوران</h2>

      {numPizzas > 0 ? (
        <>
          {/* { <p>Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.</p>  */}
          <p>پیتزاهای تنوری و اصیل ایتالیایی با طعمی بی‌نظیر</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        // <p>We're still working on our menu. Please come back later :)</p>
        <p>هنوز در حال تهیه‌ی منو هستیم. لطفا دوباره به ما سر بزنید</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Yomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  // else alert("Sorry we're Closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        // <p>
        //   We're happy to welcome you between {openHour}:00 and {closeHour}.
        // </p>
        <p>
          خوشحال می‌شیم از ساعت {openHour}:00 تا {closeHour} میزبان شما باشیم
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we're currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        ساعت کاری ما از {openHour}:00 تا {closeHour}:00 هست.
      </p>
      <button className="btn">ثبت</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
