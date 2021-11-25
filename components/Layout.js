import Footer from "./footer";
import Header from "./Header";
import styles from "../components/layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
