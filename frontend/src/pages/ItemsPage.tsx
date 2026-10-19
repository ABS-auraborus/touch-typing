import { useEffect, useState } from 'react';
import { apiClient } from '../api/client';

interface Item {
  id: number;
  title: string;
  description?: string;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchItems = async () => {
    try {
      const res = await apiClient.get<Item[]>('/items/');
      setItems(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    try {
      await apiClient.post('/items/', { title, description });
      setTitle('');
      setDescription('');
      fetchItems();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Список элементов из FastAPI (SQLite)</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.description || 'Без описания'}
          </li>
        ))}
      </ul>
    </div>
  );
}
