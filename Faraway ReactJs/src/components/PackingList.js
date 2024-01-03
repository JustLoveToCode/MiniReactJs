import { useState } from 'react';
import  Item  from './Item';

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItem }) {
  const [sortBy, setSortBy] = useState('packed');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id}
            onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className='action'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort By Input Order</option>
          <option value='description'>Sort By Description</option>.
          <option value='packed'>Sort by Packed Status</option>
        </select>
        <button onClick={onClearItem}>Clear the List</button>
      </div>
    </div>
  );
}
