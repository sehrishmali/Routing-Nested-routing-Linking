import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
      Home page <br />
      <Link href="/about">go to About page</Link><br />
      <Link href="/contact">go to contact page</Link><br/>
      <Link href="/footer">go to footer page</Link><br/>
     <Link href="/.">go to home page</Link>
    </div>
  )
}

export default Home
