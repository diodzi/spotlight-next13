import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <main className={inter.className}>
      <div className='text-3xl font-bold underline'>
        we react + tailwind now (slightly less DDD:)
      </div>
    </main>
  )
}
