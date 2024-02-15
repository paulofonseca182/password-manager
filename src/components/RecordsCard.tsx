import RecordsCardPros from '../types/typeRecordCard';
import './RecordCard.css';

function RecordsCard({
  record,
  removeRecord,
  hideAsteristics,
  hidePassword,
}: RecordsCardPros) {
  return (
    <div className="registered-card">
      <a href={ record.url }>{record.name}</a>
      <p>{`login: ${record.login}`}</p>
      {hideAsteristics && <p>{`senha: ${record.password}`}</p>}
      {hidePassword && <p>senha: ******</p>}
      <button
        className="btn-removeCard"
        data-testid="remove-btn"
        onClick={ () => removeRecord(record.name) }
      >
        ❌
      </button>
    </div>
  );
}

export default RecordsCard;
