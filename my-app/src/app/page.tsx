'use client';
import Navbar from "@/navbar";
import { Provider } from 'react-redux';
import { store } from "../store";
import Footer from "../footer";
import LayoutHeaderandFooter from "@/layoutheaderandfooter";
 // Adjust the path as needed

export default function Home() {
  return (
    <Provider store={store}>
      <LayoutHeaderandFooter>
        <Navbar />
     
      </LayoutHeaderandFooter>
    </Provider>
  );
}
