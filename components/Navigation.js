import { Navbar } from 'flowbite-react';

function Navigation() {
  return (
    <Navbar
      className="bg-transparent z-50"
    >
      <Navbar.Brand href="https://flowbite.com/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-3 h-6 sm:h-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18M3 12l9-6 9 6-9 6-9-6z" />
        </svg>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          WUDO
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="z-50" />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/">
          Furniture
        </Navbar.Link>
        <Navbar.Link href="/">
          Product
        </Navbar.Link>
        <Navbar.Link href="/">
          Store
        </Navbar.Link>
        <Navbar.Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </Navbar.Link>
        <Navbar.Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
