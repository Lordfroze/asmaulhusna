export const AsmaulHusna = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [totalPosts, setTotalPosts] = useState(0);

    return fetch("https://api.myquran.com/v2/husna/semua").then((response) => response.json())
        .then((json) => {
            // Pastikan json.data ada dan merupakan array sebelum di-set
            if (json && Array.isArray(json.data)) {
                setAllPosts(json.data);
                setDisplayedPosts(json.data);
                setTotalPosts(json.data.length);
            }
        });
}