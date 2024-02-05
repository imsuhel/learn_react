import React, { useState } from "react";

function AddDish() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: {},
    printAbleUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormValues({
        ...formValues,
        profilePic: e.target.files[0],
        printAbleUrl: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }

    // if (name == "name") {
    //   setFormValues({ ...formValues, name: value });
    // }
  };

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setFormValues({
      ...formValues,
      profilePic: e.target.files[0],
      printAbleUrl: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited", formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img src={formValues?.printAbleUrl} alt="" />
        <label htmlFor="name">Profile Pic</label>
        <input
          type="file"
          name="profilePic"
          placeholder=""
          onChange={handleFile}
          accept="*image"
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          placeholder=""
          onChange={handleChange}
        />

        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder=""
        />

        <label htmlFor="name">Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder=""
        />

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default AddDish;
