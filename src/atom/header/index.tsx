import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Image
          src="/HatchfulExport-All/logo.svg"
          width={130}
          height={130}
          alt="ポケモン図鑑サイトのロゴ"
        />
        <Link href="/" className={styles.link}>
          <p>ポケモン一覧</p>
        </Link>
      </div>
    </>
  )
}

export default Header
