type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ name }: PersonListProps) => {
  return (
    <div>
      {name.map((el) => (
        <h3>{`${el.first} ${el.last}`}</h3>
      ))}
    </div>
  );
};
