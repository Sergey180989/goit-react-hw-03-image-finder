import s from "../Button/Button.module.css";


export const Button = ({  handleButton }) => {
    return (<><button type="button" className={s.button} onClick={handleButton}>Load more</button></>)
};

