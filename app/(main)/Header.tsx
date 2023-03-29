import Image from 'next/image'
import HeaderPic from '../../public/headerpic2.png'
import styles from './styles.module.css'

export default function Header() {
  return (
    <div
      className={`${styles.container} bg-black text-white flex flex-col items-center gap-10 pt-10 w-screen`}
    >
      <div className="p-3 bg-black">
        <h1 className="text-4xl font-bold">Dio Dziban</h1>
        <span className="text-based-colour">CS Student @ GSU</span>
      </div>
      <Image
        src={HeaderPic}
        alt="picture of dio"
        width={1000}
        height={1000}
        priority
      ></Image>
    </div>
  )
}
