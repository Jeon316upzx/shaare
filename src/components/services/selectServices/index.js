import React, { useState } from "react";
import Header from "../../header";
import ServiceList from "./serviceList";
import NextButton from "./nextButton";

const SelectServices = ({ data, onNext }) => {
  const [selectedService, SetSelectedService] = useState([]);
  const [services, setServices] = useState([
    {
      id: "standard-cleaning",
      name: "Standard Cleaning",
      details: [
        {
          title: "BEDROOMS",
          items: [
            "Dusting of furniture & surfaces",
            "Making the bed",
            "Sweeping & mopping of floors",
            "Folding or hanging clothes on the bed or wardrobe or closet reorganization",
            "Cleaning out cobwebs",
          ],
        },
      ],
      visibleDetails: false,
    },
    {
      id: "deep-cleaning",
      name: "Deep Cleaning",
      details: [
        {
          title: "BEDROOMS",
          items: [
            "Dusting of furniture & surfaces",
            "Making the bed",
            "Sweeping & mopping of floors",
            "Folding or hanging clothes on the bed or wardrobe or closet reorganization",
            "Cleaning out cobwebs",
          ],
        },
      ],
      visibleDetails: false,
    },
    {
      id: "move-in-cleaning",
      name: "Move-in Cleaning",
      details: [
        {
          title: "BEDROOMS",
          items: [
            "Dusting of furniture & surfaces",
            "Making the bed",
            "Sweeping & mopping of floors",
            "Folding or hanging clothes on the bed or wardrobe or closet reorganization",
            "Cleaning out cobwebs",
          ],
        },
      ],
      visibleDetails: false,
    },
    {
      id: "ironing",
      name: "Ironing",
      details: [
        {
          title: "BEDROOMS",
          items: [
            "Dusting of furniture & surfaces",
            "Making the bed",
            "Sweeping & mopping of floors",
            "Folding or hanging clothes on the bed or wardrobe or closet reorganization",
            "Cleaning out cobwebs",
          ],
        },
      ],
      visibleDetails: false,
    },
    {
      id: "laundry",
      name: "Laundry",
      details: [
        {
          title: "BEDROOMS",
          items: [
            "Dusting of furniture & surfaces",
            "Making the bed",
            "Sweeping & mopping of floors",
            "Folding or hanging clothes on the bed or wardrobe or closet reorganization",
            "Cleaning out cobwebs",
          ],
        },
      ],
      visibleDetails: false,
    },
    {
      id: "wardrobe-organization",
      name: "Wardrobe Organization",
      details: [],
      visibleDetails: false,
    },
  ]);

  const toggleVisibility = (id) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, visibleDetails: !service.visibleDetails }
          : { ...service, visibleDetails: false }
      )
    );
  };

  const handleOnServiceChange = (event) => {
    if (!selectedService.includes(event.target.value)) {
      const newService = event.target.value;
      SetSelectedService((prevServices) => {
        return [...prevServices, newService];
      });
    } else {
      SetSelectedService((oldServices) => {
        return [...oldServices.filter((s) => s !== event.target.value)];
      });
    }
  };

  const handleSubmit = () => {
    if (selectedService.length > 0) {
      onNext();
    }
  };

  const isFormValid = selectedService && selectedService.length > 0;

  return (
    <div className="px-2">
      <Header data={data} />
      <div className="flex flex-col">
        {services.map((service) => (
          <ServiceList
            service={service}
            key={service.id}
            handleOnServiceChange={handleOnServiceChange}
            toggleVisibility={toggleVisibility}
            selectedService={selectedService}
          />
        ))}
      </div>

      <div className="py-5">
        <NextButton isFormValid={isFormValid} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SelectServices;
