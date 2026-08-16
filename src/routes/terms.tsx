import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Terms of Service | Civaro";
const description = "Terms governing access to and use of the Civaro website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms govern your access to and use of the Civaro website."
    >
      <p>
        <strong>Effective date:</strong> August 16, 2026
      </p>

      <h2>1. Acceptance of these terms</h2>
      <p>
        By accessing this website, you agree to these terms. If you do not agree, please do not use
        the website. These website terms do not replace a separate written agreement for services.
      </p>

      <h2>2. Website information and project inquiries</h2>
      <p>
        Website content is provided for general information. A contact-form submission, meeting,
        estimate or proposal does not create a client relationship or require either party to
        proceed. Services begin only under a separate agreement accepted by Civaro and the client.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You must not:</p>
      <ul>
        <li>Use the website for unlawful, fraudulent or abusive purposes.</li>
        <li>Attempt to disrupt, damage or gain unauthorized access to the website or its systems.</li>
        <li>Submit malicious code, spam, misleading information or content that infringes rights.</li>
        <li>Scrape, copy or commercially exploit website content without written permission.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        Unless otherwise stated, Civaro owns or licenses the website design, branding, copy,
        graphics and other original content. You may view the website for personal or internal
        business use, but no other rights are granted.
      </p>

      <h2>5. Third-party services and links</h2>
      <p>
        The website may rely on or link to third-party services. Civaro does not control and is not
        responsible for their availability, content, security or practices. Your use of those
        services may be governed by separate terms.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        To the extent permitted by law, the website is provided “as is” and “as available.” Civaro
        does not guarantee that the website will always be uninterrupted, error-free, secure or
        suitable for a particular purpose. Results described in examples are not guarantees of
        future performance.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the extent permitted by law, Civaro will not be liable for indirect, incidental,
        special, consequential or punitive damages arising from use of, or inability to use, this
        website. Nothing in these terms excludes liability that cannot lawfully be excluded.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of Alberta and the applicable laws of Canada. Any
        dispute relating to these website terms will be subject to the courts located in Alberta,
        unless applicable law requires otherwise.
      </p>

      <h2>9. Changes and contact</h2>
      <p>
        We may update these terms from time to time. Continued use after an update means you accept
        the revised terms. Questions can be sent to{" "}
        <a href="mailto:hello@civaro.ca">hello@civaro.ca</a>.
      </p>
    </LegalPage>
  );
}
