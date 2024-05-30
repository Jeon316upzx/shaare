import React from "react";

const ServiceList = ({ 
  service, 
  handleOnServiceChange, 
  toggleVisibility, 
  selectedService }) => {
  return (
    <div
      key={service.id}
      className={`flex flex-col ${
        selectedService.includes(service.name)
          ? "h-52 border-2 border-gray-400"
          : ""
      } border-2 border-gray-50 p-5 rounded-lg my-1`}
    >
      <div
        key={service.id}
        className="flex flex-row justify-between items-center"
      >
        <span className="font-light">{service.name}</span>
        <input
          type="checkbox"
          name={"service"}
          id={"service"}
          value={service.name}
          onChange={handleOnServiceChange}
          checked={selectedService.includes(service.name)}
        />
      </div>
      {selectedService.includes(service.name) && (
        <span
          onClick={() => toggleVisibility(service.id)}
          className="py-2 text-sm text-[#ff5416] text-right"
        >
          {service.visibleDetails ? "Hide details" : "Show details"}
        </span>
      )}

      {service.details &&
        service.visibleDetails &&
        service.details.map((detail, index) => (
          <div className="flex flex-col h-32 overflow-y-scroll" key={index}>
            <h4>{detail.title}</h4>
            {detail &&
              detail.items.map((item, index) => {
                return <li key={index}> {item}</li>;
              })}
          </div>
        ))}
    </div>
  );
};

export default ServiceList;
