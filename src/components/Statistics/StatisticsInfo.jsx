import css from "./Statistics.module.css";
import data1 from "./data.json";
import PropTypes from "prop-types";

export const StatisticsInfo = ({data1}) => {
    console.log(data1);
    // function getRandomHexColor() {
    //     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // }

    // document.querySelector("item").style.backgroundColor = getRandomHexColor();

    return <ul className={css.stat__list}>
                {data1.map(data => (
                    <li key={data.id} className={css.item}>
                            <span className={css.label}>{data.label}</span>
                            <span className={css.percentage}>{data.percentage}</span>
                    </li>
                                    ))
                };
                {/* <li className={css.item}>
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
                </li> */}
            </ul>
}