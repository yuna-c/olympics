import './Sort.scss';

const Sort = ({ sortState, setSortState }) => {
  const onHandleSortChange = () => {
    const newSortState = sortState === '금은동' ? '총메달' : '금은동';
    setSortState(newSortState);
  };

  return (
    <div className="sort-group">
      {/* <button onClick={() => onHandleSortChange('금은동')}>금,은,동 순 정렬</button>
      <button onClick={() => onHandleSortChange('총메달')}>총 메달 수 순 정렬</button> */}

      <button className={`sort-button ${sortState === '금은동' ? 'active' : ''}`} onClick={onHandleSortChange}>
        {sortState === '금은동' ? '금,은,동 순 정렬' : '총 메달 수 순 정렬'}
      </button>
    </div>
  );
};

export default Sort;
