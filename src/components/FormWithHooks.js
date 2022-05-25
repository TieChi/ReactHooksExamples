import { useState, useCallback } from "react";
function useForm() {
  const [values, setValues] = useState();
  const setFieldValue = useCallback((name, value) => {
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  }, []);
  return {
    values,
    setFieldValue
  };
}

export default () => {
  const { values, setFieldValue } = useForm();
  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      console.log(values);
    },
    [values]
  );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name={values?.name || null}
            onChange={(event) => {
              setFieldValue("name", event.target.value);
            }}
          />
        </div>
        {/* <div>
          <label>Age: </label>
          <input
            type="text"
            name={values?.age || null}
            onChange={(event) => {
              setFieldValue(values.age, event.target.value);
            }}
          />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
