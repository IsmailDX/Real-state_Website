import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { housesData } from "../constants/data";

type House = {
  id: number;
  type: string;
  name: string;
  description: string;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  year: string;
  price: string;
};

type HouseContextType = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  countries: string[];
  setCountries: Dispatch<SetStateAction<string[]>>;
  houses: House[];
};

type HouseContextProviderProps = {
  children: ReactNode;
};

export const HouseContext = createContext<HouseContextType | undefined>(
  undefined
);

const HouseContextProvider = ({ children }: HouseContextProviderProps) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // Remove duplicates and include the default "Location (any)" option
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        houses,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
