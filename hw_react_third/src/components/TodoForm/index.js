
function TodoForm({ input, value = ""}) {
  return (
    <input
      placeholder="Введіть значення..."
      type="text"
      value={value}
      onInput={(event) => {
        input(event.target.value);
      }}
    />
  );
}

export default TodoForm;

