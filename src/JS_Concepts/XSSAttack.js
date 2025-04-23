import { useState } from "react";

// 1 Attacker controller props
const customPropsContolledByAttacker = {
  __html: "<img src='invalid-image' onerror='alert(\"XSS!\")' />",
};

export function XSSAttackExample() {
  const [inputText, setInputText] = useState({ __html: "" });
  const [imageText, setImageText] = useState({
    __html: "<img src='invalid-image' onerror='alert(\"XSS!\")' />",
  });
  console.log(inputText);

  const url = "javascript: alert('XSS!')";

  return (
    <>
      <li>
        Cross-Site Scripting (XSS) attacks are a type of injection, in which
        malicious scripts are injected into otherwise benign and trusted
        websites.
      </li>
      <li>
        XSS attacks occur when an attacker uses a web application to send
        malicious code, generally in the form of a browser side script, to a
        different end user.
      </li>
      <a
        target="_black"
        href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
      >
        Cross Site Scripting Prevention Cheat Sheet
      </a>
      <div style={{ border: "1px solid black" }}>
        <textarea
          defaultValue={"Enter text..."}
          rows={4}
          cols={50}
          onChange={(e) => setInputText({ __html: e.target.value })}
        ></textarea>
        <div
          style={{ border: "1px solid black", height: "100px" }}
          dangerouslySetInnerHTML={customPropsContolledByAttacker}
        ></div>
        <div
          style={{ border: "1px solid black", height: "100px" }}
          dangerouslySetInnerHTML={inputText} // 2 Using dangerouslySetInnerHTML
        ></div>
        {/* 3 Malicious href url link */}
        <a href={url}>Click me to get hacked</a>
      </div>
    </>
  );
}
