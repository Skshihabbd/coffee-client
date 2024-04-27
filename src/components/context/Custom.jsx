import { useContext } from "react";
import { contextProvider } from "./AuthProvider";

const Custom = () => {
const provider=useContext(contextProvider)

    return provider;
};

export default Custom;