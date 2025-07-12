import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch("http://localhost:9000/cities");
                const data = await res.json();
                setCities(data);
            } catch (error) {
                alert("There is an error loading data");
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route path="app" element={<AppLayout />}>
                    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
                    <Route path="cities/:id" element={<City />} />
                    <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
