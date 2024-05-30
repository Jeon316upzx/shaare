import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import NextButton from "../selectServices/nextButton";

const AddressForm = ({ onNext, data }) => {
  const addressSchema = Yup.object().shape({
    address: Yup.string().min(2, "Too Short!").required(),
  });
  const addressForm = useFormik({
    initialValues: {
      address: "",
    },
    validationSchema: addressSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = () => {
    if (addressForm.values.address.length > 0) {
      onNext();
    }
  };

  const isFormValid = addressForm.isValid;

  return (
    <div className="px-2">
      <div>
        <h3 className="text-xl py-5 font-semibold"> {data.title}</h3>
      </div>
      <form onSubmit={addressForm.handleSubmit}>
        <div>
          <input
            type="text"
            required={true}
            placeholder="Enter your address"
            id="address"
            name="address"
            onChange={addressForm.handleChange}
            value={addressForm.values.address}
            className="h-15 w-full border  border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        <div className="py-5">
          <NextButton handleSubmit={handleSubmit} isFormValid={isFormValid} />
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
