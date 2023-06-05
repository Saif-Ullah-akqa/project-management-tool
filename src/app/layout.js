"use client";
import "./globals.css";
import styles from "./page.module.css";
import { IdProvider } from "../Context/IdContext";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import { Box } from "@mui/material";

export const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{boxShadow: '0 2px 10px rgba(0,0,0,.25)',
    position: 'relative'}}>
          <Header />
        </header>
        <IdProvider>
          <main className={styles.main}>
            <LeftNavigation  />
            <Box sx={{ flex: 1 }}>{children}</Box>
          </main>
        </IdProvider>
      </body>
    </html>
  );
}
