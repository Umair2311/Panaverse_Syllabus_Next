"use client";
import styles from './page.module.css'
import Navbar from '@/Components/navbar'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}
