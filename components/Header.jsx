import styles from '../styles/Header.module.css';
import Logo from './Logo';

export default function Header(pros) {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <span>M</span>
                <Logo />
            </div>
        </div>
    );
}
