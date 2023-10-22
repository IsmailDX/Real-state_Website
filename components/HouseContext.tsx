import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { housesData } from "../constants/data";
import { StaticImageData } from "next/image";

type House = {
  id: number;
  name: string;
  description: string;
  year: string;
  image: StaticImageData;
  type: string;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  price: string;
};

type HouseContextType = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  countries: string[];
  setCountries: Dispatch<SetStateAction<string[]>>;
  houses: House[];
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
  properties: string[];
  setProperties: Dispatch<SetStateAction<string[]>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  handleClick: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // Remove duplicates and include the default "Location (any)" option
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        houses,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        handleClick,
        loading,
        setLoading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
