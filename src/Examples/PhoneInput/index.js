import { all } from "axios";
import { useState } from "react";

export const PhoneInput = () => {
  const [phoneNumer, setPhoneNumer] = useState("");

  const formattedPhoneNumber = (phoneNumer) => {
    let unformattedNumber = phoneNumer
      .replace("(", "", all)
      .replace(")", "", all)
      .replace("-", "", all);

    let areaCode = unformattedNumber.substring(0, 3);
    let prefix = unformattedNumber.substring(3, 6);
    const line = unformattedNumber.substring(6);

    if (areaCode.length === 3 && prefix.length > 0)
      areaCode = "(" + areaCode + ")";
    if (line.length > 0) prefix = prefix + "-";

    return areaCode + prefix + line;
  };

  return (
    <div>
      <input
        id="PhoneInput"
        value={formattedPhoneNumber(phoneNumer)}
        maxLength={13}
        onChange={(e) => {
          let unformattedNumber = e.target.value
            .replace("(", "")
            .replace(")", "")
            .replace("-", "");
          if (
            unformattedNumber.length === 0 ||
            !isNaN(parseInt(unformattedNumber))
          )
            setPhoneNumer(unformattedNumber);
        }}
      />
    </div>
  );
};
