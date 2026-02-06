import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing" />
      <h1>Investment</h1>
    </header>
  );
}
