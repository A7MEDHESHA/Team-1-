import React, { useState, useEffect } from "react";
import "../Newarrivals/Newarrivals.css";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "The Archive Tote",
    price: 450.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXxuC5J6cuYFsKXfGT_X8Wg75z5aSPqpO-0FYljklI8ZLWM5pvQbLocAJNbQdgMKlXP8BTngePizIupf9d2Xl606bDBh3XLG7t6er_axMWzIeoSL-66g0KVZcbhJEff8YT2VO2iliN5GiNhaelLJrBQi570-glOUgKtDnuvnNjKr9cwfDZ2MwFyVJM1YjwqYrKSCbaMn1aFyuQdaFVj162qSaL8zE7Ql6EqzXKWqTF9DgkzPc5hk1aHcrroLPUnOyan3WYo4NoEeYD",
    alt: "Archive Tote",
    large: true,
  },
  {
    id: 2,
    name: "Silk Drape Blouse",
    price: 185.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvkWvmkj53xZ1563hC4EV5GpXCw1htKkFmU3fAUrRMAmrMPSGVzmgvre-ONwsfWw84YowLQ5HjxYynZQnOyIEBChkwMTd-x6WaHza_4FMZvc3SGxlbmmxOzbnoQkzPbSa89ZJ2EoUDg2OSQbQOWe9-XUulUR17poCSxrpQcDzjosUTEXLClhMJL2l7X_cSgHi1tP-B79Hn8PRUtX3Kl61wGyAkuDAMwE0_7ctjackwNIyNB8gGWrdU8JfQWUm9j5a1S6oZM9p2yN27",
    alt: "Silk Drape Blouse",
    large: false,
  },
  {
    id: 3,
    name: "Sculptural Frames",
    price: 210.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFS4RkSbIzomD1vUaVC6CzJv8fJI2ojdWci_fePeo4inPl73mBrhfEby8rho22bmQHpJoTLJqIR4aE3PQD89PNapDQNor2aaC72_5lJOaHN7ruC1_y7RCJxsX4zFtLW9q8EVOc-JMLTnenvPERA8SISm2HK-mGFB61DZIkdZ6Vi3MeaUoZUzAgqoQ3T8TF5op7FKcVBrS8wsfblGq0fOgS3yXNSIEMIrQ9AJinrWiIFMxmTGOFSKRKvFVrnQwb1xM28RNvkcvaNl5B",
    alt: "Sculptural Frames",
    large: false,
  },
  {
    id: 4,
    name: "Tulum Ceramic Vase",
    price: 95.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRNOmeJvZwUWm7wlzTeVletXP6USrf37xMZGR3u4SXtFNjhyrPvcAx5YUi8woskE17bYJ3JgqcUnSvhVeRWzjYSeCQUd1pGJ8PmfE4j7IyylRBrlUW_ViBoZSKxMcCLwDmpZctGn4MYCHRX3R1hs7p4M6R3dx6CHiQCbZxXOCWeVqJGq_MGEUdPVPphF2IFtIpmpGZOkas4kfBgLWl_xnKJxejLzdPFSSaMociiJND_kLyr_-AbTzsx6WpUWF7zWybnxCcGaG3tNd9",
    alt: "Tulum Ceramic Vase",
    large: false,
  },
  {
    id: 5,
    name: "Nexus City Sneakers",
    price: 290.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWCSxQE11pmxdX5plO1dL8Z_eYhxvPTHpYBE0TnqarF5BdtWLFeiQGBUcuYzXOwC_fUvQAPwssxfnn4ZGeT5ahxesM1M48EEs3neBNxisGDKPVaWnj61vvfuwxwpJgGfkBZpcUVBXK6pz7gZh2Q4jzltR2G7yWO82U7iwXvezXoz9rlAhV2tm71iJ58qtbN-1kZYv2fq-TztdJ1F-ly0qHbM_dZ-k4cS6_FbTtd7iEEiE8IxH1IZrABy8jk5u_vPgYtsl-N9Go3VIx",
    alt: "Nexus City Sneakers",
    large: false,
  },
];

export default function NewArrivals() {
  const [sortOption, setSortOption] = useState("Recommended");
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  useEffect(() => {
    const sorted = [...INITIAL_PRODUCTS];

    if (sortOption === "Price Low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price High") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  }, [sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <p>SPRING / SUMMER 2024</p>
          <h1>New Arrivals</h1>
          <p>
            Discover our latest collection of curated essentials designed for
            the modern lifestyle.
          </p>
        </div>
      </section>

      <section className="filters">
        <button className="filter-btn">Filter</button>

        <div className="categories">
          <button className="active">All</button>
          <button id="b1">Apparel</button>
          <button id="b1">Accessories</button>
          <button id="b1">Objects</button>
        </div>

        <div className="sort">
          <span>Sort by:</span>

          <select value={sortOption} onChange={handleSortChange}>
            <option>Recommended</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>
      </section>

      <section className="products">
        {products.map((product) =>
          product.large ? (
            <div className="product-large" key={product.id}>
              <img src={product.img} alt={product.alt} />

              <div className="info">
                <h3>{product.name}</h3>

                <div className="but">
                  <p>${product.price.toFixed(2)}</p>
                  <button id="b2">Quick View</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="product" key={product.id}>
              <img src={product.img} alt={product.alt} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          )
        )}
      </section>

      <section className="load-more">
        <p>Showing 5 of 32 products</p>
        <button>LOAD MORE</button>
      </section>

      <section className="newsletter">
        <h2>Join the Collective</h2>

        <p>
          Receive early access to new arrivals, curated content and exclusive
          invitations.
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </section>
    </>
  );
}