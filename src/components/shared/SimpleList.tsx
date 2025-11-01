interface Props {
  items: string[];
  title: string;
}

export const SimpleList = ({ items, title }: Props) => (
  <div className="bg-white p-3 rounded shadow-sm">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);