import { Charm, Kanit, Prompt } from "next/font/google";

export const charm = Charm({
  subsets: ["thai"],
  display: "swap",
  weight: ["400", "700"],
});

export const kanit = Kanit({
  subsets: ["thai", "latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const prompt = Prompt({
  subsets: ["thai", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
