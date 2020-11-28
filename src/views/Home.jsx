import React, { useState } from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import Sidebar from "../components/Body/SideBar/SideBar";
import items from '../data'

const allCategories = [...new Set(items.map((item) => item))];

const Home = () => {
  const [categories, setCategories] = useState(allCategories);
  return (
    <div>
      <Navbar />
      <Sidebar categories={categories} />
    </div>
  );
};

export default Home;
