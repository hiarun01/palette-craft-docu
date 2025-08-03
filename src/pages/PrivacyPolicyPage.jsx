import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container">
      <h1>Privacy Policy – PaletteCraft</h1>
      <p>
        At PaletteCraft, we take your privacy seriously. This policy explains
        what data we collect and how we use it
      </p>
      <h2>Data We Collect</h2>
      <ul>
        <li>
          We do not collect any personal information such as your name, email
          address, or location by default.
        </li>
        <li>
          The only data used is your input, such as text prompts you provide for
          generating color palettes.
        </li>
      </ul>

      <h2>How We Use Your Data</h2>
      <ul>
        <li>
          No data is transmitted to external databases or stored for later use.
        </li>

        <li>
          Your input is used temporarily during your session to generate the
          output.
        </li>
        <li>We do not store, log, or share this data with anyone.</li>
        <li>
          No data is transmitted to external databases or stored for later use.
        </li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        We may use external Api (GenAi) to process input. While we do not send
        personal data to them, their privacy policies may apply when interacting
        with their services.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions or concerns about your data privacy, please
        feel free to contact us:
        <a href="mailto:hiarun.works@gmail.com"> hiarun.works@gmail.com </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
