import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Privacy Policy | Civaro";
const description = "How Civaro collects, uses, protects and discloses personal information.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how Civaro handles personal information when you visit our website or contact us."
    >
      <p>
        <strong>Effective date:</strong> August 16, 2026
      </p>

      <h2>1. Who we are</h2>
      <p>
        Civaro is a digital agency based in Calgary, Alberta. Questions or requests about this
        policy can be sent to <a href="mailto:hello@civaro.ca">hello@civaro.ca</a>.
      </p>

      <h2>2. Information we collect</h2>
      <p>We may collect information you choose to provide through our contact form, including:</p>
      <ul>
        <li>Your name and email address.</li>
        <li>Your company, service interests and estimated project budget.</li>
        <li>Your project details and any other information included in your message.</li>
      </ul>
      <p>
        Our hosting and technology providers may also automatically receive limited technical
        information such as your IP address, browser, device type, referring page and request logs.
      </p>

      <h2>3. How we use information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to inquiries and discuss potential projects.</li>
        <li>Provide, operate, secure and improve our website and services.</li>
        <li>Maintain business records and comply with legal obligations.</li>
      </ul>
      <p>
        Sending an inquiry does not subscribe you to marketing. We will only send promotional
        electronic messages where we have the consent or other legal authority required to do so.
      </p>

      <h2>4. Service providers and disclosures</h2>
      <p>
        Contact-form submissions are processed by FormSubmit and forwarded to Civaro by email. We
        may also use hosting, infrastructure, security and other service providers that process
        information for us. Some providers may process information outside Canada, where it may be
        subject to the laws of another jurisdiction.
      </p>
      <p>
        We may disclose information where required by law, to protect rights or security, or as
        part of a business transaction. We do not sell personal information.
      </p>

      <h2>5. Retention and safeguards</h2>
      <p>
        We keep personal information only as long as reasonably needed for the purposes described
        above or as required by law. FormSubmit states that it retains form submissions for up to
        30 days. We use reasonable administrative and technical safeguards, but no online service
        can guarantee absolute security.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        You may ask to access or correct personal information we hold about you, withdraw consent
        where applicable, or raise a privacy concern by emailing{" "}
        <a href="mailto:hello@civaro.ca">hello@civaro.ca</a>. We may need to verify your identity
        before completing a request, and legal exceptions may apply.
      </p>

      <h2>7. Third-party websites</h2>
      <p>
        Our website may link to or load content from third-party services. Their privacy practices
        are governed by their own policies, not this one.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this policy as our practices or legal obligations change. The effective date
        above indicates the latest revision.
      </p>
    </LegalPage>
  );
}
