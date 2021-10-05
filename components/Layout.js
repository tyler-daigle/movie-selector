import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Movie Selector</title>
      </Head>

      <header className="main-header">
        <h1 className="logo">Too Scary Movie Selector</h1>
        <div className="hamburger-menu">
          <div className="hamburger-slice"></div>
          <div className="hamburger-slice"></div>
          <div className="hamburger-slice"></div>
        </div>
      </header>

      <div className="main-container">
        <main>{children}</main>
      </div>

      <footer>
        <p>Brought to you by Shudder.</p>
      </footer>
    </>
  );
}

export default Layout;
