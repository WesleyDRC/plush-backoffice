import styles from "./Product.module.css";
import useProduct from "../../hooks/useProduct";

export default function Product({ imageUrl, altImage, name, quantity, product}) {

  const {editProduct, deleteProduct} = useProduct()

  return (
    <tr className={styles.item} data_product={JSON.stringify(product)}>
      <td className={styles.product}>
        <div className={styles.imageAndName}>
          <div className={styles.imageProduct}>
            <img src={imageUrl} alt={altImage} />
          </div>
          <div>
            <p> {name}</p>
          </div>
        </div>
      </td>
      <td className={styles.quantity}> {quantity} </td>
      <td className={styles.buttons}>
        <button className={styles.add} onClick={editProduct}>EDITAR</button>
        <button className={styles.remove} onClick={deleteProduct}>REMOVER</button>
      </td>
    </tr>
  );
}
