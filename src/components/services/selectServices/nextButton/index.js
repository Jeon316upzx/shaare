import React from 'react'

const NextButton = ({ isFormValid, handleSubmit }) => {
  return (
    <button
          disabled={!isFormValid}
          className={`${
            isFormValid
              ? "bg-[#ff5416] cursor-pointer"
              : "bg-[#fea881] pointer-events-none"
          } text-white w-full py-2 rounded-full`}
          onClick={handleSubmit}
        >
          Next
        </button>
  )
}

export default NextButton
