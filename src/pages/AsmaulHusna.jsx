import { useState, useEffect } from "react";
import Search from "../components/Search";

function AsmaulHusna() {
  const [allPosts, setAllPosts] = useState([]); // state untuk menyimpan semua data asli
  const [displayedPosts, setDisplayedPosts] = useState([]); // state untuk data yang ditampilkan
  const [totalPosts, setTotalPosts] = useState(0); // membuat state totalPosts

  // membuat function onSearchChange yang menerima value
  const onSearchChange = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = allPosts.filter(
      (item) =>
        item.latin.toLowerCase().includes(lowercasedValue) ||
        item.indo.toLowerCase().includes(lowercasedValue),
    );
    setDisplayedPosts(filtered);
    setTotalPosts(filtered.length);
  };

  useEffect(() => {
    fetch("https://api.myquran.com/v2/husna/semua")
      .then((response) => response.json())
      .then((json) => {
        // Pastikan json.data ada dan merupakan array sebelum di-set
        if (json && Array.isArray(json.data)) {
          setAllPosts(json.data);
          setDisplayedPosts(json.data);
          setTotalPosts(json.data.length);
        }
      });
  }, []); // jalan sekali

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
