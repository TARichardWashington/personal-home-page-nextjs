import './globals.css'
import Image from 'next/image'
import profilePic from '../../public/KenshinKyu_big_brain_nick_e39a2fe1-19b3-4c27-b06d-9581284e54bd.png'
import Link from 'next/link'

export const metadata = {
  title: 'Something weird',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body><div className="header">
        <div className="top">
          <div className="left"><h3>Logo not logo</h3></div>
          <div className="right">
            <ul>
              <li><Link href="/articles/php-is-good-now-actually">PHP Is Good</Link></li>
              <li>another link</li>
              <li>one more</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h1>Big brain Richard, that&apos;s what <span className="italic">they</span> say</h1>
            <p className="subtext">
              This is the landing page from the Odin project, used to practice the fundamentals of front end web development.
            </p>
            <button>Now includes flexbox!</button>
          </div>
          <div className="right">
            <Image priority={true} src={profilePic} alt="This is actually Big Brain Nick, but you won&apos;t know that!" height={250} width={250} />
          </div>
        </div>
      </div>
        {children}
        <div className="quote">
          <blockquote>“I&apos;m not an abstractionist. I&apos;m not interested in the relationship of color or form or anything else. I&apos;m interested only in expressing basic human emotions: tragedy, ecstasy, doom, and so on.”</blockquote>
          <cite> - Mark Rothko (not me)</cite>
        </div>
        <div className="cta">
          <div className="callout">
            <div className="callout-text">
              <h3>Call to no action!</h3>
              <p>There is nothing to sign up to at this point, so don&apos;t bother trying.</p>
            </div>
            <div className="callout-button">
              <a href="https://www.bbc.co.uk"><button>Go away</button></a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="copyright">
            <p>Copyright © Richard Washington 2022</p>
          </div>
        </div>
      </body>
    </html>
  )
}


