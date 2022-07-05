import css from "./Statistics.module.css";
import data from "./data.json";
import PropTypes from "prop-types";

export const Statistics = (event) => { 

    return <section className={css.statistics}>
                <h2 className={css.title}>Upload stats</h2>

                <ul className={css.stat__list}>
                    <li className={css.item}>
                        <span className={css.label}>.docx</span>
                        <span className={css.percentage}>4%</span>
                    </li>
                    <li className={css.item}>
                        <span className={css.label}>.mp3</span>
                        <span className={css.percentage}>14%</span>
                    </li>
                    <li className={css.item}>
                        <span className={css.label}>.pdf</span>
                        <span className={css.percentage}>41%</span>
                    </li>
                    <li className={css.item}>
                        <span className={css.label}>.mp4</span>
                        <span className={css.percentage}>12%</span>
                    </li>
                </ul>
            </section>
}

// Statistics.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired
// }