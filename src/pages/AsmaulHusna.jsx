import { useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";

function AsmaulHusna() {
  const loaderData = useLoaderData();
  // console.log(loaderData);

  const [displayedPosts, setDisplayedPosts] = useState(loaderData.data || []);
  const [totalPosts, setTotalPosts] = useState(loaderData.data?.length || 0);

  // membuat function onSearchChange yang menerima value
  const onSearchChange = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = (loaderData.data || []).filter(
      (item) =>
        item.latin.toLowerCase().includes(lowercasedValue) ||
        item.indo.toLowerCase().includes(lowercasedValue),
    );
    setDisplayedPosts(filtered);
    setTotalPosts(filtered.length);
  };

  return (
    <>
      {/* semua */}
      <h2>Semua Asmaul Husna</h2>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {displayedPosts.map((item, index) => (
        <div key={index}>
          <ul>
            <li> {item.arab}</li>
            <li> {item.indo}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default AsmaulHusna;
