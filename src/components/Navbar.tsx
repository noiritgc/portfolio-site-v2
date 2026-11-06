import Link from 'next/link';
import { RoughBox, Rule } from './Doodles';

const navItems = [
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/#about' },
  { name: 'Outside of class', href: '/#outside' },
];

const Navbar = () => (
  <header className="site-header">
    <div className="topbar">
      <Link href="/" className="mark crayon-fine">Noirit</Link>
      <nav>
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="crayon-fine">{item.name}</Link>
        ))}
        <Link href="/resume" className="nav-resume"><span className="crayon"><RoughBox /></span><span className="crayon-fine">Resume</span></Link>
      </nav>
    </div>
    <Rule className="crayon" />
  </header>
);

export default Navbar;
