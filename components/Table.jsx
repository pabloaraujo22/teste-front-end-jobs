import RowTable from './RowTable';
import styles from '../styles/Table.module.css';
export default function Table(props) {
    const phones = props.products;

    const renderProduct = () => {
        return phones.map((product) => {
            return (
                <RowTable
                    key={product._id}
                    id={product._id}
                    codigo={product.code[0]}
                    modelo={product.model}
                    preco={product.price}
                    marca={product.brand}
                    cor={product.color}
                />
            );
        });
    };
    return (
        <div className={styles.container}>
            <RowTable header />
            {renderProduct()}
        </div>
    );
}
