import { Teko, Saira_Condensed, Oswald } from "next/font/google";

// Shared font config used across the site.
// Display headlines: Teko (tall condensed). Body & labels: Saira Condensed.
// Nav / ticker chrome: Oswald.
export const teko = Teko({ weight: ["500", "600", "700"], subsets: ["latin"] });
export const saira = Saira_Condensed({ weight: ["500", "600", "700", "900"], subsets: ["latin"] });
export const oswald = Oswald({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });
