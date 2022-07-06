import css from "./Statistics.module.css";
import data from "./data.json";
import PropTypes from "prop-types";
import { StatisticsTitle } from "./StatisticsTitle"

export const Statistics = (title, stats) => { 

    return <section className={css.statistics}>
                <StatisticsTitle />
             
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
