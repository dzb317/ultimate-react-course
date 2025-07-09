import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>


        
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  );
}

export default Sidebar;
