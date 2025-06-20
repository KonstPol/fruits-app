import styles from "../css/Form.module.css";

const Form: React.FC<any> = ({ children }) => {
    return (
        <form className={styles.form}>
            {children }
        </form>
    )
}

export default Form