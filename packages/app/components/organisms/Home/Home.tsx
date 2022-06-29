import Welcome from '../../molecules/Welcome/Welcome';
import ColorSchemeToggle from '../../atoms/ColorSchemeToggle/ColorSchemeToggle';
import Logo from '../../atoms/Logo/Logo';

export default function Home() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Logo />
    </>
  );
}