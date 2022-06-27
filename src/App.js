import './App.css';
import Main from './components/main';
import Warning from './components/warning';
import Head from './components/head';
import Banner from './components/banner';
import Instagram from './components/Instagram';
import TellaFriend from './components/tellafriend';
import { createContext, useState } from 'react';
import Foot from './components/foot';

export const MenuContext = createContext();

function App() {
  const [menu, setMenu] = useState([
    {
      titulo: 'Occasions', id: 1, itemMenu: [
        { itemMenu: 'Occasions', href: '#action/1.1', id: 1 },
        { itemMenu: 'Working From Home', href: '#action/1.2', id: 2 },
        { itemMenu: 'Snack Time', href: '#action/1.3', id: 3 },
        { itemMenu: 'Breakfast', href: '#action/1.4', id: 4 },
        { itemMenu: 'Vegan Life', href: '#action/1.5', id: 5 },
        { itemMenu: 'Baking', href: '#action/1.6', id: 6 },
        { itemMenu: 'Gifts & Bundles', href: '#action/1.7', id: 7 },
        { itemMenu: 'All Products', href: '#action/1.8', id: 8 }
      ]},
    {
      titulo: 'All Categories', id: 2, itemMenu: [
        { itemMenu: 'Baking', href: '#action/2.1', id: 1 },
        { itemMenu: 'Breakfast', href: '#action/2.2', id: 2 },
        { itemMenu: 'Condiments', href: '#action/2.3', id: 3 },
        { itemMenu: 'Drinks', href: '#action/2.4', id: 4 },
        { itemMenu: 'Heat Things Up', href: '#action/2.5', id: 5 },
        { itemMenu: 'Meal Solutions', href: '#action/2.6', id: 6 },
        { itemMenu: 'Pantry Staples', href: '#action/2.7', id: 7 },
        { itemMenu: 'Simmer Sauces', href: '#action/2.8', id: 8 },
        { itemMenu: 'Snacks & Treats', href: '#action/2.9', id: 9 },
        { itemMenu: 'Sweet Tooth', href: '#action/2.10', id: 10 },
        { itemMenu: 'Wine & Cheese', href: '#action/2.11', id: 11 },
        { itemMenu: 'All Products', href: '#action/2.12', id: 12 }
      ]},
    {
      titulo: 'Gifts & Bundles', id: 3, itemMenu: [
        { itemMenu: 'Sweet Tooth Special', href: '#action/3.1', id: 1 },
        { itemMenu: 'Discover Local', href: '#action/3.2', id: 2 },
        { itemMenu: 'Baking Box', href: '#action/3.3', id: 3 },
        { itemMenu: 'Spicy Heat Lover', href: '#action/3.4', id: 4 },
        { itemMenu: 'Snacking Sensations', href: '#action/3.5', id: 5 }
      ]},
    { 
      titulo: 'Our Brands', id: 4, itemMenu: []      
    },
    { 
      titulo: 'About Us', id: 5 , itemMenu: []      
    }
  ])
  return (
    <div>
      <MenuContext.Provider value={menu}>
        <Main />
        <Warning />
        <Head />
        <Banner />
        <Instagram />
        <TellaFriend />
        <Foot />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
