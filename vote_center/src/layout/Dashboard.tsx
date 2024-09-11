import React from "react"
import Footer from "./Footer.tsx"
import Nav from "./Nav.tsx"
import Header from "./Header.tsx"
import BreadCrumb from "./BreadCrumb.tsx"
import Content from "./Content.tsx"
import {Outlet, useNavigation} from "react-router-dom"
import VoterList from "../pages/voters/VoterList.tsx"

export default function Dashboard() {
    const navigation = useNavigation();
    console.log(navigation);
    if (navigation.state === "loading") return <Loading />;
  return (
    <div className="wrapper">
      <Header />

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          <Nav />
        </div>
      </aside>

      <div className="content-wrapper">
        <BreadCrumb />

        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
