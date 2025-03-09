"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteData } from "@/lib/site.config";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen flex justify-center flex-col items-center">
      <Navbar hideCampaigns={true} />

      <div className="w-full flex flex-col items-center container py-10 px-4">
        <h1 className="text-4xl mb-5">Refund Policy</h1>
        <div className="flex flex-col gap-4">
          <p>
            <strong>Introduction.</strong> At {siteData.name}, we respect your
            privacy and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, and
            protect your data when you use our services, including our platform
            and any associated features. By using our services, you agree to the
            collection and use of your data in accordance with this policy.
          </p>

          <p>
            This policy applies to <strong>commercial transactions</strong> and
            excludes <strong>donations</strong> or{" "}
            <strong>crowdfunding contributions</strong>. The collection and use
            of your personal data are subject to the terms set out in this
            policy.
          </p>

          <h3>Information We Collect</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            We collect various types of information to provide and improve our
            services:
          </p>

          <ul>
            <li>
              <strong>Personal Information:</strong> This includes your{" "}
              <strong>name</strong>, <strong>email address</strong>,{" "}
              <strong>phone number</strong>,{" "}
              <strong>billing and payment details</strong>, and other personal
              identifiers you provide when registering or making purchases on
              our platform.
            </li>
            <li>
              <strong>Transaction Information:</strong> We collect details of{" "}
              <strong>transactions</strong> you make on our platform, including{" "}
              <strong>payment method</strong>,
              <strong>billing information</strong>,{" "}
              <strong>purchase history</strong>, and the{" "}
              <strong>date and time of transactions</strong>.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about how you{" "}
              <strong>access</strong> and <strong>use</strong> our services,
              such as your device’s <strong>IP address</strong>,
              <strong>browser type</strong>, <strong>pages viewed</strong>, and
              the time spent on the platform.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar tracking technologies to track{" "}
              <strong>activity</strong> on our site and improve user experience.
              You can control cookie preferences through your browser settings.
            </li>
          </ul>

          <h3>How We Use Your Information</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            We use the information we collect for the following purposes:
          </p>

          <ul>
            <li>
              <strong>To Provide and Maintain Services:</strong> Your
              information helps us process your <strong>purchases</strong>,
              manage accounts, and provide <strong>customer support</strong>.
            </li>
            <li>
              <strong>To Improve Our Platform:</strong> We use data to enhance
              and optimize the <strong>user experience</strong>, develop new{" "}
              <strong>features</strong>, and troubleshoot{" "}
              <strong>issues</strong>.
            </li>
            <li>
              <strong>To Communicate with You:</strong> We may use your{" "}
              <strong>contact details</strong> to send you{" "}
              <strong>order updates</strong>, promotional materials, or respond
              to your <strong>queries</strong>.
            </li>
            <li>
              <strong>To Ensure Compliance:</strong> Your information may be
              used to verify compliance with our{" "}
              <strong>Terms of Service</strong> and{" "}
              <strong>Refund Policy</strong>, prevent misuse, and address{" "}
              <strong>legal requirements</strong>.
            </li>
          </ul>

          <h3>How We Share Your Information</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            We do not sell your personal data. However, we may share your
            information in the following ways:
          </p>

          <ul>
            <li>
              <strong>With Service Providers:</strong> We may share your data
              with third-party vendors, payment processors, or service providers
              who help us operate our platform and deliver services. These
              parties are obligated to protect your data and use it only for the
              purposes of providing their services to us.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required to do so by <strong>law</strong>, such as
              in response to a subpoena or government request, or to protect our{" "}
              <strong>legal rights</strong>, customers, or others.
            </li>
            <li>
              <strong>Business Transfers:</strong> If our company undergoes a{" "}
              <strong>merger</strong>, <strong>acquisition</strong>, or{" "}
              <strong>asset sale</strong>, your information may be transferred
              as part of that transaction. You will be notified via email or a
              prominent notice on our platform if such a transfer occurs.
            </li>
          </ul>

          <h3>Data Retention</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, or as required
            by <strong>law</strong>. Once your data is no longer necessary for
            our purposes, we will take reasonable steps to delete or anonymize
            it.
          </p>

          <h3>Your Data Protection Rights</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            Depending on your jurisdiction, you may have the following rights
            regarding your personal data:
          </p>

          <ul>
            <li>
              <strong>Access:</strong> You have the right to request access to
              the personal data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can request correction of
              inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You can request the deletion of your
              personal data under certain circumstances, such as when it is no
              longer needed.
            </li>
            <li>
              <strong>Objection:</strong> You have the right to object to
              certain processing activities, including{" "}
              <strong>marketing communications</strong>.
            </li>
            <li>
              <strong>Data Portability:</strong> You may request a copy of your
              data in a structured, commonly used format.
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> If processing is based on
              consent, you can withdraw your consent at any time by contacting
              us.
            </li>
          </ul>

          <p>
            If you wish to exercise any of these rights, please contact us using
            the details below. We will respond to your request in accordance
            with applicable laws.
          </p>

          <h3>Data Security</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            We take the security of your personal data seriously. We implement a
            variety of <strong>technical and organizational measures</strong> to
            protect your data from unauthorized access, alteration, or
            destruction. However, please note that no method of transmission
            over the Internet or method of electronic storage is 100% secure.
          </p>

          <h3>Cookies and Tracking Technologies</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            Our platform uses <strong>cookies</strong> to improve your browsing
            experience, personalize content, and analyze site traffic. You can
            control cookie settings through your browser, but some features of
            our platform may not function properly if cookies are disabled.
          </p>

          <h3>Children&apos;s Privacy</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            Our platform is not intended for use by children under the age of{" "}
            <strong>13</strong>, and we do not knowingly collect personal data
            from children. If you believe we have inadvertently collected data
            from a child, please contact us, and we will take appropriate
            measures to delete the information.
          </p>

          <h3>Modification or Termination</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            We reserve the right to modify or update this Privacy Policy at any
            time. Any changes will be posted on this page, and the updated
            version will be effective immediately upon posting. We encourage you
            to review this policy periodically for any updates.
          </p>

          <h3>Contact</h3>

          <p
            style={{
              backgroundColor: "#011627",
              color: "#D6DEEB",
              fontSize: "12px",
              padding: "5px",
            }}
          >
            If you have any questions or concerns about this Privacy Policy or
            how we handle your personal data, please contact us at:
          </p>

          <ul>
            <li>
              <strong>Email:</strong> contact@quickfund.co
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
