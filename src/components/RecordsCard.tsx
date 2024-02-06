import RecordsCardPros from '../types/typeRecordCard';

function RecordsCard({ record, removeRecord }: RecordsCardPros) {
  return (
    <div>
      <a href={ record.url }>{record.name}</a>
      <p>{record.login}</p>
      <p>{record.password}</p>
      <button
        data-testid="remove-btn"
        onClick={ () => removeRecord(record.name) }
      >
        Apagar
      </button>
    </div>
  );
}

export default RecordsCard;
