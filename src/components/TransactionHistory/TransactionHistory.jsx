import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
        <table className={css.transaction}>
          <thead>
            <tr>
              <th className={css.th}>Type</th>
              <th className={css.th}>Amount</th>
              <th className={css.th}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(element => (
                <tr key={element.id} className={css.tr}>
                  <td className={css.td}>{element.type}</td>
                  <td className={css.td}>{element.amount}</td>
                  <td className={css.td}>{element.currency}</td>
                </tr>
            ))}
          </tbody>
      </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};