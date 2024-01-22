import { useEffect,useState } from "react";

const useDataFetching = (dataSource) => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(dataSource);
                const json = await data.json();
                setResults(json);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };
        fetchData();
    }, [dataSource]);

    return {
        loading,
        results,
        error
    }; 
}
export default useDataFetching;