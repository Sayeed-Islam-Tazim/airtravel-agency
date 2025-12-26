import { waPhoneNumber } from "./constants";

// export const handleWaContact = ({tourName, message}:unknown) => {
//   let waMessage;
//   if (message) {
//     waMessage = message;
//   } else {
//     waMessage = `Hello, I would like to know more about your ${tourName} package.`;
//   }

//   const url = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(
//     waMessage
//   )}`;

//   return window.open(url, "_blank", "noopener,noreferrer");
// };

type WaContactOptions = {
  tourName?: string;
  message?: string;
};

export const handleWaContact = ({
  tourName,
  message,
}: WaContactOptions = {}) => {
  const waMessage =
    message ??
    (tourName
      ? `Hello, I would like to know more about your ${tourName} package.`
      : "Hello, I would like to know more about your packages.");

  const url = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
