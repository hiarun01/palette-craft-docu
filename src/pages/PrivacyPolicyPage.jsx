import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p>
        We take your privacy seriously. This document outlines what data we
        collect and how we use it.
      </p>

      <h2>Data We Collect</h2>
      <ul>
        <li>
          No personal information (name, email, etc.) is collected by default.
        </li>
        <li>We only use your input (like text prompts) to generate content.</li>
      </ul>

      <h2>How We Use Your Data</h2>
      <ul>
        <li>Input is used only temporarily in your current session.</li>
        <li>No data is stored or sent to third parties.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        If we use external APIs (e.g., OpenAI), their data policies may apply as
        well. We do not share or transmit any personal data to them.
      </p>

      <h2>Contact</h2>
      <p>
        For any concerns, contact us at{" "}
        <a href="mailto:hiarun.works@gmail.com">hiarun.works@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
