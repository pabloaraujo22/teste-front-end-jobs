import styles from '../styles/Footer.module.css';
export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>
                    © Copyright 2020 - Melhor Celular - Todos os direitos
                    reservados à Melhor Celular LTDA.
                </span>
            </div>
        </div>
    );
}
