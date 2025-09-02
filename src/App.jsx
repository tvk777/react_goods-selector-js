import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const AddButton = ({ handleClick }) => (
  <button
    data-cy="AddButton"
    type="button"
    className="button"
    onClick={handleClick}
  >
    +
  </button>
);
const RemoveButton = ({ handleClick }) => (
  <button
    data-cy="RemoveButton"
    type="button"
    className="button is-info"
    onClick={handleClick}
  >
    -
  </button>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleAdd = good => {
    setSelectedGood(good);
  };

  const handleRemove = () => {
    setSelectedGood(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          <>No goods selected</>
        ) : (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleRemove}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood === good ? (
                  <RemoveButton handleClick={handleRemove} />
                ) : (
                  <AddButton handleClick={() => handleAdd(good)} />
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
