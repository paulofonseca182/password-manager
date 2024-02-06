import Records from '../types/typeRecord';

function RecordsCard({ name, login, password, url }: Records) {
  return (
    <div>
      <a href={ url }>{name}</a>
      <p>{login}</p>
      <p>{password}</p>
    </div>
  );
}

export default RecordsCard;
