import Link from "next/link";

const Nav = () => {
  return (
    <nav className="border-b p-3">
      <div className="container mx-auto">
        <Link href="/">
          Home
        </Link>
        <Link href="/users">
          Users
        </Link>
        <Link href="/counter-example">
          Counter
        </Link>
        <style jsx>
          {`
            a {
              margin-right: 25px;
            }
          `}
        </style>
      </div>
    </nav>
  );
};

export default Nav;
