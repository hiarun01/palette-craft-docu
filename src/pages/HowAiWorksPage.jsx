import "../App.css";

const HowAiWorksPage = () => {
  return (
    <div className="container">
      <h1>How We Use AI</h1>
      <p>
        This add-on uses AI to generate personalized color palettes from user
        prompts.
      </p>

      <h2>🔍 AI Functionality</h2>
      <ul>
        <li>Interprets user input (e.g., mood, theme, scene).</li>
        <li>Generates 3 unique color palettes with names.</li>
      </ul>

      <h2>🧰 AI Capabilities</h2>
      <ul>
        <li>Understands harmony and contrast.</li>
        <li>Applies context (e.g., sunset, retro, forest).</li>
        <li>Names colors creatively based on tone and mood.</li>
      </ul>

      <h2>🔒 AI Limitations</h2>
      <ul>
        <li>No personal data is stored or processed.</li>
        <li>AI does not train or learn from your inputs.</li>
      </ul>

      <p>We use AI to enhance creativity — you're always in control.</p>
    </div>
  );
};

export default HowAiWorksPage;
