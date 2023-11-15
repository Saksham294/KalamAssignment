import Image from 'next/image'
import styles from './page.module.css'
import { Typography } from '@mui/material'
import LeftSection from './components/LeftSection/LeftSection'
import RightSection from './components/RightSection/RightSection'
import StickyPlayer from './components/StickyPlayer/StickyPlayer'
import {Montserrat} from 'next/font/google'

const montserrat=Montserrat({
  subsets: ['latin-ext'],
})

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className={styles.description}>
        <LeftSection/>
        <RightSection/>
        <StickyPlayer/>
      </div>
    </main>
  )
}
