import Image from 'next/image'
import HeaderPic from '../public/headerpic2.png'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main>
      <Header />

      <section className="flex flex-col items-center p-10">
        <h1 className="text-4xl font-bold mb-5">About</h1>
        <p>
          I'm currently a freshman Computer Science student at Georgia State
          University. I want to become a software engineer, mostly focused on
          front end development and UI/UX design. This is the hub for me to
          showcase all the new projects I'm building and the new technologies
          I'm learning. Check them out below!
        </p>
        <div>
          <a href="">Developer Blog</a>
          <a href="/experience">Experience</a>
          <a href="">Projects</a>
          <a href="">Technologies</a>
          <a href="">Contact</a>
        </div>
      </section>
      <section>
        <h1>Featured</h1>
      </section>
    </main>
  )
}

function Header() {
  return (
    <div
      className={`${styles.container} bg-black text-white flex flex-col items-center gap-10 pt-10 pog-grid`}
    >
      <div className="p-3 bg-black">
        <h1 className="text-4xl font-bold">Dio Dziban</h1>
        CS Student @ GSU
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
