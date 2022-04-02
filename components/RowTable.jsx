import styles from '../styles/RowTable.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import api from '../lib/api';
import { useRouter } from 'next/router';

export default function RowTable(props) {
    const { id, codigo, modelo, preco, marca, cor, header } = props;
    const router = useRouter();

    async function handleDelete(e) {
        try {
            await api.delete(`/phone/${id}`);
            router.push({ pathname: '/' });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.row}>
            <ul className={styles.table}>
                <li>{codigo || 'Codigo'} </li>
                <li>{modelo || 'Modelo'}</li>
                <li>
                    {preco
                        ? `R$${parseFloat(preco)
                              .toFixed(2)
                              .toString()
                              .replace('.', ',')}`
                        : 'Preço'}
                </li>
                <li>{marca || 'Marca'}</li>
                <li>{cor || 'Cor'}</li>
            </ul>

            {!header && (
                <div className={styles.actions_container}>
                    <button className={styles.action}>
                        <Link
                            className={styles.action}
                            href={`/update/${id}`}
                            passHref
                        >
                            <EditIcon />
                        </Link>
                    </button>
                    <button onClick={handleDelete} className={styles.action}>
                        <DeleteIcon />
                    </button>
                </div>
            )}
        </div>
    );
}
