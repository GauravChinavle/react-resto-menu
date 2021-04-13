import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';
import Hero from './Hero';




const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
    <Hero/>
    <main>
      <section className="menu section" style={{paddingTop:'5px'}}>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
    </>
  );
}

export default App;
