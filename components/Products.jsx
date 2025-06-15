"use client";

import { useState } from "react";
import Portal from "./Portal";

export default function Products() {
  const [portalImage, setPortalImage] = useState(null);
  const stickerDescriptions = {
    CSS_HTML_Javascript:
      "A sticker that represents the trio of web development: CSS, HTML, and JavaScript. Perfect for developers who love the web.",
    Docker:
      "Platform for developing, shipping, and running applications in containers. Ideal for developers who want to streamline their workflow.",
    Firebase:
      "A comprehensive app development platform that provides backend services, real-time databases, and authentication. Great for developers looking to build scalable apps.",
    NextJS:
      "A React framework for building server-rendered applications. Perfect for developers who want to create fast and SEO-friendly web apps.",
    NodeJS:
      "A JavaScript runtime built on Chrome's V8 engine. Ideal for developers who want to build scalable network applications.",
    PostgreSQL:
      "An open-source relational database management system. Great for developers who need a powerful and reliable database solution.",
    ReactJS:
      "A JavaScript library for building user interfaces. Perfect for developers who want to create dynamic and interactive web applications.",
  };

  const stickers = Object.keys(stickerDescriptions);

  return (
    <>
      {portalImage && (
        <Portal
          handleClosePortal={() => {
            setPortalImage(null);
          }}
        >
          <div className="portal-content">
            <img
              className="img-display"
              src={`med_res/${portalImage}.jpeg`}
              alt={`${portalImage}-high-res`}
            />
          </div>
        </Portal>
      )}
      <div className="section-container">
        <div className="section-header">
          <h2>Shop Our Selection</h2>
          <p>
            Discover our range of products designed to give you the best
            experience. From high-quality stickers to beautifully crafted
            planners, we have something for everyone.
          </p>
        </div>
        <div className="planner-content">
          <div>
            <button
              onClick={() => {
                setPortalImage("planner");
              }}
              className="img-button"
            >
              <img src="low_res/planner.jpeg" alt="high-res-planner" />
            </button>
          </div>
          <div className="planner-info">
            <p className="text-large planner-header">
              Medieval Dragon And Knight Monthly Planner
            </p>
            <h3>
              <span>$</span>10.99
            </h3>
            <p className="text-large planner-header">
              A beautifully designed monthly planner featuring a medieval dragon
              and knight theme. Perfect for organizing your schedule with style.
            </p>
            <ul>
              <li>
                <strong>A masterpiece artwork</strong> created by developers for
                developers. Each sticker is designed to represent a key
                technology in the web development ecosystem.
              </li>
              <li>
                <strong>High-quality vinyl</strong> stickers that are durable
                and weather-resistant, perfect for laptops, water bottles, and
                more.
              </li>
            </ul>
            <div className="purchase-btns">
              <button>
                <i className="fa-solid fa-cart-plus"></i>Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="section-container">
        <div className="section-header">
          <h2>Or Collect Your Favorite Techs</h2>
          <p>
            choose from our exclusive collection of tech stickers that celebrate
            the technologies you love. Each sticker is a tribute to the tools
            and frameworks that power the web development world.
          </p>
        </div>
        <div className="sticker-container">
          {stickers.map((sticker, stickerIndex) => {
            return (
              <div key={stickerIndex} className="sticker-card">
                <button
                  onClick={() => {
                    setPortalImage(sticker);
                  }}
                  className="img-button"
                >
                  <img src={`low_res/${sticker}.jpeg`} alt={`${sticker}`} />
                </button>
                <div className="sticker-info">
                  <p className="text-medium">
                    {sticker.replaceAll("_", " ")} Sticker.png
                  </p>
                  <p>{stickerDescriptions[sticker]}</p>
                  <h4>
                    <span>$</span>4.99
                  </h4>
                  <button>
                    <i className="fa-solid fa-cart-plus"></i> Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
