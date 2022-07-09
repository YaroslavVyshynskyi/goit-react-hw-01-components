import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ stats, title }) => { 
    return <section className={css.statistics}>
        {!!title && (
            <div className={css.title_wrap}>
                    <h2 className={css.title}>{ title }</h2>
            </div>
        )}

        <ul className={css.stat__list}>
            {stats.map(({ id, label, percentage }) => { 
                const itemColor = getRandomHexColor()

                return (
                    <li key={id} className={css.item} style={{backgroundColor: itemColor}}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                );
            })}
        </ul>
    </section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}