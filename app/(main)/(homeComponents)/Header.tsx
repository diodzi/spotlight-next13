import Image from 'next/image'
import HeaderPic from '../../../public/headerpic2.png'
import styles from '../styles.module.css'

export default function Header() {
  return (
    <div
      className={`${styles.container} stack gap-10 pt-10 w-screen bg-black text-white md:flex-row md:justify-between md:px-16`}
    >
      <div className="p-3 bg-black">
        <h1 className="text-4xl font-bold">Dio Dziban</h1>
        <span className="text-based-colour">CS Student @ GSU</span>
      </div>
      <div className="h-full flex items-end">
        <span className="relative w-96 h-96">
          <Image
            src={HeaderPic}
            alt="picture of dio"
            priority
            fill
            style={{ objectFit: 'contain' }}
          ></Image>
        </span>
      </div>
    </div>
  )
}
