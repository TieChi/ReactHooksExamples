import { useState, useCallback, useMemo } from "react";
function useForm(initState = {}, validators) {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});
  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value
      }));
      if (validators[name]) {
        const errorMsg = validators[name](value);
        setErrors((errors) => ({
          ...errors,
          [name]: errorMsg || null
        }));
      }
    },
    [validators]
  );
  return {
    values,
    errors,
    setFieldValue
  };
}

export default () => {
  const validators = useMemo(() => {
    return {
      name: (value) => {
        if (typeof value !== "string" || value.length < 2) {
          return `Name can't be a string less than 2 Characters.`;
        }
        return null;
      },
      age: (value) => {
        if (isNaN(Number(value))) {
          return `Age must be a number larger than 12`;
        }
        return null;
      }
    };
  }, []);
  const { values, errors, setFieldValue } = useForm({}, validators);
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
          <span>{errors["name"]}</span>
        </div>
        <div>
          <label>Age: </label>
          <input
            type="text"
            name={values?.age || null}
            onChange={(event) => {
              setFieldValue("age", event.target.value);
            }}
          />
          <span>{errors["age"]}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
