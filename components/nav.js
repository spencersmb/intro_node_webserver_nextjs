import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Nav = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about" as="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects" prefetch>
          <a style={linkStyle}>Projects</a>
        </Link>
    </div>
)

export default Nav
