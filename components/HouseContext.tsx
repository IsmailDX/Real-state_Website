import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { housesData } from "../constants/data";

// Define the type for your context
type HouseContextType = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  countries: string[];
  setCountries: Dispatch<SetStateAction<string[]>>;
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
  properties: string[];
  setProperties: Dispatch<SetStateAction<string[]>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  houses: {};
  loading: boolean;
};

const HouseContext = createContext<HouseContextType | undefined>(undefined);

const HouseContextProvider = ({ children }: { children: ReactNode }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
