import css from "./Statistics.module.css";
import data from "./data.json";
import PropTypes from "prop-types";

export const Statistics = (title, { stats }) => { 
    console.log(stats);
    return <section className={css.statistics}>
                <div className={css.title_wrap}>
                    <h2 className={css.title}>Upload stats</h2>
                </div>

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

