/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};