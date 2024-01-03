export default function Stats({ items }) {
  if (!items.length) return <p className='stats'>Start Adding
    Some Items to your List 🎇🎆</p>;

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const numPercent = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <div>
      <footer className="stats">
        <em>
          {numPercent === 100 ? 'You have already fully packed your items' :
            `You have the ${numItems} items on your List, and you have already packed ${numPacked}(${numPercent}%)`}
        </em>

      </footer>
    </div>
  );
}
