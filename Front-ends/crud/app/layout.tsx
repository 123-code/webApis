"use client";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../ApolloClient';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloProvider client={client}>
<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ApolloProvider>
    
  )
}
 