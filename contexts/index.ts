import { Vulnerability } from "@/types/schema";
import { createContext } from "react";

export const VulnerabilityContext = createContext<Vulnerability | null>(null);
