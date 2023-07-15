import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatisticsItem = ({ stats }) => {
  return (
    <ul className={css.statisticsItem}>
      {stats.map(({ id, label, percentage }) => (
        <li className={css.item} style={{ backgroundColor: getRandomHexColor() }} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};