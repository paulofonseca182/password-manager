import RecordsCardPros from '../types/typeRecordCard';

function RecordsCard({
  record,
  removeRecord,
  hideAsteristics,
  hidePassword,
}: RecordsCardPros) {
  return (
    <div>
      <a href={ record.url }>{record.name}</a>
      <p>{record.login}</p>
      {hideAsteristics && <p>{record.password}</p>}
      {hidePassword && <p>******</p>}
      <button
        data-testid="remove-btn"
        onClick={ () => removeRecord(record.name) }
      >
        Apagar ❌
      </button>
    </div>
  );
}

export default RecordsCard;
