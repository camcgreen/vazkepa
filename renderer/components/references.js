import styles from '../styles/References.module.css';

const References = ({ setShowReferencesPopup, imgSrc }) => {
    return (
        <div className='popupBg' id='referencesPopup'>
            <div
                className={styles.bg}
                onClick={() => setShowReferencesPopup(false)}
            />
            <img className={styles.img} src={`/images/${imgSrc}`} alt='' />
        </div>
    );
};

export default References;
