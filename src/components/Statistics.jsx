import css from './styles/statistics.module.css';



const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
     {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statslist}>
        {data.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export { Statistics};